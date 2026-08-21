/**
 * Hyper-Scale — Accurate measurement graph
 * Grid, tick labels, axis legends
 */
window.HyperGraph = {
  /**
   * Draw a clean coordinate system with numbered axes.
   * @param {CanvasRenderingContext2D} ctx
   * @param {object} opts
   *   w, h, pad
   *   xMin, xMax (default 0..10)
   *   yMin, yMax (auto from data if not set)
   *   xLabel, yLabel
   *   points  optional array of {x,y} to auto-scale Y
   */
  drawAxes(ctx, opts) {
    const w = opts.w, h = opts.h;
    const padL = opts.padL ?? 56;
    const padR = opts.padR ?? 24;
    const padT = opts.padT ?? 28;
    const padB = opts.padB ?? 44;

    const xMin = opts.xMin ?? 0;
    const xMax = opts.xMax ?? 10;

    let yMin = opts.yMin;
    let yMax = opts.yMax;
    if (yMin == null || yMax == null) {
      let lo = 0, hi = 10;
      if (opts.points && opts.points.length) {
        const ys = opts.points.map(p => p.y).filter(Number.isFinite);
        if (ys.length) {
          lo = Math.min(0, ...ys);
          hi = Math.max(1, ...ys);
          const span = hi - lo || 1;
          lo -= span * 0.08;
          hi += span * 0.12;
        }
      }
      yMin = yMin ?? lo;
      yMax = yMax ?? hi;
    }
    if (yMax <= yMin) yMax = yMin + 1;

    const plotW = w - padL - padR;
    const plotH = h - padT - padB;

    const tx = (x) => padL + ((x - xMin) / (xMax - xMin)) * plotW;
    const ty = (y) => padT + (1 - (y - yMin) / (yMax - yMin)) * plotH;

    // Background plot area
    ctx.fillStyle = 'rgba(0, 20, 40, 0.35)';
    ctx.fillRect(padL, padT, plotW, plotH);

    // Major grid (vertical)
    ctx.strokeStyle = 'rgba(0, 200, 255, 0.12)';
    ctx.lineWidth = 1;
    const xStep = opts.xStep ?? 1;
    for (let x = xMin; x <= xMax + 1e-9; x += xStep) {
      const px = tx(x);
      ctx.beginPath();
      ctx.moveTo(px, padT);
      ctx.lineTo(px, padT + plotH);
      ctx.stroke();
    }

    // Major grid (horizontal) — about 5–6 lines
    const yTicks = this._niceTicks(yMin, yMax, 6);
    ctx.strokeStyle = 'rgba(0, 200, 255, 0.12)';
    for (const y of yTicks) {
      const py = ty(y);
      ctx.beginPath();
      ctx.moveTo(padL, py);
      ctx.lineTo(padL + plotW, py);
      ctx.stroke();
    }

    // Zero line stronger if in range
    if (yMin < 0 && yMax > 0) {
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.35)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(padL, ty(0));
      ctx.lineTo(padL + plotW, ty(0));
      ctx.stroke();
    }

    // Axes border
    ctx.strokeStyle = 'rgba(0, 220, 255, 0.45)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(padL, padT, plotW, plotH);

    // X tick numbers
    ctx.fillStyle = 'rgba(160, 230, 255, 0.85)';
    ctx.font = '11px Orbitron, monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    for (let x = xMin; x <= xMax + 1e-9; x += xStep) {
      const px = tx(x);
      // tick mark
      ctx.strokeStyle = 'rgba(0, 220, 255, 0.5)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(px, padT + plotH);
      ctx.lineTo(px, padT + plotH + 5);
      ctx.stroke();
      ctx.fillText(String(x), px, padT + plotH + 8);
    }

    // Y tick numbers
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    for (const y of yTicks) {
      const py = ty(y);
      ctx.strokeStyle = 'rgba(0, 220, 255, 0.5)';
      ctx.beginPath();
      ctx.moveTo(padL - 5, py);
      ctx.lineTo(padL, py);
      ctx.stroke();
      const label = this._formatNum(y);
      ctx.fillStyle = 'rgba(160, 230, 255, 0.85)';
      ctx.fillText(label, padL - 8, py);
    }

    // Axis legends
    ctx.fillStyle = 'rgba(0, 240, 255, 0.9)';
    ctx.font = '12px Rajdhani, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillText(opts.xLabel || 'Turn (time)', padL + plotW / 2, h - 6);

    // Y label rotated
    ctx.save();
    ctx.translate(14, padT + plotH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(opts.yLabel || 'Value', 0, 0);
    ctx.restore();

    // Corner legend box (optional title)
    if (opts.legend) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.35)';
      ctx.lineWidth = 1;
      const lw = Math.min(200, plotW * 0.4);
      ctx.fillRect(padL + 8, padT + 8, lw, 22);
      ctx.strokeRect(padL + 8, padT + 8, lw, 22);
      ctx.fillStyle = 'rgba(0, 240, 255, 0.95)';
      ctx.font = '11px Orbitron, sans-serif';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(opts.legend, padL + 14, padT + 19);
    }

    return { tx, ty, padL, padR, padT, padB, plotW, plotH, yMin, yMax, xMin, xMax };
  },

  drawCurve(ctx, points, tx, ty, color) {
    if (!points || points.length < 2) return;
    ctx.lineWidth = 2.8;
    ctx.strokeStyle = color || 'rgba(0, 240, 255, 0.95)';
    ctx.shadowColor = color || '#00f0ff';
    ctx.shadowBlur = 8;
    ctx.beginPath();
    let started = false;
    for (const p of points) {
      if (!Number.isFinite(p.y)) { started = false; continue; }
      const px = tx(p.x), py = ty(p.y);
      if (!started) { ctx.moveTo(px, py); started = true; }
      else ctx.lineTo(px, py);
    }
    ctx.stroke();
    ctx.shadowBlur = 0;
  },

  _niceTicks(min, max, targetCount) {
    const span = max - min || 1;
    const raw = span / Math.max(targetCount - 1, 1);
    const pow = Math.pow(10, Math.floor(Math.log10(raw)));
    const n = raw / pow;
    let step;
    if (n < 1.5) step = 1 * pow;
    else if (n < 3) step = 2 * pow;
    else if (n < 7) step = 5 * pow;
    else step = 10 * pow;

    const start = Math.ceil(min / step) * step;
    const ticks = [];
    for (let v = start; v <= max + step * 0.01; v += step) {
      ticks.push(Number(v.toPrecision(10)));
    }
    if (!ticks.length) ticks.push(min, max);
    return ticks;
  },

  _formatNum(v) {
    if (Math.abs(v) >= 1000) return v.toFixed(0);
    if (Math.abs(v) >= 10) return v.toFixed(1);
    if (Math.abs(v) >= 1) return v.toFixed(1);
    if (Math.abs(v) < 0.01 && v !== 0) return v.toExponential(1);
    return v.toFixed(2);
  }
};

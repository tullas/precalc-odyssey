/**
 * Hyper-Scale — Scenario-relevant visuals (not generic flash)
 */

window.HyperVisuals = {
  /** Growing bacteria / virus colonies */
  drawColonies(ctx, t, tx, h) {
    const n = Math.min(28, Math.floor(Math.pow(1.4, t) + 2));
    for (let i = 0; i < n; i++) {
      const p = (i + 1) / (n + 1);
      const cx = tx(p * Math.min(t, 10));
      const cy = h * 0.42 + Math.sin(i * 2.1 + t * 0.3) * (25 + t * 3);
      const r = 3 + (t / 10) * 6 + (i % 3);
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 2);
      g.addColorStop(0, 'rgba(80, 220, 120, 0.7)');
      g.addColorStop(1, 'rgba(80, 220, 120, 0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = i % 2 ? '#3dd68c' : '#2bb673';
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill();
    }
  },

  /** Multiplying share/view dots */
  drawDots(ctx, t, tx, h) {
    const n = Math.min(30, Math.floor(Math.pow(1.35, t) + 1));
    for (let i = 0; i < n; i++) {
      const p = (i + 0.5) / n;
      const cx = tx(p * Math.min(t, 10));
      const cy = h * 0.4 + Math.cos(i * 1.3) * 40;
      ctx.fillStyle = 'rgba(180, 100, 255, 0.85)';
      ctx.beginPath();
      ctx.arc(cx, cy, 4 + (t / 20), 0, Math.PI * 2);
      ctx.fill();
    }
  },

  /** Simple growing bars (savings, subscribers) */
  drawBars(ctx, t, tx, ty, maxY, pad, h) {
    const steps = Math.min(10, Math.floor(t) + 1);
    for (let i = 0; i < steps; i++) {
      const x = tx(i + 0.5);
      const val = Math.pow(1.4, i) * 8;
      const barH = Math.min((val / maxY) * (h - pad * 2) * 0.45, h * 0.4);
      ctx.fillStyle = 'rgba(0, 200, 255, 0.35)';
      ctx.fillRect(x - 8, h - pad - barH, 16, barH);
      ctx.fillStyle = 'rgba(0, 220, 255, 0.7)';
      ctx.fillRect(x - 8, h - pad - barH, 16, 3);
    }
  },

  /** Basketball / projectile */
  drawBall(ctx, active, bx, by, w, h, pad) {
    // Hoop on the right
    const hoopX = w - pad - 50;
    const hoopY = h * 0.36;
    ctx.fillStyle = 'rgba(200,220,255,0.2)';
    ctx.fillRect(hoopX + 16, hoopY - 32, 7, 50);
    ctx.strokeStyle = '#ff6b35';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.ellipse(hoopX, hoopY, 20, 6, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.lineWidth = 1;
    for (let i = -2; i <= 2; i++) {
      ctx.beginPath();
      ctx.moveTo(hoopX + i * 6, hoopY + 2);
      ctx.lineTo(hoopX + i * 4, hoopY + 22);
      ctx.stroke();
    }
    if (active && bx != null) {
      ctx.fillStyle = 'rgba(0,0,0,0.25)';
      ctx.beginPath();
      ctx.ellipse(bx + 2, by + 3, 10, 4, 0, 0, Math.PI * 2);
      ctx.fill();
      const g = ctx.createRadialGradient(bx - 3, by - 3, 1, bx, by, 11);
      g.addColorStop(0, '#ffb347');
      g.addColorStop(1, '#e67e22');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(bx, by, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(0,0,0,0.35)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(bx, by, 10, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(bx - 10, by);
      ctx.lineTo(bx + 10, by);
      ctx.stroke();
    }
  },

  /** Pizza slices shrinking */
  drawSlices(ctx, t, tx, h) {
    const people = Math.min(8, Math.floor(t / 1.2) + 1);
    const cx = tx(Math.min(t, 8));
    const cy = h * 0.45;
    const R = 28;
    for (let i = 0; i < people; i++) {
      const a0 = (i / people) * Math.PI * 2 - Math.PI / 2;
      const a1 = ((i + 1) / people) * Math.PI * 2 - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, R, a0, a1);
      ctx.closePath();
      ctx.fillStyle = i % 2 ? 'rgba(255, 180, 60, 0.7)' : 'rgba(255, 140, 40, 0.7)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(0,0,0,0.3)';
      ctx.stroke();
    }
  },

  /** Simple car icons for traffic */
  drawCars(ctx, t, tx, h) {
    const n = Math.min(12, Math.floor(t * 1.2) + 1);
    for (let i = 0; i < n; i++) {
      const x = tx((i + 0.5) / Math.max(n, 1) * Math.min(t, 10));
      const y = h * 0.55 + (i % 3) * 12;
      ctx.fillStyle = 'rgba(100, 180, 255, 0.75)';
      ctx.fillRect(x - 10, y - 5, 20, 10);
      ctx.fillStyle = 'rgba(60, 120, 200, 0.9)';
      ctx.fillRect(x - 6, y - 9, 12, 5);
    }
  },

  /** Log scale marks */
  drawScale(ctx, t, tx, h) {
    for (let i = 0; i <= Math.min(8, Math.floor(t)); i++) {
      const x = tx(i);
      const hgt = 15 + Math.log2(i + 1) * 18;
      ctx.fillStyle = 'rgba(0, 255, 180, 0.4)';
      ctx.fillRect(x - 4, h * 0.6 - hgt, 8, hgt);
    }
  }
};

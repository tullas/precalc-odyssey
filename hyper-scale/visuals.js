/**
 * Hyper-Scale — Scenario-relevant visuals
 */
window.HyperVisuals = {
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
      ctx.beginPath(); ctx.arc(cx, cy, r * 2, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = i % 2 ? '#3dd68c' : '#2bb673';
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
    }
  },

  drawDots(ctx, t, tx, h) {
    const n = Math.min(30, Math.floor(Math.pow(1.35, t) + 1));
    for (let i = 0; i < n; i++) {
      const p = (i + 0.5) / n;
      const cx = tx(p * Math.min(t, 10));
      const cy = h * 0.4 + Math.cos(i * 1.3) * 40;
      ctx.fillStyle = 'rgba(180, 100, 255, 0.85)';
      ctx.beginPath(); ctx.arc(cx, cy, 4 + (t / 20), 0, Math.PI * 2); ctx.fill();
    }
  },

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

  drawBall(ctx, active, bx, by, w, h, pad) {
    const hoopX = w - pad - 50;
    const hoopY = h * 0.36;
    ctx.fillStyle = 'rgba(200,220,255,0.2)';
    ctx.fillRect(hoopX + 16, hoopY - 32, 7, 50);
    ctx.strokeStyle = '#ff6b35'; ctx.lineWidth = 3.5;
    ctx.beginPath(); ctx.ellipse(hoopX, hoopY, 20, 6, 0, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.lineWidth = 1;
    for (let i = -2; i <= 2; i++) {
      ctx.beginPath(); ctx.moveTo(hoopX + i * 6, hoopY + 2); ctx.lineTo(hoopX + i * 4, hoopY + 22); ctx.stroke();
    }
    if (active && bx != null) {
      ctx.fillStyle = 'rgba(0,0,0,0.25)';
      ctx.beginPath(); ctx.ellipse(bx + 2, by + 3, 10, 4, 0, 0, Math.PI * 2); ctx.fill();
      const g = ctx.createRadialGradient(bx - 3, by - 3, 1, bx, by, 11);
      g.addColorStop(0, '#ffb347'); g.addColorStop(1, '#e67e22');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(bx, by, 10, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = 'rgba(0,0,0,0.35)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(bx, by, 10, 0, Math.PI * 2); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(bx - 10, by); ctx.lineTo(bx + 10, by); ctx.stroke();
    }
  },

  drawSlices(ctx, t, tx, h) {
    const people = Math.min(8, Math.floor(t / 1.2) + 1);
    const cx = tx(Math.min(t, 8));
    const cy = h * 0.45;
    const R = 28;
    for (let i = 0; i < people; i++) {
      const a0 = (i / people) * Math.PI * 2 - Math.PI / 2;
      const a1 = ((i + 1) / people) * Math.PI * 2 - Math.PI / 2;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, R, a0, a1); ctx.closePath();
      ctx.fillStyle = i % 2 ? 'rgba(255, 180, 60, 0.7)' : 'rgba(255, 140, 40, 0.7)';
      ctx.fill(); ctx.strokeStyle = 'rgba(0,0,0,0.3)'; ctx.stroke();
    }
  },

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

  /** Richter / log scale — magnitude steps with energy feel */
  drawScale(ctx, t, tx, h, w, pad) {
    // Ground line
    ctx.strokeStyle = 'rgba(180, 140, 80, 0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(pad, h * 0.72);
    ctx.lineTo(w - pad, h * 0.72);
    ctx.stroke();

    // Magnitude steps 1..N (log-like height growth is slow)
    const steps = Math.min(9, Math.floor(t) + 1);
    for (let m = 1; m <= steps; m++) {
      const x = tx(m);
      // Visual height grows slowly (log feel): taller but not exploding
      const barH = 12 + Math.log2(m + 1) * 22;
      // Color shifts with magnitude
      const intensity = m / 9;
      ctx.fillStyle = `rgba(${Math.floor(80 + intensity * 175)}, ${Math.floor(200 - intensity * 120)}, 60, 0.75)`;
      ctx.fillRect(x - 10, h * 0.72 - barH, 20, barH);

      // Magnitude label
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.font = '11px Orbitron';
      ctx.textAlign = 'center';
      ctx.fillText('M' + m, x, h * 0.72 + 16);
    }

    // Small shake lines near the end
    if (t > 5) {
      ctx.strokeStyle = 'rgba(255, 100, 60, 0.35)';
      ctx.lineWidth = 1.5;
      for (let i = 0; i < 5; i++) {
        const y = h * 0.72 + 4 + i * 3;
        ctx.beginPath();
        ctx.moveTo(pad + 20, y);
        ctx.lineTo(w - pad - 20, y + (Math.sin(t * 3 + i) * 2));
        ctx.stroke();
      }
    }

    // Caption
    ctx.fillStyle = 'rgba(0, 255, 180, 0.5)';
    ctx.font = '10px Rajdhani';
    ctx.textAlign = 'left';
    ctx.fillText('Richter steps (each +1 ≈ ×10 energy)', pad, h * 0.72 + 36);
  }
};

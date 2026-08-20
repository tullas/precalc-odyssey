/**
 * Hyper-Scale Visual Storytelling Helpers
 * Outbreak virus clusters + Hoop ball/rim drawing
 */

window.HyperVisuals = {
  /**
   * Draw spreading virus nodes for Outbreak Protocol
   * @param {CanvasRenderingContext2D} ctx
   * @param {number} t - current turn 0..10
   * @param {function} tx - turn -> canvas x
   * @param {function} ty - value -> canvas y
   * @param {number} h - canvas height
   */
  drawOutbreak(ctx, t, tx, ty, h) {
    // Number of virus clusters grows exponentially with time
    const clusters = Math.min(24, Math.floor(Math.pow(1.45, t) + 1));

    for (let i = 0; i < clusters; i++) {
      // Spread clusters across the left-to-current portion of the timeline
      const progress = (i + 1) / (clusters + 1);
      const ct = progress * t;
      const cx = tx(ct);

      // Vertical scatter around mid height, growing more chaotic later
      const scatter = 30 + t * 4;
      const cy = h * 0.45 + Math.sin(i * 1.7 + t) * scatter;

      const radius = 4 + (t / 10) * 7 + (i % 3);

      // Outer glow
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 2.5);
      g.addColorStop(0, 'rgba(255, 0, 170, 0.55)');
      g.addColorStop(1, 'rgba(255, 0, 170, 0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Core
      ctx.fillStyle = i % 2 === 0 ? '#ff00aa' : '#bf00ff';
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      // Tiny highlight
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.beginPath();
      ctx.arc(cx - radius * 0.3, cy - radius * 0.3, radius * 0.25, 0, Math.PI * 2);
      ctx.fill();
    }

    // Connection lines between nearby clusters (infection network)
    ctx.strokeStyle = 'rgba(255, 0, 170, 0.15)';
    ctx.lineWidth = 1;
    for (let i = 0; i < clusters - 1; i++) {
      const p1 = (i + 1) / (clusters + 1);
      const p2 = (i + 2) / (clusters + 1);
      const x1 = tx(p1 * t);
      const x2 = tx(p2 * t);
      const y1 = h * 0.45 + Math.sin(i * 1.7 + t) * (30 + t * 4);
      const y2 = h * 0.45 + Math.sin((i + 1) * 1.7 + t) * (30 + t * 4);
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
  },

  /**
   * Draw basketball hoop and ball for Hoop Shot
   */
  drawHoop(ctx, t, particleActive, ballX, ballY, canvasW, canvasH, pad) {
    // Hoop position (right side of court)
    const hoopX = canvasW - pad - 55;
    const hoopY = canvasH * 0.38;
    const rimRadius = 22;

    // Backboard
    ctx.fillStyle = 'rgba(200, 220, 255, 0.25)';
    ctx.fillRect(hoopX + 18, hoopY - 35, 8, 55);

    // Rim
    ctx.strokeStyle = '#ff6b35';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.ellipse(hoopX, hoopY, rimRadius, 7, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Net (simple lines)
    ctx.strokeStyle = 'rgba(255,255,255,0.35)';
    ctx.lineWidth = 1.2;
    for (let i = -3; i <= 3; i++) {
      ctx.beginPath();
      ctx.moveTo(hoopX + i * 5, hoopY + 2);
      ctx.lineTo(hoopX + i * 3.5, hoopY + 28);
      ctx.stroke();
    }

    // Ball (only while executing)
    if (particleActive && ballX != null) {
      // Ball shadow
      ctx.fillStyle = 'rgba(0,0,0,0.3)';
      ctx.beginPath();
      ctx.ellipse(ballX + 3, ballY + 4, 11, 5, 0, 0, Math.PI * 2);
      ctx.fill();

      // Ball body
      const ballGrad = ctx.createRadialGradient(ballX - 4, ballY - 4, 2, ballX, ballY, 12);
      ballGrad.addColorStop(0, '#ffb347');
      ballGrad.addColorStop(1, '#e67e22');
      ctx.fillStyle = ballGrad;
      ctx.beginPath();
      ctx.arc(ballX, ballY, 11, 0, Math.PI * 2);
      ctx.fill();

      // Ball lines
      ctx.strokeStyle = 'rgba(0,0,0,0.35)';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.arc(ballX, ballY, 11, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(ballX - 11, ballY);
      ctx.lineTo(ballX + 11, ballY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(ballX, ballY - 11);
      ctx.lineTo(ballX, ballY + 11);
      ctx.stroke();
    }
  }
};

const canvas = document.getElementById('graphCanvas');
const ctx = canvas.getContext('2d');

function drawGraph(h, k) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    for (let x = -10; x <= 10; x += 0.1) {
        const y = (x - h)**2 + k;
        const px = (x + 10) * 30;
        const py = canvas.height / 2 - y * 20;
        if (x === -10) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.strokeStyle = '#00ffcc';
    ctx.stroke();
}

console.log('Unit 1 interactive ready');
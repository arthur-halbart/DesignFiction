const canvas = document.getElementById('noiseCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function generateNoise() {
  const imageData = ctx.createImageData(canvas.width, canvas.height);
  const buffer = new Uint32Array(imageData.data.buffer);
  for (let i = 0; i < buffer.length; i++) {
    buffer[i] = (255 << 24) | // alpha
                (Math.random() * 255 << 16) | // red
                (Math.random() * 255 << 8) | // green
                (Math.random() * 255); // blue
  }
  ctx.putImageData(imageData, 0, 0);
  requestAnimationFrame(generateNoise);
}

generateNoise();

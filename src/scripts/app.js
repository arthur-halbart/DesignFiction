const canvas = document.getElementById('noiseCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  ///// L'ia m'a aidé à mettre du 'noise' sur mon site

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

//////////////////////////////////////////////////:
//////////////////////////////////////////////////:

function revealOnScroll() {
    let elements = document.querySelectorAll(".reveal");
    let windowHeight = window.innerHeight;
    
    elements.forEach((el) => {
      let elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 50) {
        el.classList.add("active");
      }
    });
  }
  
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

//////////////////////////////////////////////////:
//////////////////////////////////////////////////:


//////// Code vue en cours avec monsieur Devouge
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu-wrapper');

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('open');
	menu.classList.toggle('open');
});
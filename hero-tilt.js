const layer = document.querySelector('.hero');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 8;
  const y = (e.clientY / window.innerHeight - 0.5) * 8;
  layer.style.transform = `translate(${x}px, ${y}px)`;
});

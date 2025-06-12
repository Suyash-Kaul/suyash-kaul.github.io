const cursor = document.querySelector(".custom-cursor");

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

// Track real mouse position
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Animate the cursor to follow the real cursor with delay
function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.1;  // Lower = more delay
  cursorY += (mouseY - cursorY) * 0.1;

  cursor.style.top = cursorY + "px";
  cursor.style.left = cursorX + "px";

  requestAnimationFrame(animateCursor);
}
animateCursor();

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});

const hoverTargets = document.querySelectorAll("a, .hero");
hoverTargets.forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursor.classList.add("glow");
  });
  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("glow");
  });
});

const hoverTargets2 = document.querySelectorAll(".solutions-slider-section, .solutions-slider-section2, .solutions-slider-section3");
hoverTargets2.forEach(eq => {
  eq.addEventListener("mouseenter", () => {
    cursor.classList.add("change-color");
  });
  eq.addEventListener("mouseleave", () => {
    cursor.classList.remove("change-color");
  });
});

const hoverTargets3 = document.querySelectorAll(".explore-jobs-section");
hoverTargets3.forEach(pq => {
  pq.addEventListener("mouseenter", () => {
    cursor.classList.add("explore-jobs-effect");
  });
  pq.addEventListener("mouseleave", () => {
    cursor.classList.remove("explore-jobs-effect");
  });
});
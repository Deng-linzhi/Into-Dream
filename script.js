const bgm = document.getElementById("bgm");
const enterBtn = document.getElementById("enter-btn");
const overlay = document.getElementById("enter-overlay");

enterBtn.addEventListener("click", () => {
  bgm.volume = 0.35;
  bgm.play();

  overlay.style.opacity = "0";
  overlay.style.pointerEvents = "none";

  setTimeout(() => {
    overlay.remove();
  }, 800);
});

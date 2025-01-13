const hamburger=document.querySelector(".hamburger");
const navlinks=document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navlinks.classList.togggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n,
addEventListener("click", () => {
  hamburger.classList.remove("active");
  navlinks.classList.remove("active");
})
)

// preloader
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  setTimeout(function () {
    preloader.style.display = "none";
  }, 1500);
});
// end
// hide scroll to top button on scroll
const scrollTop = document.getElementById("top");
document.addEventListener(
  "DOMContentLoaded",
  window.addEventListener("scroll", function () {
    window.scrollY > 15
      ? (scrollTop.style.display = "flex")
      : (scrollTop.style.display = "");
  })
); // end
//intersection observer begins
const observer = new IntersectionObserver((e) => {
    e.forEach((e) => {
      console.log(e),
        e.isIntersecting
          ? (e.target.classList.add("show"),
            e.target.classList.add("show2"),
            e.target.classList.add("show3"),
            observer.unobserve(e.target))
          : (e.target.classList.remove("show"),
            e.target.classList.remove("show2"),
            e.target.classList.remove("show3"));
    });
  }),
  hidden = document.querySelectorAll(".hidden"),
  hidden2 = document.querySelectorAll(".hidden2"),
  hidden3 = document.querySelectorAll(".hidden3");

hidden.forEach((e) => observer.observe(e)),
  hidden2.forEach((e) => observer.observe(e)),
  hidden3.forEach((e) => observer.observe(e));

//intersection observer ends
// close and open navbar menu
const openMenu = document.getElementById("openMenu"),
  closeMenu = document.getElementById("closeMenu"),
  contactBtn = document.querySelector("#header-home  #main-nav > a:last-child"),
  navMenu = document.querySelector("#header-home  #main-nav  ul");
openMenu.addEventListener("click", () => {
  (navMenu.style.display = "flex"),
    (closeMenu.style.display = "block"),
    (contactBtn.style.display = "block"),
    (openMenu.style.display = "none");
});
closeMenu.addEventListener("click", () => {
  (navMenu.style.display = "none"),
    (closeMenu.style.display = "none"),
    (contactBtn.style.display = "none"),
    (openMenu.style.display = "");
});
// modal
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal on outside click
window.addEventListener('click', e =>
    e.target == modal ? modal.classList.remove('show-modal') : false
);
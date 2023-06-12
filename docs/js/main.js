// preloader
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  setTimeout(function () {
    preloader.style.display = "none";
  }, 1500);
});
//intersection observer begins
const observer = new IntersectionObserver((e) => {
    e.forEach((e) => {
      console.log(e),
        e.isIntersecting
          ? (e.target.classList.add("show"),
            e.target.classList.add("show2"),
            e.target.classList.add("show3"),
            observer.observe(e.target))
          : (e.target.classList.remove("show"),
            e.target.classList.remove("show2"),
            e.target.classList.remove("show3"));
    });
  }),
  hidden = document.querySelectorAll(".hidden"),
  hidden2 = document.querySelectorAll(".hidden2");
hidden3 = document.querySelectorAll(".hidden3");

hidden.forEach((e) => observer.observe(e)),
  hidden2.forEach((e) => observer.observe(e)),
  hidden3.forEach((e) => observer.observe(e));

//intersection observer ends

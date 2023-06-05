//intersection observer begins
const observer = new IntersectionObserver((e) => {
    e.forEach((e) => {
      console.log(e),
        e.isIntersecting
          ? (e.target.classList.add("show"),
            e.target.classList.add("show2"),
            observer.unobserve(e.target))
          : (e.target.classList.remove("show"),
            e.target.classList.remove("show2"));
    });
    var options = { rootMargin: "50%", threshold: 1 };
  }),
  hidden = document.querySelectorAll(".hidden"),
  hidden2 = document.querySelectorAll(".hidden2");
hidden.forEach((e) => observer.observe(e)),
  hidden2.forEach((e) => observer.observe(e));
//intersection observer ends

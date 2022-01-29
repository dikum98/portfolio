// navbar 맨 위에서 투명하게 만들기, 스크롤 내리면 arrow-up 버튼 보이기
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
const arrowUp = document.querySelector("#arrow-up");
document.addEventListener("scroll", () => {
  if (scrollY > navbarHeight) {
    navbar.classList.add("navbar-appear");
    arrowUp.classList.remove("disappear");
  } else {
    navbar.classList.remove("navbar-appear");
    arrowUp.classList.add("disappear");
  }
});

// navbar 클릭한 menu page로 이동
navbar.addEventListener("click", (event) => {
  const page = event.target.dataset.link;
  if (!page) return;
  scrollToPage(page);
});

// navbar menu toggle
const navbarMenu = document.querySelector(".navbar__menu");
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("disappear");
});

// contact me 버튼 클릭시 contact 페이지로 이동
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  scrollToPage("#contact");
});

// work category filtering
const categoryContainer = document.querySelector(".works__categories");
const projectsContainer = document.querySelector(".works__projects");
categoryContainer.addEventListener("click", (event) => {
  const categoryType =
    event.target.dataset.type || event.target.parentNode.dataset.type;
  const projects = document.querySelectorAll(".project");
  projectsContainer.classList.add("anim-out");
  if (!categoryType) return;

  setTimeout(() => {
    projects.forEach((project) => {
      const projectType = project.dataset.type;
      if (categoryType === projectType || categoryType === "all") {
        project.classList.remove("disappear");
      } else {
        project.classList.add("disappear");
      }
    });
    projectsContainer.classList.remove("anim-out");
  }, 300);

  // work category 클릭된 버튼 활성화
  const workCategories = document.querySelectorAll(".category");
  workCategories.forEach((category) => {
    category.classList.remove("clicked");
  });
  event.target.classList.add("clicked");
});

// arrow-up 버튼 클릭시 맨위로 이동
arrowUp.addEventListener("click", () => {
  scrollToPage("#home");
});

// page 위치로 스크롤링
function scrollToPage(page) {
  const elem = document.querySelector(page);
  elem.scrollIntoView({ behavior: "smooth" });
}

const navbarMenu = document.querySelector(".navbar__menu");
const navbar = document.querySelector("#navbar");
const contact = document.querySelector(".home__contact");
const menuItem = document.querySelectorAll(".menu__item");

// navbar 토글버튼 동작
(function navbarToggleHandler() {
  const toggleBtn = document.querySelector(".navbar__toggle-btn");
  toggleBtn.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
  });
})();

// 메뉴 버튼 각각을 클릭시 메뉴 이벤트 핸들러 호출
navbarMenu.addEventListener("click", (event) => {
  menuHandler(event);
});

// 홈화면 컨택트 버튼 누르면 컨택트 화면으로 이동
contact.addEventListener("click", () => {
  scrollToPage("#contact");
});

// 특정 페이지로 이동하고, 클릭한 메뉴를 활성화
function menuHandler(event) {
  const link = event.target.dataset.link;
  navbarMenu.classList.remove("active");
  scrollToPage(link);
  menuItem.forEach((menu) => {
    menu.firstElementChild.classList.remove("active");
    event.target.classList.add("active");
  });
}

// 아래로 스크롤시 투명화
document.addEventListener("scroll", () => {
  if (scrollY > navbar.clientHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// 아래로 스크롤시 home 화면 투명화
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - scrollY / homeHeight;
});

// arrow-up 핸들링
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});
arrowUp.addEventListener("click", () => {
  scrollToPage("#home");
});

// 특정 스크롤로 이동
function scrollToPage(link) {
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

// My work project filtering
const categories = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
categories.addEventListener("click", (event) => {
  const target = event.target;
  const type = target.dataset.type || target.parentNode.dataset.type;
  if (!type) return;
  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      if (type === project.dataset.type || type === "all") {
        project.classList.remove("disappear");
      } else {
        project.classList.add("disappear");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
});

// work category 클릭된 버튼 활성화
const categoryBtn = document.querySelectorAll(".category__btn");
categories.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("category") ||
    !event.target.firstElementChild
  )
    return;
  categoryBtn.forEach((btn) => {
    btn.classList.remove("active");
    btn.firstElementChild.classList.remove("active");
    event.target.classList.add("active");
    event.target.firstElementChild.classList.add("active");
    console.log(event.target);
  });
});

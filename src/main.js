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
contact.addEventListener("click", scrollToPage);

// 특정 스크롤로 이동
function scrollToPage(event) {
  document
    .querySelector(event.target.dataset.link)
    .scrollIntoView({ behavior: "smooth" });
}

// 특정 페이지로 이동하고, 클릭한 메뉴를 활성화
function menuHandler(event) {
  scrollToPage(event);
  menuItem.forEach((menu) => {
    menu.firstElementChild.classList.remove("active");
    event.target.classList.add("active");
  });
}

// navbar 투명화 on-off
window.addEventListener("scroll", () => {
  if (scrollY > navbar.clientHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

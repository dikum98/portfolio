const toggleBtn = document.querySelector(".navbar__toggle-btn");
const navbarMenu = document.querySelector(".navbar__menu");
const navbar = document.querySelector("#navbar");
const menuItem = document.querySelectorAll(".menu__item");

toggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

// 버튼 각각을 클릭시 이벤트 핸들러 호출
menuItem.forEach((menu) => {
  menu.addEventListener("click", menuHandler);
  console.log(menuItem);
});

function menuHandler(event) {
  menuItem.forEach((menu) => {
    menu.classList.remove("active");
    event.currentTarget.classList.add("active");
    console.log(event.currentTarget, event.target);
  });
}

window.addEventListener("scroll", () => {
  if (scrollY > 70) {
    navbar.style.backgroundColor = "var(--color-light-violet)";
    navbar.style.transition = "all 0.3s ease";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});

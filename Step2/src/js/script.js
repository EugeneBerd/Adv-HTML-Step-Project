let btn = document.querySelector(`.menu__btn`);
let menu = document.querySelector(`.main-menu`);
btn.addEventListener("click", function (e) {
  menu.classList.toggle("active");
});

let btn = document.querySelector(`.menu__btn`);
let menu = document.querySelector(`.main-menu`);

btn.addEventListener("click", function (e) {
  menu.classList.toggle("active");
});

let outside = document.getElementsByTagName("body")[0];
outside.addEventListener("click", function (e) {
  if (
    !document.getElementsByClassName("hamburger-menu")[0].contains(e.target)
  ) {
    menu.classList.remove("active");
    document.getElementById("menu__toggle").checked = false;
  }
});

let inside = document.getElementById("menu");
inside.addEventListener("click", function (e) {
  e.stopPropagation();
});

if (window.matchMedia("(min-width: 481px)").matches) {
  console.log("sss");
}

let mql = window.matchMedia("(min-width: 481px)");

function screenTest(e) {
  if (e.matches) {
    menu.classList.remove("active");
    document.getElementById("menu__toggle").checked = false;
  }
}

mql.addListener(screenTest);

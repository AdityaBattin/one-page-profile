const mainMenu = document.querySelector(".mainMenu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");
const menu_items = document.querySelectorAll("nav ul li a");
const socialIcons = document.querySelectorAll("nav ul .icons");
const socialIcons1 = document.querySelectorAll(".fa-facebook");
const socialIcons2 = document.querySelectorAll(".fa-twiter");
const socialIcons3 = document.querySelectorAll(".fa-instagram");
const socialIcons4 = document.querySelectorAll(".fa-github");
openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

// close menu when you click on a menu item
menu_items.forEach((item) => {
  item.addEventListener("click", function () {
    close();
  });
});

function show() {
  mainMenu.style.display = "flex";
  // socialIcons.style.display = "flex";
  // socialIcons1.style.display = "block";
  // socialIcons2.style.display = "block";
  // socialIcons3.style.display = "block";
  // socialIcons4.style.display = "block";
  mainMenu.style.top = "0";
}
function close() {
  mainMenu.style.top = "-100%";
  // mainMenu.style.display = "none";
}

let menuShow = document.querySelector(".menu-mobile span");

menuShow.addEventListener("click", (e) => {
  e.preventDefault();
  let menuMobile = document.querySelector(".menu-mobile ul");
  if (menuMobile.classList.contains("show-menu")) {
    menuMobile.classList.remove("show-menu");
  } else {
    menuMobile.classList.add("show-menu");
  }
});



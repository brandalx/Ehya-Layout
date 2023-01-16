function toggleMenu() {
  const menu = document.querySelector("[data-open-menu]");

  if (!menu) return;

  if (menu.dataset.openMenu === "true") {
    menu.dataset.openMenu = "false";
    bodyDisableScroll(false);
  } else {
    menu.dataset.openMenu = "true";
    bodyDisableScroll(true);
  }
}

function bodyDisableScroll(active) {
  if (active) {
    document.body.classList.add("scroll-disable");
  } else {
    document.body.classList.remove("scroll-disable");
  }
}

const navButton = document.getElementById("navigation-button");

navButton.addEventListener("click", toggleMenu);

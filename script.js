"use strict";

const text_parent = document.querySelector(".studio_text_container");
const menu_parent = document.querySelector(".hidden__menu");
const crossBtn = document.querySelector(".cross");
const menuColumns = document.querySelectorAll(".column");
const allImages = document.querySelectorAll("img");

text_parent.addEventListener("click", () => {
  text_parent.style.display = "none";
  menu_parent.style.animationPlayState = "running";
  menu_parent.style.display = "block";

  menuColumns.forEach((ele) => {
    ele.style.opacity = "0";
    setTimeout(() => {
      if (ele.style.opacity == "0") ele.style.opacity = "1";
      ele.classList.add("showmingMenu");
      ele.style.animationPlayState = "running";
    }, 700);
  });
});

document.querySelector(".cross").addEventListener("click", () => {
  menu_parent.style.display = "none";
  setTimeout(() => {
    text_parent.style.display = "block";
  }, 500);
});

allImages.forEach((image) => {
  image.addEventListener("mouseover", () => {
    image.style.cursor = "pointer";
    image.style.filter = "contrast(160%) saturate(1) opacity(.5)";
  });
  image.addEventListener("mouseout", () => {
    image.style.cursor = "pointer";

    image.style.filter = "none";
  });
});

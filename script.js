"use strict";

const text_parent = document.querySelector(".studio_text_container");
const menu_parent = document.querySelector(".hidden__menu");
const crossBtn = document.querySelector(".cross");
const menuColumns = document.querySelectorAll(".column");
const allImages = document.querySelectorAll("img");
const passcodeBtn = document.querySelector(".passcode");
const allColumns = document.querySelectorAll(".columnTitle");

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

function optionsDisable() {
  document.querySelectorAll(".rows").forEach((ele) => {
    ele.style.display = "none";
  });
}
const mediaWork = window.matchMedia("(max-width:800px)");
console.log(mediaWork);
setTimeout(() => {
  allColumns.forEach((headings, i) => {
    const target = headings.closest(".column").querySelector(".rows");
    console.log(target);
    if (mediaWork.matches) {
      headings.addEventListener("click", () => {
        optionsDisable();

        target.style.display = "flex";
      });
    }
  });
}, 1000);

passcodeBtn.addEventListener("click", () => {
  menuColumns.forEach((ele) => {
    ele.style.display = "none";
  });
  document.querySelector(".passcodeForm").style.display = "flex";
});

document.querySelector("#exitPasscode").addEventListener("click", () => {
  document.querySelector(".passcodeForm").style.display = "none";
  menuColumns.forEach((ele) => {
    ele.style.display = "flex";
  });
});

"use strict";

const text_parent = document.querySelector(".studio_text_container");
const menu_parent = document.querySelector(".hidden__menu");
const crossBtn = document.querySelector(".cross");
const passcodeBtn = document.querySelector(".passcode");
const passcode_delete_Btn = document.querySelector(".delete");
const menuColumns = document.querySelectorAll(".column");
const allImages = document.querySelectorAll("img");
const allColumns = document.querySelectorAll(".columnTitle");
const allCode = document.querySelectorAll(".code");

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

// To remove all the Columns/ Fields like News, Celebrity, Work, etc
function optionsDisable() {
  document.querySelectorAll(".rows").forEach((ele) => {
    ele.style.display = "none";
  });
}

// Using Javascript for removing click events handling on the heading  once the screen is above 700px or tablet view
const mediaWork = window.matchMedia("(max-width:800px)");
setTimeout(() => {
  allColumns.forEach((headings, i) => {
    const target = headings.closest(".column").querySelector(".rows");
    if (mediaWork.matches) {
      headings.addEventListener("click", () => {
        optionsDisable();
        target.style.display = "flex";
      });
    }
  });
}, 1000);

// When user clicks the Passcode Button
passcodeBtn.addEventListener("click", () => {
  menuColumns.forEach((ele) => {
    ele.style.display = "none";
  });
  document.querySelector(".passcodeForm").style.display = "flex";
});

// When user clicks the Passcode Exit Button
document.querySelector("#exitPasscode").addEventListener("click", () => {
  document.querySelector(".passcodeForm").style.display = "none";
  menuColumns.forEach((ele) => {
    ele.style.display = "flex";
  });
});

// get the number when you click on that :
let Passcode_entered = "";
let Passcode_length = 0;
let Passcode_required = "00000";
document.querySelectorAll(".number").forEach((number) => {
  number.addEventListener("click", (e) => {
    let status = false;
    ++Passcode_length;
    const range = "1234567890";
    e.target.classList.value.split("").forEach((ele) => {
      status = status || range.includes(ele);
      if (status) {
        Passcode_entered += ele;
        status = false;
        if (Passcode_length <= 4) {
          allCode[Passcode_length - 1].style.backgroundColor = "white";
          allCode[Passcode_length - 1].style.border = "1px solid black";
          console.log(Passcode_entered);
        } else {
          checkPasscode();
        }
      }
    });
  });
});

const clearPasscode = () => {
  allCode.forEach((code) => {
    code.style.backgroundColor = "black";
    code.style.border = "1px solid white";
  });
  Passcode_entered = "";
  Passcode_length = 0;
};

const checkPasscode = () => {
  Passcode_entered == Passcode_required && Passcode_length == 5
    ? setTimeout(() => {
        window.alert("Right Passcode");
      }, 500)
    : setTimeout(() => {
        window.alert("Wrong Passcode");
      }, 500);
  clearPasscode();
};

// if user clicks the delete button in passcode
passcode_delete_Btn.addEventListener("click", () => {
  console.log(Passcode_entered);
  Passcode_entered = Passcode_entered.slice(0, Passcode_length - 1);
  allCode[Passcode_length - 1].style.border = "1px solid white";
  allCode[Passcode_length - 1].style.backgroundColor = "black";
  Passcode_length--;
});

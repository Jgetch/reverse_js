let paraElement = document.getElementById("para");
let buttonElement = document.getElementById("button");
let emoji = document.getElementById("face");

function clicky() {
  if (paraElement.textContent === "REVERSE ME") {
    paraElement.textContent = "ƎM ƎƧЯƎVƎЯ";
    emoji.textContent = "o_O";
  } else {
    paraElement.textContent = "REVERSE ME";
    emoji.textContent = "O_o";
  }
  button();
}

function button() {
  if (paraElement.textContent === "REVERSE ME") {
    buttonElement.textContent = "Don't do that again! 😠 ";
  } else {
    buttonElement.textContent = "help.. 😟";
  }
  console.log("test");
}

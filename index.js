let paragraph = document.getElementById("para");
let bttn = document.getElementById("button");
let emote = document.getElementById("face");

function clicky() {
  if (paragraph.textContent === "REVERSE ME") {
    paragraph.textContent = "ƎM ƎƧЯƎVƎЯ";
    emote.textContent = "o_O";
  } else {
    paragraph.textContent = "REVERSE ME";
    emote.textContent = "O_o";
  }
  button();
}

function button() {
  if (paragraph.textContent === "REVERSE ME") {
    bttn.textContent = "Don't do that again! 😠 ";
  } else {
    bttn.textContent = "help.. 😟";
  }
  console.log("test");
}

const img = document.querySelector("img");
const eventOutput = document.querySelector(".event-output");

img.addEventListener("click", imgEventHandler);

function imgEventHandler() {
  prompt("What's your name?");
}

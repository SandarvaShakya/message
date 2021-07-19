const button = document.querySelector(".btn");
const text = document.querySelector(".box");
const message = document.querySelector(".message");
const note = document.querySelector(".note");

button.addEventListener("click", () => {
  if (text.value === "") {
    note.style.display = "flex";
    setTimeout(function () {
      note.style.display = "none";
    }, 2000);
  } else {
    message.textContent = text.value;
    text.value = "";
  }
});

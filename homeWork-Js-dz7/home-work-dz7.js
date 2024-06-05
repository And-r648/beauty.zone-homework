const button = document.getElementById("btn");
const text = document.getElementById("text");
const hideButton = document.getElementById("hide");

button.addEventListener("click", () => (text.style = "display: none"));
hideButton.addEventListener(
  "click",
  () => (hideButton.style = "display: none")
);

const nodeTitles = document.querySelectorAll(".node-title");

nodeTitles.forEach((title) => {
  title.addEventListener("click", toggleChildren);
});

function toggleChildren(event) {
  const node = event.target.closest(".tree-node");
  const children = node.querySelector(".children");

  if (children.style.display === "none") {
    children.style.display = "block";
  } else {
    children.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const colorButton = document.getElementById("colorButton");
  const section = document.querySelector("section");
  const loginContainer = document.getElementById("loginContainer");

  const colors = ["black", "lightblue", "orange", "lightpink"];
  let colorIndex = 0;

  colorButton.addEventListener("click", function () {
    colorIndex = (colorIndex + 1) % colors.length;
    loginContainer.style.backgroundColor = colors[colorIndex];
    section.style.backgroundColor = colors[colorIndex];
  });
});

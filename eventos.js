let divElement = document.getElementById("container");
let buttonElement = document.getElementById("button");

buttonElement.addEventListener("click", function (event) {
  alert("Hola!");
  event.stopPropagation();
});

divElement.addEventListener("click", function (event) {
  alert("Hola! soy el div");
});

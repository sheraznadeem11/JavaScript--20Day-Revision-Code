let button = document.querySelector("button");
let div = document.querySelector("div");
let age = document.querySelector("input");
let reset = document.querySelector("#reset");

button.onclick = () => {
  let months = age.value * 12;
  div.style.visibility = "visible";
  reset.style.visibility = "visible";
  div.innerText = ` Age in monthse :${months}`;
};

reset.onclick = () => {
  div.innerText = "";
  div.style.visibility = "hidden";
  age.value = "1";
  reset.style.visibility = "hidden";
};

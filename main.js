var counter = 0;

function onClickButton(el) {
  //alert("Click!!!");
  counter++;
  //console.log(counter);
  el.innerHTML = "Вы нажали на кнопку: " + counter;
  //   el.style.background = "red";
  //   el.style.color = "blue";
  el.style.cssText = "border-radius: 5px; border: 0; font-size: 20px;";
  console.log(counter);
}

function onInput(el) {
  if (el.value == "Hello") {
    alert("And you Hello!!!");
  }
  console.log(el.value);
}

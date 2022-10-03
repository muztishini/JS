// alert("Hello!!!");
// var data = confirm("ВЫ дома?");
//console.log(data);
// if (data) {
//   alert("Whoooo!!!");
// } else {
//   alert("Noooo!!!!");
// }

// var data=prompt("Скажите сколько вам  лет");
// console.log(data);

var person = null;
if (confirm("Вы точно уверены?")) {
  person = prompt("Введите ваше имя");
  if (person == null) {
    alert("вы не указали имя");
  } else {
    alert("Привет, " + person);
  }
} else {
  alert("Вы нажали на 'отмена'");
}

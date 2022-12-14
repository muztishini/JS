document.getElementById("main-form").addEventListener("submit", checkForm);

function checkForm(event) {
  event.preventDefault();

  //var name = document.getElementById("name").value;
  var el = document.getElementById("main-form");

  var name = el.name.value;
  var pass = el.pass.value;
  var repass = el.repass.value;
  var state = el.state.value;

  var fail = "";

  if (name == "" || pass == "" || state == "") {
    fail = "Запоните все поля";
  } else if (name.length <= 1 || name.length > 50) {
    fail = "Введите корректное имя";
  } else if (pass != repass) {
    fail = "Пароли не совпадают";
  } else if (pass.split("&").length > 1) {
    fail = "Некорректный пароль";
  }

  if (fail != "") {
    document.getElementById("error").innerHTML = fail;
  } else {
    alert("Все данные корректно заполнены");
    window.location = "9.html";
  }
}

var text = document.getElementById("text");
text.title = "New text";
console.log(text.title);

text.style.color = "yellow";
text.style.backgroundColor = "green";

text.innerHTML = "New<br>string";

// var spans = document.getElementsByTagName("span");

var spans = document.getElementsByClassName("simple-text");

for (var i = 0; i < spans.length; i++) {
  console.log(spans[i].innerHTML);
}

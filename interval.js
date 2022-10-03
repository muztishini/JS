// var id = setInterval(my_func, 1000);

// var counter = 0;
// function my_func() {
//   counter++;
//   console.log("Counter: " + counter);

//   if (counter == 3) {
//     clearInterval(id);
//   }
// }

// var counter = 0;

// setInterval(function () {
//   counter++;
//   console.log("Counter: " + counter);
// }, 1000);

// setTimeout(function () {
//   console.log("Timer is working!");
// }, 2000);

var time = 1;
setTimeout(my_func, time*1000);

function my_func() {
  console.log("Timer is working! " + time + "sec.");
}

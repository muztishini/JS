// console.log("javascript");
// console.info("javascript!!");
// console.error("Error!!!");
// console.warn("Warning!");

// var num;
// num = 5;

// var num = 5;
// num = 7;
// console.log("Переменная: " + num);

// console.log("Math: " + Math.PI);
// console.log("Math: " + Math.E);
// console.log("Math: " + Math.min(4, 5, 6, 1));
// console.log("Math: " + Math.max(4, 5, 6, 1));

// var number = 15;
// var isHasHouse = true;
// if (number == 5) {
//   console.log("Ok");
// }

// if (number != 15) {
//   console.log("ok");
// } else if (number == 15) {
//   console.log("elif");
// } else {
//   console.log("else");
// }

/*
|| operator OR
&& operator AND
*/
// if (number == 5 && isHasHouse == true) {
//     console.log("ok");
// } else {
//     console.log("no");
// }

// var stroka = "45";
// switch (stroka) {
//     case "4":
//         console.log("Переменная со значением 4");
//         break;
//     case "45":
//         console.log("Переменная со значением 45");
//         break;
//     case "word":
//         console.log("Переменная со значением WORD");
//         break;
// }

// var arr = [5, true, 5.6, 0];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr.length);

// var matrix = [
//   [4, 6, 8],
//   [1, 2, 3],
//   [7, 8, 9],
// ];
// console.log(matrix[1][1]);
// console.log(matrix);
// matrix[2][0] = "loooooooooooooping";
// console.log(matrix);

// for (var i = 100; i > 5; i /= 2) {
//   console.log(i);
// }

// var j = 0;
// while (j < 10) {
//   console.log(j);
//   j++;
// }
// var isHasCar = true;
// while (isHasCar) {}

// var x = 0;
// do {
//   console.log(x);
//   x++;
// } while (x < 10);

// for (var i = 10; i <= 20; i += 2) {
//   if (i > 15) {
//     break;
//   }
//   console.log(i);
// }
// for (var i = 10; i <= 20; i++) {
//   if (i % 2 == 0) {
//     continue;
//   }
//   console.log(i);
// }

var arr = [5, 6, 7, 8,"fgh", 9, 0, 1];

for (var i = 0; i < arr.length; i++) {
  console.log("Элемент " + i + ": " + arr[i]);
}

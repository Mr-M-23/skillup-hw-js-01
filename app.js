"use strict";

// задание 1

Math.PI;
let num = Math.PI;

//b = Math.floor(num * 100) / 100;
console.log(Math.floor(num * 100) / 100);
// 3.141... -> 314.1... ->  314-> 3.14 number to less
//console.log(b);

console.log(Math.ceil(num * 100) / 100);
// 3.141... -> 314.1... ->  315-> 3.15 number to more

console.log(Math.round(num * 100) / 100);
// 3.141... -> 314.1... ->  314-> 3.14 number to main
console.log(Math.trunc(num * 100) / 100);
// 3.141... -> 314.1... ->  314-> 3.14 part removal
console.log(num.toFixed(2)); // to string
console.log(+num.toFixed(2)); // to number

// 2 Exercise

//a = [15, 11, 16, 12, 51, 12, 13, 51];
//Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log(Math.max(15, 11, 16, 12, 51, 12, 13, 51));
console.log(Math.min(15, 11, 16, 12, 51, 12, 13, 51));
//let b;
//b = Math.random;
//Math.random = b;
console.log(Math.trunc(Math.random() * 100) / 100);
console.log(Math.random(0) + 101);
console.log(Math.round(Math.random() * 100.23)); // wheere x.x = 100.23

//let b;
//b = 0.6 + 0.7;
//console.log(b.toFixed(1)); //string
//console.log(+b.toFixed(1)); // number

let c;
c = "100$";
let d;
///d = cu;

console.log(parseInt("100$"));
//Number(c);
//console.log(c);
//console.log(c.toFixed(2));

let str = "some test string";
console.log(str.slice(0, 1) + str.slice(-1));
console.log(
  str.slice(0, 1).toUpperCase() + str.slice(1, -1) + str.slice(-1).toUpperCase()
);
// вирізали збільшили + сердн часть + вирізали збільшили додали без знання загальної довжини строки

console.log(str.indexOf("string"));
let aim = " ";

let pos = 0;
while (true) {
  let foundPos = str.indexOf(aim, pos);
  if (foundPos == -1) break;

  console.log(`Найдено тут: ${foundPos}`);
  pos = foundPos + 1; // продолжаем со следующей позиции
}

console.log(str.substr(5, 4));
console.log(str.slice(5, 9));
console.log(str.slice(0, -6));
/* Получить первую и последнюю буквы строки
Седних 6 - и символов(то есть исходная строка без последних 6и символов)
Из двух переменных a = 20 и b = 16 получить переменную string, в которой будет содержаться текст “2016”*/
//let a = 20;
let b = 16;
// let string = String(a) + String(b);
//console.log(string);

let arnb = {
  type: "jazz",
  level: "mi",
  product: "iphone",
  price: 1000,
  currency: "dollar",
  details: {
    model: "bugatti",
    color: "grey",
  },
};
console.log(arnb);

/*let a = 0 || "string"; // 2 или вибирает першу правду
let a = 1 && "string"; // "string"
let a = null || 25; // 25
let a = null && 25; // null
let a = null || 0 || 35; // 35
let a = null && 0 && 35; // null

12 + 14 + "12"; // "2612" есть + значит строка тобиш 12 +14 = 26 + "" = "2612"
3 + 2 - "1"; // 4
"3" + 2 - 1; /// 31
true +
2 + // 3
  "10" +
  1; // '11'
undefined + 2; // nan
null + 5; // 5
true + undefined; //nan
5 + "34"; // '534'
5 - "4"; // 1
10 % 5; // 0
5 % 10; // 5 ПОЧЕМУ ?? ? ?
"Java" + "Script"; // "JavaScript"
" " + " "; // "  "
" " + 0; // строка которая перноситься?? ? "" ->>>>>  "0"
true + true; //2
true + false; //1
false + true; //1
false - true; //-1
console.log(3 - 4); //-1
"Bob" - "bill"; //nan
*/

5 >= 1;
true;
0 === 1;
4 <= 1;
true;
1 != 1;
false;
"A" > "B";
false;
"B" < "C";
true;
"a" > "A";
true;
"b" < "A";
false;
true === false;
false;
true != true;
false;
let h;
if (h == "hidden") {
  h = "visible";
} else {
  ("hidden");
}

let j;
j = 3;
/*
if (j == 0) {
  j = 1;
}
if (j < 0) {
  j = "less than zero";
}
if (j > 0) {
  j *= 10;
  alert(j);
}
*/
let car = {
  name: "Lexus",
  age: 3,
  create: 2008,
  needRepair: false,
};
if (car.age > 5) {
  console.log("Need Repair");
  car.needRepair = true;
} else {
  car.needRepair = false;
}

let item = {
  name: "Intel core i7",
  price: "100$",
  discount: NaN,
};

if ((item.discount != NaN, item.price != NaN)) {
  item.priceWithDiscount =
    parseInt(item.price) -
    parseInt(item.price) * parseInt(item.discount) * 0.01;
  console.log(item.priceWithDiscount);
} else if ((item.discount = NaN)) {
  console.log(parseInt(item.price));
}

//?????????????
/*
if (item.discount && item.price != Number.NaN) {
  item.priceWithDiscount =
    parseInt(item.price, 10) -
    (parseInt(item.price, 10) * parseInt(item.discount, 10)) / 100;
}
console.log(item.priceWithDiscount);
*/
let product = {
  name: "Яблоко",
  price: "10$",
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена
if (parseInt(product.price) >= min && parseInt(product.price) <= max) {
  console.log(product.name);
} else {
  console.log("товаров не найдено");
}

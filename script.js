"use strict";
//task1
const a1 = parseInt("5px");
const a2 = parseInt("12djd334");
const a3 = parseInt("12.45asdwe12");
const a4 = parseInt("qwqweeewq");

console.log(a1, a2, a3, a4);
//task2
const b1 = parseFloat("5px");
const b2 = parseFloat("12djd334");
const b3 = parseFloat("12.45asdwe12");
const b4 = parseFloat("qwqweeew");

console.log(b1, b2, b3, b4);

//task3
console.log(Math.max(2, 34, 3, 22, 36, 733, 18));
console.log(Math.min(2, 34, 3, 22, 36, 733, 18));

//task4
const random = Math.random() * (19 - 3) + 3;
console.log(random);

//task5
const result = 5 + 5 + "5";
console.log(result, typeof result);

//task6
const email = "mkoval06@gmail.com";
const isValid = email.includes("@");
const number = email.length;
console.log(isValid, number);

//task7
const a = "My";
const b = "name";
const c = "is";
const full_name = a + b + c + "Max";
console.log(full_name);

//task8
const username = "Max";
const payment = "3000";
const message = `Дякуємо, ${username}! До сплати ${payment} гривень`;
alert(message);

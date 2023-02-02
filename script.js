"use strict";

let rollback = 20;
let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополонительный тип услуг вам нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополонительный тип услуг вам нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let fullPrice = +screenPrice + +servicePrice1 + +servicePrice2;
let servicePercentPrice = fullPrice - fullPrice * (rollback / 100);

if (fullPrice >= 30000) {
  console.log("Дарим скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice >= 0 && fullPrice < 15000) {
  console.log("Скидка не предусмотрена");
} /* if (Math.sign(fullPrice)) */ else {
  console.log("Что то пошло не так");
}

console.log(title);
console.log(screenPrice);
console.log(typeof adaptive);
console.log(fullPrice);
console.log(servicePercentPrice);

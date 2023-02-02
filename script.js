"use strict";

let title = "Js-Project";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 25000;
let rollback = 20;
let fullPrice = 100000;
let adaptive = "true";

/* alert(
  "Что вершит судьбу человечества в этом мире? Некое незримое существо или закон, подобно Длани Господней парящей над миром?"
);
console.log(
  "По крайне мере истинно то, что человек не властен даже над своей волей."
); */

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей, \nСтоимость разработки сайтов 
${fullPrice} рублей`);
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));

title = prompt("Как называется ваш проект?");
console.log(title);
screens = prompt("Какие типы экранов нужно разработать?");
console.log(screens);
screenPrice = prompt("Сколько будет стоить данная работа?");
console.log(screenPrice);
adaptive = prompt("Нужен ли адаптив на сайте?");
console.log(Boolean(adaptive));
let service1 = prompt("Какой дополонительный тип услуг вам нужен?");
console.log(service1);
let servicePrice1 = prompt("Сколько это будет стоить?");
console.log(servicePrice1);
let service2 = prompt("Какой дополонительный тип услуг вам нужен?");
console.log(service2);
let servicePrice2 = prompt("Сколько это будет стоить?");
console.log(servicePrice2);
fullPrice = +screenPrice + +servicePrice1 + +servicePrice2;
console.log(fullPrice);
let servicePercentPrice = fullPrice - (fullPrice / 100) * 10;
console.log(Math.ceil(servicePercentPrice));
if (fullPrice >= 30000) {
  console.log("Дарим скидку в 10%");
} else if (15000 <= fullPrice && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (15000 > fullPrice && fullPrice >= 0) {
  console.log("Скидка не предусмотрена");
} else if (Math.sign(fullPrice)) {
  console.log("Что то пошло не так");
}

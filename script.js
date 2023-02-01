let title = "Js-Project";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 25000;
let rollback = 77;
let fullPrice = 100000;
let adaptive = "true";

alert(
  "Что вершит судьбу человечества в этом мире? Некое незримое существо или закон, подобно Длани Господней парящей над миром?"
);
console.log(
  "По крайне мере истинно то, что человек не властен даже над своей волей."
);

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(`Стоимость верстки экранов ${screenPrice} рублей, \nСтоимость разработки сайтов 
${fullPrice} рублей`);
console.log(screens.toLowerCase().split());
console.log(fullPrice * (rollback / 100));

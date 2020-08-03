"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {
let perscentNum = parseInt(percent) / 100; // Процентная ставка в процентах
let contributionNum = parseInt(contribution); // Первоначальниы взнос
let amountNum = parseInt(amount); // Сумма кредита = стоимость квартиры
let dateNum = date; // Дата окончания кредита
if (isNaN(perscentNum) === true) {
  console.log(`Параметр percent содержит неправильное значение ${percent}`)
};
if (isNaN(contributionNum) === true) {
  console.log(`Параметр contribution содержит неправильное значение ${contribution}`)
};
if (isNaN(amountNum) === true) {
  console.log(`Параметр amount содержит неправильное значение ${amount}`)
};
if (isNaN(dateNum) === true) {
  console.log(`Параметр date содержит неправильное значение ${date}`)
};

console.log (`perscentNum ${perscentNum}
contributionNum ${contributionNum}
amountNum ${amountNum}
dateNum ${dateNum}`);

function monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    console.log("Разница месяцев " + months);
    return months <= 0 ? 0 : months;
}
monthDiff(new Date(), dateNum);
let dateNumMonth = monthDiff(new Date(), dateNum) // Количество месяцев выплаты
let p = perscentNum / 12;
let mineDebt = amount - contribution;
 // Тело кредита
let monthPayment = mineDebt * (p + p / (Math.pow((1 + p), dateNumMonth) - 1)); // Ежемесячная оплата
console.log(monthPayment);
let totalAmount = (contributionNum + mineDebt + (monthPayment * dateNumMonth)).toFixed(2);
    return totalAmount;
}
function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}

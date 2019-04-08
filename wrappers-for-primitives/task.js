'use strict';


function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let forbank = amount - contribution;
    let p = percent / 12;
    let pay = amount * (p + p / (((1 + p) ** date ) - 1 ));
    let totalAmount = pay * date;
    if (percent == null || percent == "" || percent == NaN) {
        return "Неверно введены данные";
    } else if (contribution == null || contribution == "" || contribution == NaN) {
        return "Неверно введены данные";
    } else if (amount == null || amount == "" || amount == NaN) {
        return "Неверно введены данные";
    } else if (date == null || date == "" || date == NaN) {
        return "Неверно введены данные";
    } else {
        console.log(totalAmount);
        return totalAmount;
    }
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
    return greeting;
}

function getGreeting(name) {
    if (name == null || name == "" || name == undefined) {
        return "Привет, мир! Меня зовут Аноним";
    } else {
        return `Привет, мир! Меня зовут ${name}`;
    }
}

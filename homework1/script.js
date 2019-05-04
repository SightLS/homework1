"use strict"

let money = +prompt("ваш бюджет на месяц?", "");
let time = Date;    //надо будет поключить jQuery

let appData = {
    budget: money,      //бюждет
    timeData: time,     //дата
    expenses: {},   //обязательные расходы
    optionalExpenses:{}, // не обязательные расходы
    income: [],     //доп. доходы
    savings: false
};
let question1st = prompt("Введите обязательную статью расходов в этом месяце", ""); 
// расходы за месяц
let question2nd = prompt("Во сколько обойдется?", "");

appData.expenses = question1st;
appData.expenses = question2nd;
alert(appData.budget / 30)

console.log(appData.expenses);
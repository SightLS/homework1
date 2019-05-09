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
let question1 = prompt("Введите обязательную статью расходов в этом месяце", ""); 
let question2 = prompt("Во сколько обойдется?", "");
let question3 = prompt("Введите обязательную статью расходов в этом месяце", ""); 
let question4 = prompt("Во сколько обойдется?", "");


appData.expenses.question1 = question2;
appData.expenses.question3 = question4;

for (let i = 0; i < 2;)

alert(appData.budget / 30);
let startBtn = document.getElementById("start");

let budget = document.getElementsByClassName("budget"),
    dayBudgetValue = document.getElementsByClassName("daybudget-value"),
    levelValue = document.getElementsByClassName("level-value"),
    expensesValue = document.getElementsByClassName("expenses-value"),
    optExpensesValue = document.getElementsByClassName("optionalexpenses-value"),
    incomeValue = document.getElementsByClassName("income-value"),
    monthsavingsValue = document.getElementsByClassName("monthsavings-value"),
    yearSavingsValue = document.getElementsByClassName("yearsavings-value"); //токо валуе надо было. не стал убирать мб понадобиться))

let expensesItem = document.getElementsByClassName("expenses-item")[0],
    expensesBtn = document.getElementsByTagName('button')[0],
    optExpensesBtn = document.getElementsByTagName('button')[1];
    countBtn = document.getElementsByTagName('button')[3];

let optExpensesItem = document.querySelectorAll(".optionalexpenses-item"),
    chooseIncome = document.querySelector("#income"),
    chooseSum = document.querySelector("#sum"),
    checkBox = document.querySelector("#savings"),
    choosePercent = document.querySelector("#percent");
    yearValue = document.querySelector(".year-value");
    monthValue = document.querySelector("month-value");
    dayValue = document.querySelector("day-value");




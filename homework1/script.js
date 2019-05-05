"use strict"

let money, time;
function start() {
    money = +prompt("ваш бюджет на месяц?", "");
    time = Date;  
    
    while( isNaN(money) || money == "" || money == null ) {
        money = +prompt("ваш бюджет на месяц?", "");
    }
}
start()

let appData = {
    budget: money,      //бюждет
    timeData: time,     //дата
    expenses: {},   //обязательные расходы
    optionalExpenses:{}, // не обязательные расходы
    income: [],     //доп. доходы
    savings: true
};
function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""), 
            b = prompt("Во сколько обойдется?", "");
        
        if ( (typeof(a)) === 'string' && (typeof(a)) !=null && (typeof(b)) !=null
            && a != '' && b != '' && a.length < 50 ) {
        
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }
}
chooseExpenses();
function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("бабки на день: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel(){
    if (appData.moneyPerDay < 500) {
        console.log("нищий");
        } else if (appData.moneyPerDay >= 500 && appData.moneyPerDay < 2000){
        console.log("вохможно выжить");
        } else if (appData.moneyPerDay >= 2000){
        console.log ("при бабках");
        } else {
        console.log("чет ты не так сделал)");
        }
}
detectLevel();

function checkSavings(){
    if (appData.savings == true){
        let save =+prompt("какова сумма накоплений?"),
            percent = +prompt("под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();


function chooseOptExpenses(){
    for (let i = 0; i < 3; i++) {
        let c = prompt("Статья необязательных расходов?", "") 
        
        if ( (typeof(c)) === 'string' && (typeof(c)) !=null && c != '' && c.length < 50 ) {
            appData.Optionalexpenses[i] = c;
        } else {
            i--;
        }
    }
}

chooseOptExpenses();
console.log(appData.optionalExpenses)
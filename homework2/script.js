"use strict"

let money, time;
function start() {
    money = +prompt("ваш бюджет на месяц?", "");
    time = Date;  
    
    while( isNaN(money) || money == "" || money == null ) {
        money = +prompt("ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
    budget: money,      //бюждет
    timeData: time,     //дата
    expenses: {},   //обязательные расходы
    optionalExpenses:{}, // не обязательные расходы
    income: [],     //доп. доходы
    savings: true,
    chooseExpenses: function(){    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""), 
            b = prompt("Во сколько обойдется?", "");
        
        if ( (typeof(a)) === 'string' && (typeof(a)) !=null && (typeof(b)) !=null
            && a != '' && b != '' && a.length < 50 ) {
        
            appData.expenses[a] = b;
        } else {
            i--;
        }
    }

    }, 
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("бабки на день: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 500) {
            console.log("нищий");
            } else if (appData.moneyPerDay >= 500 && appData.moneyPerDay < 2000){
            console.log("вохможно выжить");
            } else if (appData.moneyPerDay >= 2000){
            console.log ("при бабках");
            } else {
            console.log("чет ты не так сделал)");
            }
    },
    checkSavings: function (){
        if (appData.savings == true){
            let save =+prompt("какова сумма накоплений?"),
                percent = +prompt("под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert("доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function (){
        for (let i = 0; i < 3; i++) {
            let c = prompt("Статья необязательных расходов?", "") 
            
            if ( (typeof(c)) === 'string' && (typeof(c)) !=null && c != '' && c.length < 50 ) {
                appData.Optionalexpenses[i] = c;
            } else {
                i--;
            }
        }
    },
    chooseIncome: function() {
        let items = prompt("что приносит доп доход?(перечилси ччерез запятую)","");
        if(typeof(items) !="string" || items == "" || items == null) {
            items = prompt("введите данные правильно");
        }
        else {
        appData.income = items.split(", ");
        appData.income.push(prompt('может что-то еще?', ''));
        appData.income.sort();
        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });
        }

        
    }
   
};
appData.chooseIncome()

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}
alert("привет")


let li = document.createElement ('li'),
    menu = document.getElementsByClassName("menu")[0],
    apple = document.getElementsByClassName('body.background'),
    menuItem = document.getElementsByClassName("menu-item");

menu.insertBefore(menuItem[2], menuItem[1]);
function remove(){
    li.classList.add('menu-item');
    menu.appendChild(li);
    li.textContent = '5ый пункт';
}
remove();

function huy(){
    setTimeout(function(){
        document.body.style.backgroundImage = "url('img/apple_true.jpg')";
    }, 5000);
}
huy();

function title(){
    let title = document.getElementById('title');
    title.textContent = "Барыжим только палеными яблочками, кек=)";
}
title();
function adblocker(){
    let adv = document.getElementsByClassName("adv")[0];
    adv.remove();
}
adblocker();

function question1st() {
    setTimeout(function(){
        let promptForQuestion = document.getElementById("promptForQuestion");
        
        let question = prompt("как относишься к пидорам с брендовами смартфонами?", "они все пидоры");
        if (question == "они все пидоры"){
        promptForQuestion.textContent = question;
        }
        else{
            promptForQuestion.textContent = "они все пидоры";
        }
    }, 6001);
}
question1st();


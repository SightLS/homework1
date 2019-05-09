let box = document.getElementById('box'), // берет элемент с айдишки
    btn = document.getElementsByTagName('button'), // берет элемент с тега
    circle = document.getElementsByClassName('circle'), // берет элемент с класса
    heart = document.querySelectorAll('.heart'), //берет элемент с любого селектора, лучше пользоваться этим методом
    firstHeart = document.querySelector('.heart'), //получает первый элемент от этого селектора
    wrapper = document.querySelector('.wrapper');

    // теперь учимся изменять стили этих элементов

    box.style.backgroundColor = "blue";
    btn[1].style.borderRadius = "100%";

    circle[0].style.backgroundColor = "red";
    circle[1].style.backgroundColor = "yellow";
    circle[1].style.backgroundColor = "green";

    for (let i = 0;i<heart.length; i++) {
        heart[i].style.backgroundColor = "blue";
    }

    heart.forEach(function(item, i, hearts){
        item.style.backgroundColor = "yellow";
    });

let div = document.createElement('div'), // создает элемент
    text = document.createTextNode("сюда пишется текст");

div.classList.add("black"); //добавляет к элементу класс
// document.body.appendChild(div) // элементы вставляется в конец указанного контейнера
// div.innerHTML = "<h1>привет</h1>!"; //в ставляет текст в заданный элемент

div.textContent = "Привет!"; //вставится именно текст а не какой то левый скрипт чтобы сломать станицу


// wrapper.appendChild(div); // вставит наш контейнер с Blackom в wrapper
document.body.insertBefore(div, circle[0]); // первое в скоюка это что мы в ставляем, втророе это перед чем мы всталяем
document.body.removeChild(circle[1]); //удаляет данный элемент с body (второй кружок)
wrapper.removeChild(heart[2]); // удалит сердце с блока wrapper
document.body.replaceChild(btn[1], circle[1]); // вырезает btn и вставляет вместо circle





    
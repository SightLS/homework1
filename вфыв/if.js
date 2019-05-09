let num = 50;

switch (num) {
    case num < 49:
        console.log("неверно");
        break;
    case num > 100:
        console.log("neverno");
        break;
    case 50:
        console.log('verno');
        break;
    default:
        console.log("ups");
        break;
};


let num = 50;

// while(num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if(i == 6) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i < 8; i++) {
//     if(i == 6) {
//         continue;
//     }
//     console.log(i);
// }



задание 2
/* 1) 5
2)underfined
3)1
4)12
*/
// Функции


let calc = function(a,b) {
    return (a+b);
}
console.log(calc(3,4));  // 3 + 4 будет 7
    /* теперь в ES6 это пишется вот так:*/
let calc = (a,b) => a+b;

/*свойства и методы*/
let str = "test";
console.log(str.length); //показывает кол-во букв

console.log(str.toUpperCase()); //делает все будквы заглавными
console.log(str.toLowerCase()); //делает все буквы мелкими

let twelve = "12.2";
console.log(Math.round(twelve)); //преобразует сторку в число и округяет ее


let eleven = "11.2px";
console.log(parseInt(eleven)); //выведит просто число 11
console.log(parsefloat(eleven)); //выведит 11.2 без px
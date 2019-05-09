let options = {
    width: 1024,
    height: 1024,
    name: "test"
};
options.bool = false; //добавляем данные к объекту
options.color = {                        // добавили объект color в объект options
    border: "black",
    bg: "red"
}

delete options.bool;    //удалили bool из объекта


for ( let key in options ) {
    console.log("свойство " + key +" имеет значение " + options[key]) /* показывает все свойства
    заданного объекта:свойство width имеет значение 1024
свойство height имеет значение 1024
свойство name имеет значение test
свойство color имеет значение [object Object] (объекты в объекте перечислять не будет)    */
}
console.log(Object.keys(options).length); //показывает кол-во свойств объкта (4)


let arr = [1, 2, 3, 4, 5];

arr.pop(); // удаляет последней элеменет массива
arr.push("5"); // добовляет элемент в конец массива

arr.shift(); // удаляет первый элемент массива
arr.unshift('один') //добавляет элемент в начало массива

arr.forEach(function(item, i, mass) {
    console.log(i+ ": " + item + " (массив: " + mass+ ')');
}) /*   выведит каждый элемент массива и что то с ними сделает
0: олдин (массив: 1,2,3,4,5)   
1: 2 (массив: 1,2,3,4,5)
2: 3 (массив: 1,2,3,4,5)
3: 4 (массив: 1,2,3,4,5)
4: 5 (массив: 1,2,3,4,5)*/

console.log(arr);

let arr2nd = [1,2,3,4,5];

for (let i = 0; i<arr2nd.length;i++){   //переберает все элементы массива
    console.log(arr2nd[i]);
}



let arr3 = [1, 2, 3, 4, 5];

for (let key in arr3) {
    console.log(key);
}
/* переберет номер каждого массива
0
1
2
3
4*/

let arr4 = [2, 4, 8, 10];

for (let key of arr4) {
    console.log(key);
}
 /* переберт массив
2
4
8
10      */

let ans = prompt("перечислите цифры для массива через запятую", ""),
    arr5 = [];
arr5 = ans.split(',');   //с помощью сплита мы записали все данные с промпта в массив, 
// (",") с помощью этого пользователь будет разделять элементы через запятую2
console.log(arr5);  

let arr6 = ['waewa','wewe', 'ewewe'],
    i = arr6.join(', ');

console.log (i); // массив превратится в строку где все будет перечисляться через запятую


let arr7 = ['waewa','zewe', 'awewe'],
    y = arr7.sort(); //сортирует весь массив по алфавиту( с цифрами не все так просто, тк он их сортирует как строки 1, 15, 4)

    console.log (y);


let arr8 = [1,15,4],
    z = arr8.sort(compareNum);
function compareNum(a,b) {
    return a-b;
} // перечисляет цифры по порядку


let soldier = {
    health: "хп = " + 400,
    armor: "броня = " + 100
}

let john = {
    health: 100
}

john.__proto__ = soldier;

console.log(john);
console.log(john.armor)

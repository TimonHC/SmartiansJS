/*Треугольник
Напишите цикл, который выводит в консоль треугольник*/
let triangle = '';
for (i = 0; i < 4; i++) {
    console.log(triangle += '#');
}

/*Шахматная доска
Напиши программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки.
На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.
*/
let grid = '';
let resolution = 10;
for (i = 0; i <= resolution; i++) {
    grid += '\n';
    if (i === resolution) break;
    for (j = 0; j < resolution / 2; j++) {
        if (i % 2) {
            grid += ' # ';
            grid += '@';
        } else {
            grid += '@';
            grid += ' # ';
        }
    }
}
console.log(grid);

/*
Возвращаем массив обратно
Напиши функцию, reverseArray. Первая получает массив как аргумент и выдаёт новый массив, с обратным порядком элементов.
Не используй стандартный метод reverse.
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];*/
function reverseArray(inputArray) {
    outputArray = [];
    for (let iterator = (inputArray.length - 1); iterator >= 0; iterator--){
        outputArray.push(inputArray[iterator]);
    }
    return outputArray;
}
console.log(reverseArray(["A", "B", "C"]));

/*
Високосный год
Напиши функцию, которая принимает в себя год и выдаёт ответ, високосный он или нет
*/
let isIntercalaryYear = (year) => ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
console.log(isIntercalaryYear(2020));
/*Треугольник
Напишите цикл, который выводит в консоль треугольник*/

let triangle = '';
for (i = 0; i < 5; i++) {
    console.log(triangle += ' #');
}

/*Шахматная доска
Напиши программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки.
На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.
*/

let grid = '';
for (let i = 0; i < 4; i++) {
    grid += '\n@#@#@#@#';
        if (i%2 ===! 0) continue;
            grid += '\n#@#@#@#@';
}
console.log(grid);

/*
Возвращаем массив обратно
Напиши функцию, reverseArray. Первая получает массив как аргумент и выдаёт новый массив, с обратным порядком элементов.
Не используй стандартный метод reverse.
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];*/


function reverseArray(arr) {
    newArr = [];
    j=0;

    for (i = arr.length-1; i>=0; i--) {
        newArr[j] = arr[i];
        j++;
    }
    return newArr;
}
console.log(reverseArray(["A", "B", "C"]));

/*
Високосный год
Напиши функцию, которая принимает в себя год и выдаёт ответ, високосный он или нет
*/

function isIntercalaryYear(year) {

    return console.log('Is ' + year + ' intercalary - '
        + (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0))
}
isIntercalaryYear(1996);
isIntercalaryYear(2019);
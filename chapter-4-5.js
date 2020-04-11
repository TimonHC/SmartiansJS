/*Треугольник
Напишите цикл, который выводит в консоль треугольник*/

let triangle = '';
do console.log(triangle += '#');
while (triangle.length !== 3);


/*Шахматная доска
Напиши программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки.
На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.
*/
/*
//another solution
while (grid.length<72){
    grid += '\n@#@#@#@#';
    grid += '\n#@#@#@#@';
}
console.log(grid + '\n');
*/

let grid = '';
for (; grid.length<64;){
    grid += '\n@#@#@#@#';
    grid += '\n#@#@#@#@';
}
console.log(grid + '\n');

/*
Возвращаем массив обратно
Напиши функцию, reverseArray. Первая получает массив как аргумент и выдаёт новый массив, с обратным порядком элементов.
Не используй стандартный метод reverse.
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];*/
function reverseArray(arr) {
    newArr = [];
    i = arr.length;
    while (i-->0) {
        newArr.push((arr[i]));
    } return newArr;
}
console.log(reverseArray(["A", "B", "C"]));

/*
Високосный год
Напиши функцию, которая принимает в себя год и выдаёт ответ, високосный он или нет
*/
function isIntercalaryYear(year) {

    return console.log('\n' + 'Is ' + year + ' intercalary - '
        + (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0))
}
isIntercalaryYear(1996);
isIntercalaryYear(2019);
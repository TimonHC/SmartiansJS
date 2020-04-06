/*Треугольник
Напишите цикл, который выводит в консоль треугольник*/

//console.log(triangle);

/*Шахматная доска
Напиши программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки.
На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.*/
gridArray = []

function matrixArray(rows, columns){
    var arr = [];
    for(var i=0; i<rows; i++){
        arr[i] = [];
        for(var j=0; j<columns; j++){
            arr[i][j] = null;
        }
    }
    return arr;
}
var myMatrix = matrixArray(8,8);
console.log(myMatrix);

/*
Возвращаем массив обратно
Напиши функцию, reverseArray. Первая получает массив как аргумент и выдаёт новый массив, с обратным порядком элементов.
Не используй стандартный метод reverse.
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];*/

function reverseArray(arr) {
    newArr = [];
    j=0;
    for (i = arr.length-1; i!==-1; i--){
        newArr[j] = arr[i];
        j++;
    }
    return newArr;
}
console.log(reverseArray(["A", "B", "C"]));
/*
Високосный год
Напиши функцию, которая принимает в себя год и выдаёт ответ, високосный он или нет*/
function isIntercalaryYear(year) {
    return ('The ' + year + ' year is intercalary - it is a ' + (year % 4 === 0) + ' statement');
}

console.log(isIntercalaryYear(2021));
console.log(isIntercalaryYear(2016));
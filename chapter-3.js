//Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.

//solution
let minNumber = (arg1, arg2) => arg1 < arg2 ? arg1 : arg2;
console.log('min number is ' + minNumber(1, 5));

//Напиши функцию-счётчик, которая считает свои вызовы и возвращает их текущее число.
//И сделай счетчик не глобальным, а локальным.
function counter() {
    let iterator = 0;
        return () => console.log(++iterator + ' calls of function');
}

var makeCounter = counter();
makeCounter();
makeCounter();
makeCounter();

//Напиши для практики функцию, которая выводит наибольшее число.
let maxNumber = (arg1, arg2) => arg1 > arg2 ? console.log('max number is ' + arg1) : console.log('max number is ' + arg2);
maxNumber(2, 3);


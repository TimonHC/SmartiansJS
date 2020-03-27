//Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.

/*function min (arg1, arg2){
    let minimal = arg1;
    if (arg2 < minimal) {
        minimal = arg2;
    }
    return minimal;
}
console.log(min (10, 5));
*/
let minNumber = (arg1, arg2) => console.log(`min is ` + Math.min(arg1, arg2));
minNumber(4,1);


//Напиши функцию-счётчик, которая считает свои вызовы и возвращает их текущее число.
var iterator = 0;
function counter() {
    iterator++;
    console.log(iterator + ' calls of function');
    return iterator;
}
counter();
counter();
counter();


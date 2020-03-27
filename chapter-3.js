//Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.

//first solution
/*function min (arg1, arg2){
    let minimal = arg1;
    if (arg2 < minimal) {
        minimal = arg2;
    }
    return minimal;
}
console.log(min (10, 5));
*/

//another solution
let minNumber = (arg1, arg2) => console.log(`min is ` + Math.min(arg1, arg2));
minNumber(4,1);

//Напиши функцию-счётчик, которая считает свои вызовы и возвращает их текущее число.
//first solution
/*function counter() {
    iterator++;
    console.log(iterator + ' calls of function');
    return iterator;
}*/

//another solution
let iterator = 0;
const counter = () => ++iterator;
counter();
counter();
counter();
counter();
console.log(iterator);




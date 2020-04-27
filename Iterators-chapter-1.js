/*
forEach()
1. Дан массив с числами(сам придумай). Создай новый массив, состоящий из квадратов этих чисел.
*/
const numbers = [1, -2, 3, -4, 5, -6];
const squaredNumbers = [];
numbers.forEach(numbersItem =>
    squaredNumbers.push(Math.pow(numbersItem, 2))
);
console.log(squaredNumbers);
/*
2. Дан массив с числами. Найди сумму этих чисел.
*/
let sumOfTheNumbers = 0;
numbers.forEach(numbers =>
    sumOfTheNumbers += numbers);
console.log(sumOfTheNumbers);
/*
map()
3. Дан массив с числами. Преобразуй в массив, состоящий из квадратов этих чисел
*/
const squaredNumbers2 = numbers.map(numbers =>
    Math.pow(numbers, 2));
console.log(squaredNumbers2);
/*
every(), some()
4. Дан массив с числами. Проверь то, что все элементы в массиве больше нуля.
5. Дан массив с числами. Проверь то, что в нем есть отрицательные элементы.
*/
const isEveryNumBiggerThanZero = numbers.every(numbers =>
    numbers > 0);
console.log(isEveryNumBiggerThanZero);
const isAnyNumLessThanZero = numbers.some(numbers =>
    numbers < 0);
console.log(isAnyNumLessThanZero);
/*
filter()
6. Дан массив с числами. Оставь в нем только отрицательные числа*!/
*!/
*/
const NumsAreGreaterThanZero = numbers.filter(numbers =>
    numbers >= 0);
console.log(NumsAreGreaterThanZero);
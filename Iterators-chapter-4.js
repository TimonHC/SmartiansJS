/*
15. Дан массив с числами. Узнай сколько элементов с конца массива надо сложить, чтобы в сумме получилось больше 10-ти.
*/
let numbers = [-1, -2, -3, 0, 4, 5, 6];
numbers.reduceRight((sum, current, index) => {
    if (sum > 10) {
        console.log(numbers.length - ++index);
    } else
    return sum + current;
});
/*
    И последнее, выбирай любой
16. Дан массив с числами. Оставь в нем только положительные числа. Затем извлеките квадратный корень и этих чисел.
*/
let result = numbers.filter(number => (number > 0)).map(number => Math.sqrt(number));
console.log(result);

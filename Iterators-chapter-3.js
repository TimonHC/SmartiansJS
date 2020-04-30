/*
12. Дан массив с числами. Найди сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.
*/
let numbers = [1, 2, 3, 0, 4, 5, 6];
let sumOfNumsBeforeTheZero;
numbers.reduce((sum, current) => {
    current === 0 ? sumOfNumsBeforeTHeZero = sum : sum;
    return sum + current;
    }, 0);
console.log(sumOfNumsBeforeTHeZero);
/*
13. Дан массив с числами. Найди сумму последних N элементов до первого нуля с конца. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем последние 3 элемента, так как дальше стоит элемент с числом 0.
*/
numbers.reduceRight((sum, current, ) => {
    current === 0 ? sumOfNumsBeforeTHeZero = sum : sum;
    return sum + current;
    }, 0);
console.log(sumOfNumsBeforeTHeZero);
/*
14. Дан массив с числами. Узнай сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
*/
let countOfElements;
numbers.reduce((sum, current, index) => {
    (sum > 10) ? countOfElements = index : sum;
    return sum + current;
    }, 0);
console.log(countOfElements);
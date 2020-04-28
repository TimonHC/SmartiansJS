/*7. Дан массив с числами. Оставь в нем только четные числа.*/
const numbers = [0, -1, 2, -3, 4, 5];
const evenNumbers = numbers.filter(number =>
    (number % 2) !== 0
    );
console.log(evenNumbers);
/*8. Дан массив со строками. Оставь в нем только те строки, длина которых больше 5-ти символов.*/
const strings = ['123', '1234', '12345', '123456'];
const longStrings = strings.filter(string =>
    string.length >= 5);
console.log(longStrings);
/*9. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставь в нем только подмассивы.*/
const inputArray = [1, 2, [3, 4], 5, [6, 7]];
const arrayOfArrays = inputArray.filter(array =>
    array.length > 1);
console.log(arrayOfArrays);
/*10. Дан массив с числами. Посчитай количество отрицательных чисел в этом массиве.*/
const negativeNumsCount = numbers.filter(number =>
    number < 0).length;
console.log(negativeNumsCount);
/*reduce(), reduceRight()*/
/*
11. Дан массив с числами. Найди сумму этих чисел.*/
var sumOfArray = numbers.reduce((sum, current) =>
    sum + current);
console.log(sumOfArray);

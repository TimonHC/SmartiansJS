// Задание к уроку 1.1.2

// Вывести в консоль:
// – своё имя в строчном виде;
// – свой возраст в числовом виде;
console.log("Timofii");
console.log(24);
// Задание к уроку 1.1.3

// – Добавить комменарий перед первым выводом в консоль;
// – Закоментировать все выводы в консоль, кроме первого.*/

//первый вывод в консоль
console.log('Я умею комментировать строчки кода в JS');
/*console.log('Эта строка лишняя');
console.log('И эта');
console.log('Да, убери же ты их наконец!!!');*/

// Задание к Уроку 1.1.4.
// – Вывести в консоль первые 5 типов данных, по очереди. Используйте конструкцию*/
console.log('/*Значение*/', typeof('/*Значение*/'));

// '/*Значение*/' заменяем на необходимое значение определенного типа данных.
console.log(1234567890, typeof(1234567890));
console.log('/*Значение*/', typeof('/*Значение*/'));
console.log(true, typeof(true));
console.log(null, typeof(null));
console.log(undefined, typeof(undefined));


// Задание к уроку 1.1.5
//
// Выполните арифметические операции в консоли:
// – сложите ваш возраст с текущим числом месяца;
console.log(24 + 23);
// – вычтите из текущего года год вашего рождения;
console.log(2020 - 1995);
// – умножьте число Пи на 100;
console.log(Math.PI * 100);
// – разделите 10 на 3.
console.log(10 / 3);

// Задание к уроку 1.1.6
//
// – вывести в консоль конкатенацию строк ‘Hello’ и ‘Smartians’, без учета пространства между ними.
console.log("Hello"+"Smartians");
// – вывести в консоль конкатенацию строк ‘Hello’ и ‘Smartians’, с учетом пространства между ними.
console.log('Hello ' + 'Smartians');

// Задание к уроку 1.1.7
//
// – посчитайте длину строки 'Share your knowledge', результат выведите в консоль.
console.log('Share your knowledge'.length);

// Задание к уроку 1.1.8
// –– приведите строку ‘My name is’ + ‘Your name’ к UpperCase (все буквы большие);
console.log(('My name is ' + 'Your name').toUpperCase());
// –– учимся гуглить, на сайте https://developer.mozilla.org/ находим метод объекта String,
// который удаляет лишние пробелы из строки ‘     I love study JS on Smartians platform    ’.
console.log('     I love study JS on Smartians platform    '.trim());

// Задание к уроку 1.1.9
// –– вывести на экран случайное число от 0 до 200
let randomValue;
console.log(randomValue = Math.floor(Math.random() * (200 + 1)));
// –– найдите подходящий метод у объекта Math, который вернет наименьшее целое число, большее или равное полученному выше числу.
randomValue = Math.floor(randomValue);
// –– с помощью совйства у объекта Number, проверте что ваше полученное число –– целое.
Number.isInteger(randomValue);

// Задание к уроку 1.2.2.
// –– Объявите переменную myFood со значением 'sushi';
let myFood = 'sushi';
// –– Объявите переменную numOfRollSlices со значением 6;
let numOfRollSlices = 6;
// –– Полученные значения выведите в консоль.
console.log(myFood +"\n"+ numOfRollSlices);

// Задание к уроку 1.2.3.
// –– Объявите переменную let с именем iKnowJs и присвойте значение false;
let iKnowJs = false;
// –– Выведите значение в консоль
console.log(iKnowJs);
// –– Затем присвойте переменной значение true и снова выведите в консоль.
iKnowJs = true;
console.log(iKnowJs);

// Задание к уроку 1.2.4.
// –– объявите константу myName и присвойте ей значение с вашим именем;
//const myName = 'Timofii';
// –– переприсвоить значение константы и посмотреть в консоль. Должна быть ошибка (TypeError: Assignment to constant variable.).
//myName = 'Martin The Smartian';
// Задание к уроку 1.2.5

let plusMe = 10; // добавь 10
let subTrackMe = 9001; // отними 100
let multiplyMe = 32; // умножь на 3
let quarterMe = 1152; // раздели на 3

// Используйте сокращенные математические операторы ниже
plusMe += 10;
subTrackMe -= 100;
multiplyMe *= 3;
quarterMe /= 3;




// Проверь результат ниже
console.log('The value of levelUp:', plusMe);
console.log('The value of powerLevel:', subTrackMe);
console.log('The value of multiplyMe:', multiplyMe);
console.log('The value of quarterMe:', quarterMe);

// Задание к уроку 1.2.6

// Увеличте значение bitcoin при помощи оператора инкремента
// Уменьшите значение ethereum при помощи оператора декремента

let bitcoin = 10000;
let ethereum = 300;
bitcoin++;
ethereum--;


// Задание к уроку 1.2.7
// Создайте переменную с именем myPet и присвойте ей значение – название вашего любимого животного (cat | dog | parrot)
// Сделайте вывод в консоль строки 'My favourite pet is ' и значение вашей переменной, используя конкатенацию строк
let myPet = 'cat';
console.log('My favourite pet is '+myPet);

// Задание к уроку 1.2.8
// Создайте 2 переменных: myName и myCity, присвойте им значения.
// В консоль выведите сообщение, My name is.. I am from .., используя интерполяцию строк с переменными.
let myName = 'Timka';
let myCity = 'Kyiv';
console.log(`My name is ${myName} I am from ${myCity}`);

// Задание к уроку 1.2.9

// вывести в консоль тип переменной
let englishLesson = 'London is the capital of Great Britain';
console.log(typeof englishLesson);
// переприсвоить переменную со значением 7
englishLesson = 7;
// еще раз вывести в консоль тип переменной
console.log(typeof englishLesson);
// в первом случае должно быть string, а во  втором number
console.log('\x1b[32m%s\x1b[0m', "Я закончил Раздел 1");

// Задание к уроку 2.2

// Создайте переменную isMorning со значением true. Поместите переменную в условие оператора if.
// В теле оператора выполните код console.log("Пора вставать"); Сообщение должно быть выведено в консоль.
// А теперь измените значение isMorning на false и посмотрите что будет.

// Задание к уроку 2.3
// Добавьте в предыдущий код оператор else. В теле оператора выполните код console.log("Еще можно спать");
let isMorning = false;
if (isMorning === true) console.log("Пора вставать");
else console.log("Еще можно спать");


// Задание к уроку 2.4

// У нас есть 9 этажное здание. Наш офис находится на 7м этаже.
// Напишите программу, используя if и операторы сравнения, которая говорит, если лифт на 7 этаже,
// это наш этаж и нам пора выходить.

let currentLevel = 6;
if (currentLevel === 7) console.log("это наш этаж и нам пора выходить.");


// Задание к уроку 2.5

// Напишите программу, используя if..else и условные операторы. Суть такова: если вы сдали экзамен и вам уже
// исполнилось 18 – вы получаете водительское удостоверение, иначе катайтесь на велосипеде

let age = 18;
let isExamPassed = true;
if (age >= 18 && isExamPassed === true) console.log("вы получаете водительское удостоверение");
else console.log("катайтесь на велосипеде");


// Задание к уроку 2.6

// Нашишите программу, которая гласит: если у меня в корзине 0 яблок, значит я голоден. Иначе – я сыт.

let applesInTheBag = -3;
if (applesInTheBag>0) console.log("я сыт");
else console.log("у меня в корзине 0 яблок, значит я голоден");

// Нашишите программу, которая принимает переменную answer типа string, и гласит: если есть ответ, я получил работу
// иначе – ожидаю ответ.
let answer = "";
if (answer) console.log("я получил работу");
else console.log("ожидаю ответ");


// Задание к уроку 2.7

// Используйте короткую запись сравнения, присвойте в переменную myTool
// значение переменной tool, иначе 'pen'
// Перепишите значение переменной tool на 'marker', и посмотрите на результат снова.
let tool = 'marker';
let myTool = tool || `pen`;
console.log(`My tool is ${myTool}.`);


// Задание к уроку 2.8

// Приведите все выражения ниже к тернарному оператору
let isLocked = false;
isLocked ? console.log('Тебе нужен ключ.') : console.log('Ключ не требуется.');

let isCorrect = true;
isCorrect ? console.log('Правильно!') : console.log('Неправильно!');

let myMoto = 'Share your knowledge!';
myMoto === 'Share your knowledge' ?  console.log('I teach on Smartians!') : console.log("I study on Smartians!");


// Задание к уроку 2.9

// Создай переменную today и присвойте ей значение сегодняшнего дня недели.
// Затем с помощью else if сделайте вывод в консоль, какой сегодня день недели.
let today = `Wednesday`;
if (today === `Monday`) {
    console.log(`Today is ${today}`);
} else if (today === `Tuesday`) {
    console.log(`Today is ${today}`);
} else if (today === `Wednesday`) {
    console.log(`Today is ${today}`);
} else if (today === `Thursday`) {
    console.log(`Today is ${today}`);
} else if (today === `Friday`) {
    console.log(`Today is ${today}`);
} else if (today === `Saturday`) {
    console.log(`Today is ${today}`);
} else if (today === `Sunday`) {
    console.log(`Today is ${today}`);
} else {
    console.log(`uncorrect data`);
}


// Задание к уроку 2.10

// Выполните задание 2.9 еще раз, используя Switch
switch (today) {
    case 'Monday':
        console.log(`Today is ${today}`);
        break;
    case 'Tuesday':
        console.log(`Today is ${today}`);
        break;
    case 'Wednesday':
        console.log(`Today is ${today}`);
        break;
    case 'Thursday':
        console.log(`Today is ${today}`);
        break;
    case 'Friday':
        console.log(`Today is ${today}`);
        break;
    case 'Saturday':
        console.log(`Today is ${today}`);
        break;
    case 'Sunday':
        console.log(`Today is ${today}`);
        break;
    default : console.log(`uncorrect data`);
        break;
}

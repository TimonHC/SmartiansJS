// Моя конюшня

// В следующем задании вам предстоит разводить лошадей посредством JS.

// 1.
// Создайте пустой класс Horse. Внутри класса добавьте конструктор, с параметрами:
// breed, color, isInStock (false по-умолчанию)

// 2.
// Все свойства имеют геттеры. Добавьте для каждого.

// 3.
// Добавьте сеттер для isInStock.

// 4.
// Под геттерами добавьте метод toggleInStockStatus, который меняет булевое
// значение свйства isInStock на противоположное.

// 5.
// Добавьте подкласс Arabian, который наследует (extend) все свойства и методы
// класса Horse.

// 6.
// У класса Arabian добавьте свойство price со значением по умолчанию 1000,
// задайте ему геттер.

// 7.
// У класса Arabian добавьте свойство raceResults и присвойте ему значение пустого
// массива.

// 8.
// У класса Arabian добавьте метод getAverageResults, который вычисляет средний
// результат всех забегов из массива raceResults.

// 9.
// Добавьте метод addRaceResult, который принимает в себя один аргумент res и пушит
// его в массив raceResults. Если средний результат всех забегов меньше 5 – увеличиваем
// цену на 10%. Если больше пяти, то уменьнаем. Если равно – оставляем неизменной.
// Если средний результат меньше либо равен 2,  – лошадь не продается.

// 10.
// Создайте экземпляр класса Arabian. И отправьте его на скачки 5 раз, записывая
// каждый раз разный случайный результат от 1 до 10.

// 11.
// Узнайте какая цена вашего скакуна, спустя 5 забегов и продается ли он.

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

class Horse {

    constructor (breed, color) {
            this._breed = breed;
            this._color = color;
            this._isInStock = false;
        };

       get breed() {
           return this._breed;
       };
       get color() {
           return this._color;
       };
       get isInStock() {
           return this._isInStock;
       };

       set isInStock(value) {
       this._isInStock = value;
       };



    }

    class Arabian extends Horse {
        constructor() {
            super();
        }

        _price = 1000;
        _raceResults = [];

        get price() {
            return this._price;
        }

        getAverageResults() {
             return this._raceResults.reduce((sum, current) => (sum + current)) / this._raceResults.length;
        }

        addRaceResult(res) {

            if (typeof res !== 'number') {
                console.log('Тип должен быть числовым');
            } else {
                this._raceResults.push(res);
            }

            let average = this.getAverageResults();
            let gaineAmount = Math.floor(this._price * 0.1);

            if (average > 5) this._price -= gaineAmount;

            if (average < 5) this._price += gaineAmount;

            this._isInStock = average > 2;
        }

}

    let myHorse = new Arabian(true, 'brown', false);
    for (let i = 0; i < 5; i++) {
        myHorse.addRaceResult(getRandomIntInclusive(1, 10));
    }


    console.log('Цена лошади по итогу скачек: ' + myHorse.price);
    myHorse.isInStock ? console.log('Лошадь продается.') : console.log('Лошадь непродается.');


/*

Этот многострочный комментарий не удалять!!!

#
#
#
#
#

*/


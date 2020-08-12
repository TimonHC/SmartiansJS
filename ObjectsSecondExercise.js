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


class Horse {
    breed;
    color;
    isInStock = false;

    constructor (breed, color, isInStock) {
            this.breed = breed;
            this.color = color;
            this.isInStock = isInStock;
        };

       get breed() {
           return `${this.breed}`;
       };
       get color() {
           return `${this.color}`;
       };
       get isInStock() {
           return `${this.isInStock}`;
       };

       toggleInStockStatus() {
        this.isInStock = ![this.isInStock];
        };

       set isInStock(value) {
       [this.isInStock] = value;
       };



    }

    class Arabian extends Horse {
        price = 1000;

        get price() {
            return `${this.price}`;
        };

        raceResults = [];

        getAverageResults() {
            let result = 0;
            for (let i = 1; i < this.raceResults.length; i++) {
                result += this.raceResults[i];
            }
            result = result / this.raceResults.length;
            return result;
        }

        addRaceResult(res) {
            let average;

            if (res) this.raceResults.push(res);

            if (this.getAverageResults()) {
                average = this.getAverageResults();
                switch (average) {
                    case (average < 5):
                        this.price += this.price * 0.10;
                        break;
                    case (average > 5):
                        this.price += this.price * 0.10;
                        break;
                    case (average = 5):
                        this.price;
                        break;
                    case (average <= 2):
                        this.toggleInStockStatus();
                        break;
                    default:
                        break;
                }
            }
        }

}

    let myHorse = new Arabian(true, 'brown', true);

    for (let i = 0; i < 5; i++) {
        let myRaceResult = Math.floor(Math.random() * 10) + 1;
        myHorse.addRaceResult(myRaceResult);
    }

    console.log(myHorse.price);
    console.log(myHorse.isInStock);


/*

Этот многострочный комментарий не удалять!!!

#
#
#
#
#

*/


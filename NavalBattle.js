/*
Реализуй игру "Морской бой", используя полученные знания.
Поля можешь представить ввиде массивов,
а методы аттаки принимают в качестве параметров координаты соперника.
После каждого выстрела массив отрисовывается заново с пометкой предыдущих выстрелов.
Не забудь указать 4 мины на поле.
Ну и в конце объявление о победе или о поражении.
*/

myField = []; /*моё игровое поле
       |A_B_C_D_E_F_G_H_I_J|
    01| @ @ @ # # # @ # # #
    02| @ # @ @ @ @ @ @ @ @
    03| @ # @ # + @ @ + # @
    04| @ # @ @ @ @ @ @ @ @
    05| @ # @ @ @ @ @ @ @ @
    06| @ @ @ @ + @ @ + @ @
    07| @ @ @ # @ @ @ @ # @
    08| @ @ @ @ @ @ @ @ @ @
    09| @ @ @ # @ # @ @ # @
    10| @ @ @ # @ # @ @ # @ */
enemyField = []; //вражеское поле
guessField = []; //вражеское поле, отображаемое игроку
//координаты сущностей поля int(0, 100];
enemyShips = [1, 2, 3, 4, 9, 19, 29, 31, 32, 33, 52, 55, 82, 85, 79, 80, 87, 97, 99, 100];
myShips = [4, 5, 6, 8, 9, 10, 12, 22, 24, 29, 32, 42, 64, 69, 84, 94, 86, 96, 89, 99];
myMines = [25, 28, 55, 58];
enemyMines = [21, 39, 69, 96];
mockableAttackCoords = [];
aiDefaultAttackCoords = [];
isPlayer = true; //право первого хода

function fillField(field) {
    for (let i = 0; i < 100; i++) {
        field.push('@');
    }
    return field;
} //заполняет игровое поле "@"
function getInitialAttackCoords() {
    const coords = [];
    for (let i = 1; i <= 100; i++) {
        coords.push(i);
    }
    coords.sort(() => Math.random() - 0.5);

    return coords;
} //заполняет массив координат атаки числами [1;100] и перемешивает их
function putMinesOnField(field, minesCoords) {
    for (let i = 0; i < minesCoords.length; i++) {
        field[minesCoords[i] - 1] = '+';
    }
} //расставляет мины
function putShipsOnField(field, ships) {
    for (let i = 0; i <= ships.length - 1; i++) {
        field[ships[i] - 1] = '#';
    }
} //добавляет корабли на поле
function shipExplodesOnMine(field, coords) {
    field[coords - 1] = 'X';
    shipsDeckCoordinate = field.indexOf('#');
    if (isPlayer) guessField[shipsDeckCoordinate] = 'X';
    field[shipsDeckCoordinate] = 'X';
} //функция обработки события попадания в мину
function attack(field, coords) {
    switch (field[coords - 1]) {
        /*        Условные обозначения:
             @: terra incognita
             #: палуба корабля
             +: мина
             X: пораженная палуба
         **/
        case '#':
            //если попадает игрок, то изменяем так-же поле отображаемое игроку
            if (isPlayer) guessField[coords - 1] = 'X';            
            field[coords - 1] = 'X';
            break;
        //промах
        case '@':
            field[coords - 1] = '*';
            break;
       //попадание в мину
        case '+':
            shipExplodesOnMine(field, coords);
            break;
        default:
            console.log('неверные координаты');
            break;
    }
} //функция атаки
function printField(field) {
    switch (field) {
        case myField :
            console.log('\x1b[32m%s\x1b[0m', 'Моё поле:');
            break;
        case guessField :
            console.log('\x1b[31m%s\x1b[0m', 'Враже поле: ');
            break;
        default :
            console.log('\x1b[36m%s\x1b[0m', 'Неверное поле...');
            break;
    }

    fieldCoords = [
        ['   |A_B_C_D_E_F_G_H_I_J|',],
        ['01|', '02|', '03|', '04|', '05|', '06|', '07|', '08|', '09|', '10|']
    ];
    result = '';
    console.log(fieldCoords[0][0]);

    for (let i = 0; i < field.length; i++) {
        const isRowEnd = i % 10 === 0;

        if (isRowEnd)
            result += (i === 0)
                ? fieldCoords[1][i / 10]
                : '\n' + fieldCoords[1][i / 10];
        result += ' ' + field[i];
    }
    console.log(result);
} //функция вывода поля в консоль
function repaintFields() {
    printField(myField);
    printField(guessField);
} //функция перерисовки обоих полей в консоль
function makeTurn(coords) {
    if (isPlayer) {
        attack(enemyField, coords);
    } else {
        attack(myField, coords);
    }

    repaintFields();
    isPlayer = !isPlayer;
} //функция хода
function isAllShipsSunk(field){
    let result = true;
    for (let i = 0; i < field.length; i++) {
        if (field[i] === '#') {
            result = false;
        }
    }
    return result;
}
function initFields() {

    fillField(myField);
    fillField(enemyField);
    fillField(guessField);
    putShipsOnField(myField, myShips);
    putShipsOnField(enemyField, enemyShips);
    putMinesOnField(myField, myMines);
    putMinesOnField(enemyField, enemyMines);
} //функция инициализации полей
function initGame() {
    let gameover = false;

    mockableAttackCoords = getInitialAttackCoords();
    aiDefaultAttackCoords = getInitialAttackCoords();

    initFields();

    //счетчик для прохождения по массивам координат атаки

    while (!gameover) {
        const coords = isPlayer ? mockableAttackCoords : aiDefaultAttackCoords;
        makeTurn(coords[0]);
        isAllShipsSunk(enemyField) || isAllShipsSunk(myField) ? gameover = true : gameover = false;
        coords.splice(0, 1);
    }
    !isPlayer ? console.log('player win') : console.log('enemy win');
} //запускалка

initGame();


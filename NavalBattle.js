/*
Реализуй игру "Морской бой", используя полученные знания.
Поля можешь представить ввиде массивов,
а методы аттаки принимают в качестве параметров координаты соперника.
После каждого выстрела массив отрисовывается заново с пометкой предыдущих выстрелов.
Не забудь указать 4 мины на поле.
Ну и в конце объявление о победе или о поражении.

Когда ты инитишь игру, в консоль ничего не попадает.
А вот когда я ввожу в консоль attack(координаты), то отрисовывается поле врага,
с выстрелом по моим координатам, а затем аквтоматически стреляет он и уже потом отрисовывется мое поле.
То есть раз за выстрел я вижу поле врага и своё поле.
•	 '■' и '□'
*/
let aiDefaultAttackCoords = [];
let myField = []; /*моё игровое поле
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
let enemyField = []; //вражеское поле
let guessField = []; //вражеское поле, отображаемое игроку
//координаты сущностей поля int(0, 100];
let enemyShips = [1, 2, 3, 4, 9, 19, 29, 31, 32, 33, 52, 55, 82, 85, 79, 80, 87, 97, 99, 100];
let myShips = [4, 5, 6, 8, 9, 10, 12, 22, 24, 29, 32, 42, 64, 69, 84, 94, 86, 96, 89, 99];
let myMines = [25, 28, 55, 58];
let enemyMines = [21, 39, 69, 96];
//право первого хода
let isPlayer = true;
let isGameover = false;
let isTurnRepeats;

//заполняет игровое поле "@"
function fillField(field) {
    for (let i = 0; i < 100; i++) {
        field.push('□');
    }
    return field;
}

//функция смены хода
function switchTurn() {
   isPlayer = !isPlayer;
}

//заполняет массив координат атаки числами [1;100] и перемешивает их
function getInitialAttackCoords() {
    const coords = [];
    for (let i = 1; i <= 100; i++) {
        coords.push(i);
    }
    coords.sort(() => Math.random() - 0.5);

    return coords;
}

//расставляет мины
function putMinesOnField(field, minesCoords) {
    minesCoords.forEach(mine => field[mine - 1] = '+');
}

//добавляет корабли на поле
function putShipsOnField(field, ships) {
    ships.forEach(ship => field[ship - 1] = '■');
}

//функция обработки события попадания в мину
function shipExplodesOnMine(field, coords) {
    //показывает что мина взорвана
    field[coords - 1] = 'X';
    let shipsDeckCoordinate;
    if (isPlayer) {
        shipsDeckCoordinate = myField.indexOf('■');
        guessField[coords - 1] = 'X';
        myField[shipsDeckCoordinate] = 'X';
    } else {
        shipsDeckCoordinate = enemyField.indexOf('■');
        enemyField[shipsDeckCoordinate] = 'X';
        guessField[shipsDeckCoordinate] = 'X';}
}

//функция атаки
function attack(field, coords) {
    isTurnRepeats = false;

    switch (field[coords - 1]) {
        /*        Условные обозначения:
             @: terra incognita
             #: палуба корабля
             +: мина
             X: пораженная палуба
         **/
        case '■':
            console.log('Попадание в вражеский корабль! \n');
            //если попадает игрок, то изменяем так-же поле отображаемое игроку
            if (field === enemyField) guessField[coords - 1] = 'X';
            field[coords - 1] = 'X';
            isTurnRepeats = true;
            break;
        //промах
        case '□':
            console.log('Промах..\n');
            if (field === enemyField) guessField[coords - 1] = '•';
            field[coords - 1] = '•';
            break;
       //попадание в мину
        case '+':
            console.log('Упс.. Попадание в мину.. Одна ваша палуба потоплена\n');
            shipExplodesOnMine(field, coords);
            break;
        case '•':
            console.log('Заведомо известная ячейка\n');
            isTurnRepeats = true;
            break;
        case 'X':
            console.log('Заведомо известная ячейка\n');
            isTurnRepeats = true;
            break;
        default:
            console.log('неверные координаты');
            isTurnRepeats = true;
            break;
    }
    repaintFields();
    isGameover = isAllShipsSunk(field);
}

//функция вывода поля в консоль
function printField(field) {
    switch (field) {
        case myField :
            console.log('ПОЛЕ ИГРОКА:');
            break;
        case guessField :
            console.log('ПОЛЕ БОТА: ');
            break;
        default :
            console.log('ОШИБКА, НЕВЕРНОЕ ПОЛЕ...');
            break;
    }

    fieldCoords = [
        ['\n   |A_B_C_D_E_F_G_H_I_J|',],
        ['\n01|', '02|', '03|', '04|', '05|', '06|', '07|', '08|', '09|', '10|']
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
}

//функция перерисовки обоих полей в консоль
function repaintFields() {
    printField(myField);
    printField(guessField);
}

//функция называющая победителя
function gameOver() {
    if (isGameover) {
        isAllShipsSunk(enemyField) ? console.log('Player wins') : console.log('AI wins');
}
}

//функция хода
function makeTurn(letter, number) {

    if (isPlayer) {
        let coords = coordsConverter(letter, number);
        if (!isTurnRepeats) {
            console.log('\n\nХодит игрок: \n');
            attack(enemyField, coords);
            if (isTurnRepeats) {
                console.log('Player attacks again');
                isTurnRepeats = !isTurnRepeats;
            } else {
                switchTurn();
                makeTurn();
            }
        }
    } else {
        console.log('\nХодит бот: \n');
        attack(myField, aiDefaultAttackCoords[0]);
        aiDefaultAttackCoords.splice(0, 1);
        isTurnRepeats ? makeTurn() : switchTurn();
    }
    if (isGameover) gameOver();
}

//функция проверяющая поля на наличие кораблей
function isAllShipsSunk(field) {
     let result = true;
     field.forEach(fieldsCell => { if (fieldsCell === '■') result = false;});
     return result;
}

//функция инициализации игры
function initGame() {
        fillField(myField);
        fillField(enemyField);
        fillField(guessField);
        putShipsOnField(myField, myShips);
        putShipsOnField(enemyField, enemyShips);
        putMinesOnField(myField, myMines);
        putMinesOnField(enemyField, enemyMines);
        aiDefaultAttackCoords = getInitialAttackCoords();
        console.log('Условные обозначения:\n' +
            '             □: Неизведанный квадрат\n' +
            '             ■: палуба корабля\n' +
            '             +: мина\n' +
            '             •: пустой квадрат\n' +
            '             Х: потопленная палуба или взорванная мина\n' +
            '              \n' +
            'Ход осуществляется функцией makeTurn(\'буква\', цифра);\n' +
            'например makeTurn(\'a\', 1);             '
        );
}

//makeTurn(a, 1);
function coordsConverter(letter, number){

    let row = 0, col = 0;

    switch (letter) {
        case 'a' : col += 1;
            break;
        case 'b': col += 2;
            break;
        case 'c': col += 3;
            break;
        case 'd': col += 4;
            break;
        case 'e': col += 5;
            break;
        case 'f': col += 6;
            break;
        case 'g': col += 7;
            break;
        case 'h': col += 8;
            break;
        case 'i': col += 9;
            break;
        case 'j': col += 0;
            break;
        default :
            console.log('wrong coords of the column');
            isTurnRepeats = true;
            break;
    }

    switch (number) {
        case 1: row += 0;
            break;
        case 2: row += 10;
            break;
        case 3: row += 20;
            break;
        case 4: row += 30;
            break;
        case 5: row += 40;
            break;
        case 6: row += 50;
            break;
        case 7: row += 60;
            break;
        case 8: row += 70;
            break;
        case 9: row += 80;
            break;
        case 10: row += 90;
            break;
        default :
            console.log('wrong coords of the row');
            isTurnRepeats = true;
            break;
    }

    return (col + row);
}

initGame();






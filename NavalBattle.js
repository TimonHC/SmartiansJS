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

*/
let aiDefaultAttackCoords = [];
let gameover = false;
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

//заполняет игровое поле "@"
function fillField(field) {
    for (let i = 0; i < 100; i++) {
        field.push('@');
    }
    return field;
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
    ships.forEach(ship => field[ship - 1] = '#');
}

//функция обработки события попадания в мину
function shipExplodesOnMine(field, coords) {
    field[coords - 1] = 'X';
    let shipsDeckCoordinate = field.indexOf('#');
    if (isPlayer) guessField[shipsDeckCoordinate] = 'X';
    field[shipsDeckCoordinate] = 'X';
}

//функция атаки
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
            if (isPlayer) guessField[coords - 1] = '*';
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
    repaintFields();
}

//функция вывода поля в консоль
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
}

//функция перерисовки обоих полей в консоль
function repaintFields() {
    printField(myField);
    printField(guessField);
}

//функция называющая победителя
function isGameover(){
    gameover = isAllShipsSunk();
    if (gameover) {
        isPlayer ? console.log('Player wins') : console.log('AI wins');
    }}

//функция хода
function makeTurn(coords) {

    if (isPlayer) {
        attack(enemyField, coords);
        isGameover();
        isPlayer = !isPlayer;
        makeTurn();
    } else {
        attack(myField, aiDefaultAttackCoords[0]);
        aiDefaultAttackCoords.splice(0, 1);
        if (!isGameover()) isPlayer = !isPlayer;
    }
}

//функция проверяющая поля на наличие кораблей
function isAllShipsSunk(){
    let result = false;
     myField.forEach(fieldsCell => {if (fieldsCell === '#') result = false;});
     enemyField.forEach(fieldsCell => {if (fieldsCell === '#') result = false;});
    return result;
}

//функция инициализации игры
function initGame(){
        fillField(myField);
        fillField(enemyField);
        fillField(guessField);
        putShipsOnField(myField, myShips);
        putShipsOnField(enemyField, enemyShips);
        putMinesOnField(myField, myMines);
        putMinesOnField(enemyField, enemyMines);
        aiDefaultAttackCoords = getInitialAttackCoords();
}

initGame();

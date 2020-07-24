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
aiOtherAttackCoords = []; //все, кроме aiDefaultAttackCoords
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
isPlayer = true; //право первого хода
myHitsCounter = 0; //счетчик победы
enemieHitsCounter = 0; //счетчик победы
function fillField(field) {
    for (let i = 0; i < 100; i++) {
        field.push('@');
    }
    return field;
} //заполняет игровое поле "@"
function setAttackCoords(field){
    for (let i = 1; i <= 100; i++) {
        field.push(i);
    }
    field.sort(() => Math.random() - 0.5);
} //заполняет массив координат атаки числами [1;100] и перемешивает их
function putMinesOnField(field, minesCoords) {
    for (let i = 0; i < minesCoords.length; i++) {
        field[minesCoords[i]-1] = '+';
    }
} //расставляет мины
function putShipsOnField(field, ships){
    for (let i = 0; i <= ships.length - 1; i++) {
        field[ships[i]-1] = '#';
    }
} //добавляет корабли на поле
function shipExplodesOnMine(field){
    if (isPlayer){
        enemieHitsCounter++;
        index = field.indexOf('#');
    } else {
        index = field.indexOf('#');
        guessField[index] = 'X';
        myHitsCounter++;
    } field[index] = 'X';
} //функция обработки события попадания в мину
function getCoordsForAttack(coords){
    let result = coords[0];
    coords.splice(0, 1);
    return result;
} // функция возвращающая координаты для хода ИИ, так-же удаляет их из массива
function attack(field, coords) {
    switch (field[coords-1]){
/*        Условные обозначения:
     @: terra incognita
     #: палуба корабля
     +: мина
     X: пораженная палуба
 **/
        case '#':
            //если попадает игрок, то изменяем так-же поле отображаемое игроку
            if (isPlayer) {
                myHitsCounter++;
                guessField[coords - 1] = 'X';
            } else {
                enemieHitsCounter++;}
            field[coords - 1] = 'X';
            break;
            //промах
        case '@':  field[coords-1] = '*'; break;
        //заведомо известная ячейка дает право повтора хода
        case '*':
            console.log('Заведомо известная ячейка');
            isPlayer = !isPlayer;
            break;
        case 'X':
            console.log('Заведомо известная ячейка');
            isPlayer = !isPlayer;
            break;
            //попадание в мину
        case '+':
            shipExplodesOnMine(field);
            field[coords - 1] = 'X';
            break;
        default :  console.log('неверные координаты'); break;
    }
} //функция атаки
function printField(field) {
    switch(field) {
        case myField : console.log('\x1b[32m%s\x1b[0m', 'Моё поле:'); break;
        case guessField : console.log('\x1b[31m%s\x1b[0m','Враже поле: '); break;
        default : console.log('\x1b[36m%s\x1b[0m', 'Неверное поле...'); break;
    }

    fieldCoords = [
        ['   |A_B_C_D_E_F_G_H_I_J|',],
        ['01|', '02|', '03|', '04|', '05|', '06|', '07|', '08|', '09|', '10|']
    ];
    result = '';
    console.log(fieldCoords[0][0]);
    for (let i = 0; i < field.length; i++) {
        if (!(i % 10))
            i === 0
                ? result += fieldCoords[1][i / 10]
                : result += '\n' + fieldCoords[1][i / 10] ;
        result += ' ' + field[i];
    } console.log(result);
} //функция вывода поля в консоль
function repaintFields(){
    printField(myField);
    printField(guessField);
} //функция перерисовки обоих полей в консоль
function makeTurn(coords){
    if (isPlayer){
        attack(enemyField, coords);
        repaintFields();
    } else {
        attack(myField, coords);
        repaintFields();
    } isPlayer = !isPlayer;
} //функция хода
function initFields(myField, enemyField, guessField,
                    myShips, enemyShips,
                    myMines, enemyMines) {
    fillField(myField);
    fillField(enemyField);
    fillField(guessField);
    putShipsOnField(myField, myShips);
    putShipsOnField(enemyField, enemyShips);
    putMinesOnField(myField, myMines);
    putMinesOnField(enemyField, enemyMines);
} //функция инициализации полей

function initGame() {
    setAttackCoords(mockableAttackCoords);
    setAttackCoords(aiDefaultAttackCoords);
    initFields(myField, enemyField, guessField, myShips, enemyShips, myMines, enemyMines);

    //счетчик для прохождения по массивам координат атаки
    while ((myHitsCounter || enemieHitsCounter) !== 20 ) {
        if (isPlayer) {
            makeTurn(getCoordsForAttack(mockableAttackCoords));
        } else {
makeTurn(getCoordsForAttack(aiDefaultAttackCoords));}
    }
    myHitsCounter > enemieHitsCounter ? console.log('player win') : console.log('enemy win');
}

initGame();


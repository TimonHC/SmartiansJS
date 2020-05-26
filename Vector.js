/*Векторный тип. Напишите конструктор Vector, представляющий вектор в двумерном пространстве. Он принимает параметры x и y (числа), которые хранятся в одноимённых свойствах.
Дайте прототипу Vector два метода, plus и minus, которые принимают другой вектор в качестве параметра, и возвращают новый вектор, который хранит в x и y сумму или разность двух (один this, второй — аргумент)

Добавьте геттер length в прототип, подсчитывающий длину вектора – расстояние от (0, 0) до (x, y).
*/
const Vector = function(x,y) {
        this.x = x;
        this.y = y;
};
Vector.prototype.plus = function(arg) {
    return new Vector(this.x + arg.x, this.y + arg.y);
};
Vector.prototype.minus = function(arg) {
    return new Vector(this.x - arg.x, this.y - arg.y);
};
Vector.prototype.__defineGetter__('length', function() {
    return Math.sqrt((Math.pow(this.x,2) + Math.pow(this.y,2)))
});

var firstVector = new Vector(1,1);
var secondVector = new Vector(2,2);
console.log(firstVector.plus(secondVector));
console.log(firstVector.length);
console.log(firstVector.minus(secondVector));

//Оператор == сравнивает переменные объектов, проверяя, ссылаются ли они на один объект.
//Но иногда полезно было бы сравнить объекты по содержимому.Напиши функцию deepEqual,
//которая принимает два значения и возвращает true, только если это два одинаковых значения или это объекты,
//свойства которых имеют одинаковые значения, если их сравнивать рекурсивным вызовом deepEqual.
//Чтобы узнать, когда сравнивать величины через ===, а когда – объекты по содержимому,
//используйте оператор typeof. Если он выдаёт “object” для обеих величин, значит нужно делать глубокое сравнение.
//Не забудь об одном дурацком исключении, случившемся из-за исторических причин: “typeof null” тоже возвращает “object”.
var obj1 = {
    obj1Property1: 2,
    obj1Property2: 2,
};
var obj2 = {
    obj2Property1: 1,
    obj2Property2: 1,
};
var deepEqual = function(arg1, arg2){
     if ((typeof arg1 === "object" && arg1 !== null) && (typeof arg2 === "object" && arg2 !== null)) {
        if (Object.keys(arg1).length !== Object.keys(arg2).length) return false;
        else for (var key in arg1) {
            if (arg2.hasOwnProperty(key)) {
                if (deepEqual(arg1[key], arg2[key])) return true;
            } else return false;


console.log(deepEqual(obj1, obj2));


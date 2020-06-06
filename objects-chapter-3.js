//Оператор == сравнивает переменные объектов, проверяя, ссылаются ли они на один объект.
//Но иногда полезно было бы сравнить объекты по содержимому.Напиши функцию deepEqual,
//которая принимает два значения и возвращает true, только если это два одинаковых значения или это объекты,
//свойства которых имеют одинаковые значения, если их сравнивать рекурсивным вызовом deepEqual.
//Чтобы узнать, когда сравнивать величины через ===, а когда – объекты по содержимому,
//используйте оператор typeof. Если он выдаёт “object” для обеих величин, значит нужно делать глубокое сравнение.
//Не забудь об одном дурацком исключении, случившемся из-за исторических причин: “typeof null” тоже возвращает “object”.
var obj1 = {
    objProperty1: 2,
    objProperty2: 2,
};
var obj2 = {
    objProperty1: 2,
    objProperty2: 2,
};
function isObject(obj){
    return (typeof obj === "object" && obj !== null);
}
var deepEqual = function(arg1, arg2) {
    if (isObject(arg1) && isObject(arg2)) {
        if (Object.keys(arg1).length !== Object.keys(arg2).length) {
            return false;}
        for (var key in arg1) {
            if (arg2.hasOwnProperty(key)) {
                if (!deepEqual(arg1[key], arg2[key])) return false;
            } else {
                return false;
            }
        }
        return true;
    } else return arg1 === arg2;
};
console.log(deepEqual(obj1, obj2));


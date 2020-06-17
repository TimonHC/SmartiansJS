//Оператор == сравнивает переменные объектов, проверяя, ссылаются ли они на один объект.
//Но иногда полезно было бы сравнить объекты по содержимому.Напиши функцию deepEqual,
//которая принимает два значения и возвращает true, только если это два одинаковых значения или это объекты,
//свойства которых имеют одинаковые значения, если их сравнивать рекурсивным вызовом deepEqual.
//Чтобы узнать, когда сравнивать величины через ===, а когда – объекты по содержимому,
//используйте оператор typeof. Если он выдаёт “object” для обеих величин, значит нужно делать глубокое сравнение.
//Не забудь об одном дурацком исключении, случившемся из-за исторических причин: “typeof null” тоже возвращает “object”.
let obj1 = {
    objProperty1: 2,
    objProperty2: 2,
};
let obj2 = {
    objProperty1: 2,
    objProperty2: 2,
};
function isObject(obj) {
    return (typeof obj === "object" && obj !== null);
}
let deepEqual = function(arg1, arg2) {
    let bothParamsAreObjects = isObject(arg1) && isObject(arg2);
    if (!bothParamsAreObjects) return arg1 === arg2;
    if (Object.keys(arg1).length !== Object.keys(arg2).length) return false;
    for (let key in arg1) {
        if (arg2.hasOwnProperty(key) && !deepEqual(arg1[key], arg2[key])) return false;
    }
    return true;
};
console.log(deepEqual(obj1, obj2));

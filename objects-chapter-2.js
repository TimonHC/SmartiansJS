// Рассмотрим такой, достаточно надуманный, объект:
var box = {
    locked: true,
    unlock: function() { this.locked = false; },
    lock: function() { this.locked = true;  },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Заперто!");
        return this._content;
    }
};

// Это коробочка с замком. Внутри лежит массив, но до него можно добраться только, когда коробка не заперта.
// Напрямую обращаться к свойству _content нельзя.
//
// Напишите функцию withBoxUnlocked, принимающую в качестве аргумента функцию, которая отпирает коробку,
// выполняет функцию, и затем обязательно запирает коробку снова перед выходом – неважно, выполнилась ли
// переданная функция правильно, или она выбросила исключение.
//box.unlock();
let withBoxUnlocked = function(body) {
    if (box.locked){
        box.unlock();
        body();
        box.lock();
    } else {
    body();
    box.lock();}
};


withBoxUnlocked(function() {
    box.content.push("золотишко");
});

try {
    withBoxUnlocked(function() {
        throw new Error("Пираты на горизонте! Отмена!");
    });
} catch (e) {
    console.log("Произошла ошибка:", e);
}
console.log(box.locked);
console.log(box.content);

// → true

// В качестве бонуса убедитесь, что при вызове withBoxUnlocked, когда коробка не заперта,
// коробка остаётся незапертой.

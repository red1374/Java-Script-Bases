/* Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
видео -> 3 примеры наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name
и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
объект-прототип (как объект transport в уроке). */

'use strict';

// -- ES5 ----------------------------------------------------------------------- //
function Product(name, price){
    this.name   = name;
    this.price  = price;
}

Product.prototype.make25PercentDiscount = function(){
    this.price  *= 0.75; 
}

let product1  = new Product('Товар 1', 3500);
console.log('-- ES5 version --------------------- ');
console.log(product1);
console.log(product1.price);

product1.make25PercentDiscount();
console.log(product1.price);


// -- ES6 ----------------------------------------------------------------------- //
class ES6Product{
    constructor(name, price){
        this.name   = name;
        this.price  = price;
    }

    make25PercentDiscount(){
        this.price  *= 0.75; 
    }
}

let product2  = new ES6Product('Товар 2', 5300);
console.log('-- ES6 version --------------------- ');
console.log(product2);
console.log(product2.price);

product2.make25PercentDiscount();
console.log(product2.price);
/* Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
15%, можете использовать метод forEach https://mzl.la/1AOMMWX */

'use strict';

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    }
];


/**
 * Add a discount value to a given products list
 * @param {array} _products products array
 * @param {number} _percent disciunt value
 * @returns 
 */
function addDiscount(_products, _percent){
    if (!_products || !_percent)
        return false;

    _products.forEach(element => {
        element.price *= (100 - _percent) / 100;
    });

    return true;
}
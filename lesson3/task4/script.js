/* Перед вами находится массив с продуктами в интернет-магазине. Вам нужно: */

'use strict';

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

/* 1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT */
/**
 * Get all products with non empty photos property
 * @param {array} _products products array 
 * @returns {array}
 */
function getProductsWithImages(_products){
    if (!_products)
        return false;

    return _products.filter(element => {
        if ( !('photos' in element) )
            return false;

        return element.photos.length;
    });
}


/* 2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 или в
дополнительных видео в материалах урока. */
/**
 * Function to compare two objects by property
 * @param {Object} a first operand
 * @param {object} b second operand
 * @param {string} __property object property name
 * @returns 
 */
function compareObjects(a, b, __property){
    if ( !(__property in a) || !(__property in b) )
        return 0;

    if (a[__property] > b[__property]) 
        return -1;

    if (a[__property] < b[__property])
        return 1;

    return 0;
}


/**
 * Sorting array of object by given property
 * @param {array} _array array of objects
 * @param {string} _property object property name
 * @param {string} _direction sorting direction (Ascending | Descending)
 * @returns {boolean} sorting status
 */
function sortByProperty(_array, _property, _direction = 'ASC'){
    if (!_array)
        return false;

    if (_direction == 'DESC')
        _array.sort(function(a, b, __property= _property){
            return compareObjects(a, b, __property);
        });
    else
        _array.sort(function(a, b, __property= _property){
            return compareObjects(b, a, __property);
        });
    
    return true;
}


/**
 * Sorting products array by price property
 * @param {array} _products array of objects
 * @param {string} _direction sorting direction
 * @returns 
 */
function sortByPrice(_products, _direction = 'ASC'){
    if (!_products)
        return false;

    return sortByProperty(_products, 'price', _direction);
}
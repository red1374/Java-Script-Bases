/* Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return. */

/**
 * Returns sum of two given numbers
 * @param {number} _a first operand
 * @param {number} _b second operand
 * @returns {number}
 */
function sum(_a, _b) {
    return _a + _b;
}


/**
 * Returns subtraction of two given numbers
 * @param {number} _a first operand
 * @param {number} _b second operand
 * @returns {number}
 */
function subtraction(_a, _b) {
    return _a - _b;
}


/**
 * Returns division of two given numbers
 * @param {number} _a first operand
 * @param {number} _b second operand
 * @returns {number}
 */
function div(_a, _b) {
    return _a / _b;
}


/**
 * Returns multiplication of two given numbers
 * @param {number} _a first operand
 * @param {number} _b second operand
 * @returns {number}
 */
function multiplication(_a, _b) {
    return _a * _b;
}

/* С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10
включительно, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число */

'use strict';

/**
 * Prints information about given number
 * @param {number} number - number to print
 * @returns {string}
 */
function printNumberValue(number = 0){
    if (isNaN(number))
        return '-- Empty value -- ';

    if (!number)
        return `${number} - это ноль`;
    else if (number % 2)
        return `${number} - нечетное число`;
    else
        return `${number} - четное число`;
}

/**
 * Prints into console information about digits in range of given length
 * @param {number} range_length - range length
 * @returns 
 */
function getNumbers(range_length = 0){
    range_length = Number(range_length);

    if (!range_length || isNaN(range_length))
        return false;

    console.log(`Массив [0 .. ${range_length}]`)
    for(let i = 0; i <= range_length; i++)
        console.log(printNumberValue(i));

    return true;
}
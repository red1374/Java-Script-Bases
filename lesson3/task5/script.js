/* Вывести с помощью цикла for числа от 0 до 9,
НЕ используя тело цикла. То есть выглядеть должно примерно так:
for(…){// здесь пусто /} */

'use strict';


/**
 * Checks condition and print into console next digits from a range
 * @param {number} current_index current for cycle index
 * @param {number} range_length range length value
 * @returns {boolean} condition state
 */
function forCondition(current_index, range_length){
    if (isNaN(Number(range_length)))
        throw Error(`'${range_length}' is not a Number!`);

    console.log(current_index);

    if (current_index < range_length)
        return true;
    
    return false;
}

/**
 * Print digits from a range 
 * @param {number} number range length
 * @returns 
 */
function printDigits(number){
    for(let i = 0; forCondition(i, number); i++){/* здесь пусто */}

    return true;
}
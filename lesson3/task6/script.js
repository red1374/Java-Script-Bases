/* Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx */

'use strict';

/**
 * Print a bunch into console
 * @param {number} number a bunc height
 */
function printABunch(number){
    if (isNaN(Number(number)))
        throw Error(`'${number}' is not a number!`);
    
    let line = '';
    for(let i = 1; i <= number; i++){
        line += 'x';
        console.log(line);
    }
}
/* Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от 
переданного значения операции (использовать switch) выполнить одну из арифметических 
операций 
(использовать функции из задания 4) и вернуть полученное значение.  */


/**
 * Makes four mathematical operations with two given operand
 * @param {number} arg1 - first operand
 * @param {number} arg2 - second operand
 * @param {number} operation - operation sign
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return sum(arg1, arg2);
        case '-':
            return subtraction(arg1, arg2);
        case '/':
            return div(arg1, arg2);
        case '*':
            return multiplication(arg1, arg2);
        default:
            throw Error(`Wrong operation sign '${operation}'`);
    }
}

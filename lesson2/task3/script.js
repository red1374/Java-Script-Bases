/* Объявить две переменные a и b и задать им целочисленные произвольные начальные значения. 
Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность (ноль можно считать положительным числом);
- если а и b отрицательные, вывести их произведение; 
- если а и b разных знаков, вывести их сумму; */


/**
 * Функция выводит результат арифметических операций в зависимости от входных данных
 * @param {number} _a Целое число
 * @param {number} _b Целое число
 * @returns {number} Целое число
 */
function magic(_a, _b) {
    if (_a >= 0 && _b >= 0)
        return _a - _b;
    else if (_a < 0 && _b < 0)
        return _a * _b;
    else
        return _a + _b;
}

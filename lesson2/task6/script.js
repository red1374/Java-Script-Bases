/* Программа должна спросить у пользователя число, это будет количество денег, которое он хочет 
положить на счет в банке. Затем программа должна выдать примерно такое сообщение: 
    "Ваша сумма в 101 рубль успешно зачислена." */

let msg = 'Ваша сумма в #NUMBER# рубл#ENDS# успешно зачислена.';

/**
 * Return message with correct rubles ending
 * @param {numder} _number 
 * @returns 
 */
function resultMessage(_number) {
    return msg.replace('#NUMBER#', _number).replace('#ENDS#', rublsEnds(_number));
}


/**
 * Returns rubles ending
 * @param {number} _number number of rubles
 * @returns {number}
 */
function rublsEnds(_number) {
    if (_number >= 20)
        _number = _number % 10;

    if (_number == 1)
        return 'ь';
    if ((_number > 4 && _number < 20) || !_number)
        return 'ей';
    else
        return 'я';
}

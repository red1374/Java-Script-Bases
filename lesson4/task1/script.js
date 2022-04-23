/* Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds) */

'use strict';

class CNumber {
    static range = {
        from: 0,
        to  : 999
    }

    constructor(string){
        this.number = Number(string);
        this.units  = 0;
        this.tens   = 0;
        this.hundereds  = 0;

        if (!this.checkNumber())
            throw Error('Указано некорректное значение!');
        
        if (!this.isValidNumber())
            throw Error(`Необходимо число из диапозона [${CNumber.range.from} .. ${CNumber.range.to}]`);
        
        this.parseNumber();
    }

    checkNumber(){
        if (isNaN(this.number) || !Number.isInteger(this.number))
            return false;
        
        return true;
    }

    isValidNumber(){
        if (this.number < CNumber.range.from || this.number > CNumber.range.to)
            return false;

        return true;
    }

    parseNumber(){
        let number      = this.number,
            prop_name   = '';

        for(let i = 0; number > 0; i++){
            if (i == 0){
                prop_name = 'units';
            }else if(i == 1){
                prop_name = 'tens';
            }else{
                prop_name = 'hundereds';
            }

            this[prop_name] = number % 10;
            number = parseInt(number / 10);
        }
    }

    get value(){
        return {
            units       : this.units,
            tens        : this.tens,
            hundereds   : this.hundereds
        }
    }
};

let str     = prompt('Введите число от 0 до 999:');
let number  = new CNumber(str);
console.log(number.value);

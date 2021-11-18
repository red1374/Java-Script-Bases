/**
 * Объект игрока, здесь будут все методы и свойства связанные с ним.
 * @property {int} score счет игрока
 */
const player = {
    score: 0,

    /**
     * Проверяет правильность ответа
     * @param {int} questionID индекс вопроса
     * @param {string} answare вариант ответа игрока
     */     
    checkAnsware(questionID, answare){
        if (!questions[questionID])
            return false;

        if (questions[questionID].correct == answare)
            this.score++;        
    },

    showScore(){
        console.log(`Ваш результат: ${this.score} балл${this.scoreEnds(this.score)}`);
    },

    /**
     * Корректная словоформа слова балл
     * @param {number} number количество баллов
     * @returns {number}
     */
    scoreEnds(number) {
        if (number >= 20)
            number = number % 10;

        if (number == 1)
            return '';
        if ((number > 4 && number < 20) || !number)
            return 'ов';
        else
            return 'а';
    }
};

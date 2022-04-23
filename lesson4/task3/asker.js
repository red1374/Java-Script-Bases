let asker = {
    /**
     * Задаем очередной вопрос игроку и обрабатываем ответ     
     */
    showQuestions(){
        for (let questionID in questions){            
            let answare = prompt(this.getQuestion(+questionID + 1, questions[questionID]));
            if (answare == 'exit'){
                return ;
            }
            player.checkAnsware(questionID, answare);
        }
    },

    /**
     * Генерируем текст с ответами нового вопроса
     * @param {object} question объект воароса с ответами
     * @param {int} questionID номер вопроса
     * @returns {string}
     */
    getQuestion(questionID, question){
        let questionText = "";

        questionText = questionID + '. ' + question.title + '\n\n';
        for(let variant in question.answares){
            questionText += `${variant}) ${question.answares[variant]}` + '\n';
        }
        questionText += '\nДля выхода наберите exit';

        return questionText;
    }
}

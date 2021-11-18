let game= {
    /**
     * Запускает игру
     */
    run(){
        // Последовательно выводим вопросы с вариантами ответов
        asker.showQuestions();
        console.log("Игра окончена");
        console.log(player.showScore());
    },

    // Этот метод выполняется при открытии страницы.
    init(){
        console.log('Для начала викторины наберите game.run()');
        player.score = 0;
    }
}
game.init();

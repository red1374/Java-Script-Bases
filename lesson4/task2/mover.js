let mover = {
    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection(){
        const availableDirections   = [1, 2, 3, 4, 6, 7, 8, 9];
        while(true){
            let direction = parseInt(prompt(`Введите число (${availableDirections.join(', ')}), куда вы хотите переместиться, Отмена для выхода.`))
            if (isNaN(direction)){
                return null;
            }
            if (!availableDirections.includes(direction)){
                alert(`Для перемещения необходимо ввести одно из чисел (${availableDirections.join(', ')})`);
                continue;
            }
            return direction;
        }
    },

    getNextPosition(direction){
        const nextPosition  = {
            x: player.x,
            y: player.y
        };
        const prevPosition  = {
            x: nextPosition.x,
            y: nextPosition.y
        };

        switch(direction){
            case 1:
                nextPosition.y++;
                nextPosition.x--;
                break;
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.y++;
                nextPosition.x++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.y--;
                nextPosition.x--;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.y--;
                nextPosition.x++;
                break;
        }

        if (this.isWall(nextPosition))
            return prevPosition;
            
        return nextPosition;
    },

    isWall(nextPosition){
        if (nextPosition.x < 0 || nextPosition.y < 0 || 
            nextPosition.y > config.rowsCount - 1 || nextPosition.x > config.colsCount - 1)
            return true;
        
        return false;
    }
}
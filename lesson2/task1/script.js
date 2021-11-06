/* Объясните почему код даёт именно такие результаты? */

let a = 1, b = 1, c, d;

//пример 1 
c = ++a;
alert(c); //ответ: 2 
/* Сначала выполняется инкремент значения переменной "a", а затем результат сохраняется в переменную "с" */

//пример 2 
d = b++;
alert(d); //ответ: 1 
/* Сначала сохраняется значение переменной "b" в переменную "d", а затем выполняется инкремент значения "b".
В этом случае в переменной "d" сохраняется значение "b", до инкремента. */

//пример 3 
c = 2 + ++a;
alert(c); //ответ: 5 
/* Начальное значение "a" = 1, а в первом примере оно увеличено на 1. В этом примере сначала выполняется
инкремент значения "a" (теперь оно равно 3) и к нему прибавляется 2 */

//пример 4 
d = 2 + b++;
alert(d); //ответ: 4 
/* Начальное значение "b" = 1, а в втором примере оно увеличено на 1. Так как в этом примере используется
 пост инкремент значения переменной "b", то сначала к 2 прибавляется старое значение "b" (=2) и присваивается
 переменной d. А затем уже значение переменной b увеличивается на 1.
*/

alert(a); //3 
alert(b); //3 
/* Начальные значения = 1. Каждое из значений увеличивалось инкрементом два раза. */

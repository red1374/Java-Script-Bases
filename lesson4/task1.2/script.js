/* Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных
видео -> 3 примеры наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
highlighted значение true. */

'use strict';

// -- ES5 ----------------------------------------------------------------------- //
function Post(author, text, date){
    this.author = author;
    this.text   = text;
    this.date   = date;
}
Post.prototype.edit = function(text){
    this.text   = text;
}

function AttachedPost(author, text, date){
    Post.call(this, author, text, date);
    this.highlighted = false;
}
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;
AttachedPost.prototype.makeTextHighlighted = function(){
    this.highlighted = true;
}

console.log('-- ES5 version --------------------- ');
let AP = new AttachedPost('Сергей', 'Текст Текст Текст Текст Текст Текст', '01.01.2021');
console.log(AP, AP.text, AP.highlighted);
AP.edit('Текст измененет');
AP.makeTextHighlighted();
console.log(AP.text, AP.highlighted);

// -- ES6 ----------------------------------------------------------------------- //
class ES6Post {
    constructor(author, text, date) {
        this.author = author;
        this.text   = text;
        this.date   = date;
    }
    edit(text) {
        this.text   = text;
    }
}

class ES6AttachedPost extends ES6Post{
    constructor(author, text, date){
        super(author, text, date);
        this.highlighted= false;
    }
    makeTextHighlighted = function(){
        this.highlighted= true;
    }
}

console.log('-- ES6 version --------------------- ');
let AP1 = new ES6AttachedPost('Андрей', 'Поста текст огромный', '02.01.2021');
console.log(AP1, AP1.text, AP1.highlighted);
AP1.edit('Текст измененет');
AP1.makeTextHighlighted();
console.log(AP1.text, AP1.highlighted);

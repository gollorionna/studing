// функции-конструкторы
// new
// classes


// функции-конструкторы

// СОГЛАШЕНИЯ РАЗРАБОТЧИКОВ
// 1)  имя функции-конструктора начинается с большой буквы
// 2)  функция-конструктор выполняется только с помощью оператора new


// когда вызываем new User()
// (1)  Создается пустой объект и он присваивается в this
// (2)  Выполняется тело функции. Добавляются свойства
// (3)  Возвращается значение this

// function User(userName, age) {
//     // this = {} неявно
//     this.userName = userName;
//     this.age = age;
//     this.isAdmin = false;
//     this.sayHi = function() {
//         console.log(`Hi, my name is ${this.userName}`);
//     }
//     this.sayAge = function() {
//         console.log(`I'm ${this.age} years old`);
//     }
//     // return this => неявно
// }

// const vasya = new User('Vasya', 20);
// const vika = new User('Vika', 23);
// console.log(vasya);
// console.log(vika);
// vasya.sayHi();
// vika.sayHi();
// vasya.sayAge();
// vika.sayAge();



// ООП
// КЛАССЫ
// this
// this



// class Animal {
//     constructor() {
//         this.type = 'bird'
//     }
// }

// class User {
//     // методы класса
//     constructor(userName, age) {
//         this.userName = userName;
//         this.age = age;
//         this.isAdmin = false;
//     }
//     sayHello() {
//         console.log(`Hello, my name is ${this.userName}`);
//     }
//     sayAge() {
//         console.log(`I'm ${this.age} years old`);
//     }
// }
// инстанс, экземпляр
// const user1 = new User('John', 22);

// console.log(user1.sayHello());

// instance of => проверка, является ли объект экземпляром класса

// console.log(user1 instanceof User);
// console.log(user1 instanceof Animal);





// поля 
// поля экземпляра класса

// поля самого класса (статические) - static перед именем с пробелом
// они принадлежат классу, используют для создания констант (хранят инфу для класса)
// они определяют логику класса, а не экземпляра
// статический метод имеет доступ к статическим полям
// статический метод не имеет доступ к полям экземпляра (не использует this)


// уровни доступа
// публичные - доступны внутри класса и в экземпляре
// приватные - доступные только внутри класса - #
// private, public, protected, readonly


// поля могуть быть одновременно статическими и приватными

// class User {
//     #name
//     static TYPE_ADMIN = 'admin'
//     static TYPE_REGULAR = 'regular'
//     static #MAX_INSTANCES = 2
//     static #instances = 0
//     constructor(name, type) {
//         User.#instances++;
//         if (User.#instances > User.#MAX_INSTANCES) {
//             console.log('Нельзя создать экземпляр класса');
//         }
//         this.#name = name;
//         this.type = type;
//     }
//     getUserName() {
//         console.log(`Имя - ${this.#name}`);
//     }
//     static isUserInstance(obj) {
//         console.log(obj instanceof User);
//     }
// }

// const user = new User('John', 'admin');
// console.log(user);
// const test = {
//     name: 'test',
//     type: 'test',
//     getUserName() {
//         console.log(`Имя - ${this.name}`);
//     }
// }
// console.log(test);
// user.getUserName()

// const user2 = new User('David', User.TYPE_ADMIN);
// console.log(user2);

// User.isUserInstance(user2)

// new User('Peter', User.TYPE_ADMIN)
// new User('Bob', User.TYPE_ADMIN)
// new User('Hannah', User.TYPE_REGULAR)



// extends
// class Child extends Parent {}

// class Animal {
//     constructor(type) {
//         this.type = type
//     }
//     getAnimalType() {
//         console.log(`Я - ${this.type}`);
//     }
// }

// class Dog extends Animal {
//     constructor(type, klichka, color) {
//         super(type);
//         this.klichka = klichka
//         this.color = color
//     }
// }

// const bobik = new Dog('dog','Bobik', 'gray');
// console.log(bobik);
// bobik.getAnimalType();


// smartphone 
// kurochka 

// oop
// прототипы
// __proto__
// [[Prototype]]
// prototype
// boxing
// unboxing

// const bookArr = [];

// function Book(author, bookName, pageAmount){
//     this.author = author;
//     this.bookName = bookName;
//     this.pageAmount = pageAmount;
//     bookArr.push(this);
// }

// const specialMeet = new Book('Augustina Bazterrica', 'Special Meet', 424);
// const maraAndMorok = new Book('Lia Arden', 'Mara and Morok', 216);
// const marryPopins = new Book('Pamela lindon', 'Mary Popins', 640);
// const helloJS = new Book('Viktoria Daineko', 'Hello JS', 700);
// const veryHardJS = new Book('Viktor Nevskin', 'Very hard JS', 400);
// const howDoNotDieWhenYouLearnJS = new Book('Patrik Chai', 'How do not die when you learn JS', 100);

// const maxBook = bookArr.sort((a, b) => {
//     return a.pageAmount - b.pageAmount
// })

// console.log(maxBook[maxBook.length - 1]);


// const maxObj = bookArr.reduce((acc, currentBook) => {
//     return acc.pageAmount > currentBook.pageAmount ? acc : currentBook
// })
// console.log(maxObj);



// прототипы => {} or null => ссылка на объект, который используется для наследования
// прототипное наследование
// [[Prototype]] => указывает на прототип(от кого произошло)
// prototype
// __proto__
// конец цепочки => null

// function Box(width, height) {
//     this.width = width;
//     this.height = height;
// }
// const box1 = new Box(200, 200);

// console.log(box1);
// console.log(box1.__proto__);
// console.log(Box.prototype);


// function Auto(brand, color, gas){
//     this.brand = brand;
//     this.color = color;
//     this.gas = gas;
//     // this.drive = function() {
//     //     if (this.gas > 0) {
//     //         this.gas -= 10;
//     //         console.log(`Бензин у ${this.brand} - ${this.gas}`);
//     //         return this.gas;
//     //     } else {
//     //         console.log(`Бензин закончился :(`);
//     //     }
//     // }
// }



// Auto.prototype.drive = function() {
//     if (this.gas > 0) {
//         this.gas -= 10;
//         console.log(`Бензин у ${this.brand} - ${this.gas}`);
//         return this.gas;
//     } else {
//         console.log(`Бензин закончился :(`);
//     }
// }
// const opel = new Auto('opel', 'blue', 60);
// const lada = new Auto('lada', 'red', 50);

// opel.drive()
// opel.drive()
// opel.drive()


// lada.drive()
// lada.drive()
// lada.drive()

// console.log(opel.drive === lada.drive);



// class Car {
//     constructor(brand, color, gas) {
//         this.brand = brand;
//         this.color = color;
//         this.gas = gas;
//     }
//     drive() {
//         if (this.gas > 0) {
//             this.gas -= 10;
//             console.log(`Бензин у ${this.brand} - ${this.gas}`);
//             return this.gas;
//         } else {
//             console.log(`Бензин закончился :(`);
//         }
//     }
// }

// const tesla = new Car('tesla', 'white', 100);
// const bmw = new Car('bmw', 'black', 20);

// console.log(bmw);

// console.log(bmw.drive === tesla.drive); // true



// const obj = {
//     number: 20
// }

// const another_obj = {
//     age: obj
// }

// const one_more_obj = obj;

// console.log(obj === another_obj.age);
// console.log(obj === one_more_obj);

// another_obj.age.number = 44;

// console.log(obj.number === 44);
// console.log(one_more_obj.number === 44);


// X.__proto__
// Y.prototype


// какие-то __proto__ объектов X равны каким-то prototype объектов Y

// X.__proto__ === Y.prototype

// const user = {}; // user.__proto__
// const numbers = []; // numbers.__proto__
// const age = 18; // age.__proto__
// const userName = 'John'; // userName.__proto__
// const isLoading = false; // isLoading.__proto__
// function doSmth() {}; // doSmth.__proto__
// const getData = function() {}; // getData.__proto__
// const arrowFunc = () => { }; // arrowFunc.__proto__
// class Person { }; // Person.__proto__

// __proto__ - есть у любого объекта
// __proto__ - почти всегда объект
// __proto__ - у одинаковых по типу объектов - равныб т.е. это один и тот же объект
// __proto__ - у разных по типу объектов - разные объекты




// __proto__ указывает на объект функции конструктора с помощью которой был создан объект =>Y.prototype


// const level = 5; // new Number()
// console.log(level.__proto__ === Number.prototype);

// console.log(level.__proto__);
// console.log(Number.prototype);


// class MyClass {

// }

// function Animal() {

// }

// console.log(MyClass.__proto__ === Function.prototype);
// console.log(MyClass.prototype);


// console.log(Animal.__proto__);
// console.log(Animal.prototype);

// const myClassObj = new MyClass();

// console.log(myClassObj.__proto__);

// __proto__ у любого объекта 
// prototype у class или function
// __proto__ - ccылается на prototype класса или функции-конструктора с помощью которой был создан


// user.__proto__ => Object.prototype => toString()


// const user = { userName: 'John'}
// user.toString()

// console.log(user.__proto__ === Object.prototype);

// class MyClass {
//     constructor(userName) {
//         this.userName = userName
//     }
//     hello() {
//         console.log(`Hello ${this.userName}`);
//     }
// }

// function MyClassFunc(userName) {
//     this.userName = userName
    
// }

// MyClassFunc.prototype.hello = function() {
//     console.log(`Hello ${this.userName}`);
// }

// const myClass = new MyClass('John')
// myClass.hello()
// const myClassFunc = new MyClassFunc('David')
// myClassFunc.hello()


// console.log(myClass);
// console.log(myClassFunc);


// class Animal {
//     constructor(type) {
//         this.type = type
//     }
//     canJump() {
//         console.log('I can jump');
//     }
// }

// class Dog extends Animal{
//     constructor(type, name) {
//         super(type)
//         this.name = name;
//     }
//     canWoof() {
//         console.log('I can woof');
//     }
// }


// const chappi = new Dog('собака', 'бобик');

// console.log(chappi);
// chappi.canJump()
// chappi.canWoof()


// до ES6
// конструктор родительского класса
// function Animal(type, sound) {
//     this.type = type
//     this.sound = sound
// }

// Animal.prototype.makeSound = function() {
//     console.log(this.sound);
// }

// // конструктор дочернего класса
// function Dog(type, sound, breed) {
//     // вызов конструктора родительского класса
//     Animal.call(this, type, sound)
//     this.breed = breed
// }



// // Object.create() => создать объект с прототипом
// Dog.prototype = Object.create(Animal.prototype)
// Dog.prototype.constructor = Dog;

// Dog.prototype.hello = function() {
//     console.log('Hello');
// }
// const labrador = new Dog('dog', 'gav-gav', 'labrador')
// console.log(labrador);
// labrador.makeSound()
// labrador.hello()
// console.log(labrador.constructor);


// const obj = {
//     a:22
// }


// const test = Object.create(obj, {
//     info: {
//         value: function() {
//             console.log('Info from test obj');
//         }
//     }
// });

// // Object.getPrototypeOf => узнать прототип

// console.log(Object.getPrototypeOf(test));
// console.log(test.a);

// test.info()

// console.log(obj.toString());


// const kurochka = {
//     color: "white",
//     _isOtbivnaya: false
// }

// Object.defineProperty(kurochka, "isOtbivnaya", {
//     get() {
//         return this._isOtbivnaya;
//     },
//     set(newValue) {
//         if(newValue){
//         this._isOtbivnaya = newValue;
//         Object.preventExtensions(this)
//         console.log('Воскресить курочку нельзя');
    
// }
        
//     }
// })



// kurochka.canFly = false
// kurochka.isOtbivnaya = true
// kurochka.isOtbivnaya = false
// kurochka.isAlive = false;

// console.log(kurochka);



// ООП - объектно-ориентированное программирование {}

// Принципы ООП:
// Наследование
// Инкапсуляция
// Абстракция
// Полиморфизм - одно действие, но форм может быть много разных



// наследование:
// class Animal {
//     constructor(type) {
//         this.type = type
//     }
//     canJump() {
//         console.log('I can jump');
//     }
// }

// class Dog extends Animal{
//     constructor(type, name) {
//         super(type)
//         this.name = name;
//     }
//     canWoof() {
//         console.log('I can woof');
//     }
// }

// класс может наследоваться только от 1 родителя
// можно безгранично увеличивать цепочку наследования
// если класс неследует свойства/методы, то впервую очередь нужнл присвоить свойства/методы родителя через super()
// при наследовании дочернему классу наследуется все свойства и методы, т.е. нельзя ограничить или запретить
// дочерний класс может переопределять свойства/методы


// Инкапсуляция - возможность решить, скрывать ли информацию от внешнего мира, а какую предоставить (#Name, _Name, модификации, private/public)

// реализуется с помощью приватных/публичных полей

// полезно в случаях:
// чтою никто и ничто не повлиял извне
// свойства/методы нужны для внутренних процессов
// нежелание раскрывать детали

// class User {
//     #name
//     static TYPE_ADMIN = 'admin'
//     static TYPE_REGULAR = 'regular'
//     static #MAX_INSTANCES = 2
//     static #instances = 0
//     constructor(name, type) {
//         User.#instances++;
//         if (User.#instances > User.#MAX_INSTANCES) {
//             console.log('Нельзя создать экземпляр класса');
//         }
//         this.#name = name;
//         this.type = type;
//     }
//      private getUserName() {
//         console.log(`Имя - ${this.#name}`);
//     }
//     static isUserInstance(obj) {
//         console.log(obj instanceof User);
//     }
// }


// Полиморфизм - множество форм

// одно действие - несколько реализаций

// class Animal {
//     constructor(type) {
//         this.type = type
//     }
//     makeSound() {
        
//     }
// }

// class Dog extends Animal{
//     constructor(type, name) {
//         super(type)
//         this.name = name;
//     }
//     makeSound() {
//         console.log('Я делаю гав-гав');
//     }
// }


// class Horse extends Animal{
//     constructor(type, name) {
//         super(type)
//         this.name = name;
//     }
//     makeSound() {
//         console.log('Я делаю иго-го');
//     }
// }

// const dog1 = new Dog('dog', 'bobik')
// const horse1 = new Horse('horse', 'rocket')
// dog1.makeSound();
// horse1.makeSound();


// Абстракция 

// описывает обобщенные параметры, которые присущи футболисту

// class Footballer {
//     constructor(name, club) {
//         this.name = name;
//         this.club = club;
//     }
//     shoot() {

//     }
//     pass() {

//     }

//     celebrateGoal() {

//     }
// }

// class Forward extends Footballer {
//     constructor(name, club) {
//         super(name, club)
//     }
//     shoot() {
//         console.log('Очень сильный удар!');
//     }
//     pass() {
//         console.log('Средненький пасс!');
//     }

//     celebrateGoal() {
//         console.log('Ура!!! Я забил гол!');
//     }
// }

// модель содержит только важные свойства с точки зрения приложения





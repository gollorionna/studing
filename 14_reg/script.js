// регулярные выражения (regular expressions)

// шаблон

// new RegExp() - конструктор
// // - литерал


// new RegExp(шаблон, флаг)

// /шаблон/флаг

// /hello/


// ^ - начало строка
// $ - конец строки
// \ - экранирование, указывет, что какой-то символ является частью строки
// . - один любой символ


// \w - соответствие буквам, цифрам и символам подчеркивания
// \W - наоборот от \w
// \d - соотвествие 0-9
// \D - соотв. всему, но не 0-9
// \s - поиск пробела
// \S - соответсвие всему, но не символу пробела

// + - повторение символа от 1 раз
// | - ИЛИ (29|33|25|44)
// {n} - n вхождений символа
// {n, m} - от n до m раз

// ФЛАГИ

// g - поиск всех совпадений
// i - регистронезависимый поиск

// test()
// exec()
// match()
// replace()
// search()
// split()




// test(строка для проверки) => true/false
// содержит ли строка шаблон(pattern)
// const str = 'world javascript ! hello';
// // const pattern = /^hello|bye/i;
// const pattern = /\!/i;

// console.log(pattern.test(str));



// exec() - поиск совпадений
// возвращает массив с первым совпадением и доп. информацией
// если совпадений нет => null
// const str = 'world';
// const pattern = /hello/;

// console.log(pattern.exec(str));




// match() - метод строки
// поиск всех совпадений 
// возвращает массив всех совпадений

// const str = 'The quick brown fox jumps over the lazy dog';

// const pattern = new RegExp('the', 'gi')

// const res = str.match(pattern);

// console.log(res);



// replace()
// заменяет совпадение в строке
// возвращает новую строку
// const str = 'The quick brown fox jumps over the lazy dog';

// const pattern = new RegExp('fox', 'i')

// const result = str.replace(pattern, 'cat');

// console.log(result);
// console.log(str);



// search() - метод строки
// ищет совпадение и возвращает индекс первого символа
// если совпадений нет, возвращает -1

// const str = 'The quick brown fox jumps over the lazy dog';

// const pattern = /test/;

// const res = str.search(pattern)

// console.log(res);




// split() - метод строки
// возвращает массив
// const str = 'The quick brown fox jumps over the lazy dog';

// const pattern = /\s/;

// const res = str.split(pattern)
// console.log(res);


// const str = 'Lorem ipsum dolor wellok sit amet consectetur adipisicing'

// const p1 = /\w+l{2}\w+/;

// console.log(p1.exec(str));


// const str = 'The qUick brown fox jumps over the lazy dog';
// const letters = ["a",'e','i','o','u','y']
// let newStr = '';
// for (let i = 0; i < str.length; i++){
//     if(!letters.includes(str[i].toLowerCase())){
//         newStr += str[i]
//     }
// }

// console.log(newStr); 


// const pattern = /[aeiouy]/gi;

// const newString = str.replace(pattern, '');
// console.log(newString);


// паттерны проектирования






// -------------------------Задачи

// ---------------------------  1 Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию, которая вернет массив только уникальных значений

// const arr = [1,1,1,4,4,5,1,6,6,74,74,74,3];
// const collection = new Set(arr)
// const UniqArray = Array.from(collection)

// function findUnique () {
//     return uniq = [...new Set(arr)];
// }


// const result = findUnique();
// console.log(result);




// -----------------------------  2 Создать класс Timer, инстанс которого запускает таймер и выводит в консоль 
// прошедшее время в секундах (1 2 3 4 5 и тд) инстанс должен обладать методами .start() .stop() которые запускают и 
// останавливают таймер а также методом .reset() который сбрасывает таймер на 0.
// С помощью Timer вы должны создать несколько таймеров и убедится в том, что они работают независимо друг от друга.
// Останавливайте таймер через некоторое время после запуска с помощью setTimeout()



// class Timer{
//     constructor() {
//         this.counter = 0;
//         this.id = null;
//     }
//     start() {
//         const intervalId = setInterval(( ) => {
//             this.counter += 1;
//             console.log(this.counter);
//         },1000)
//         this.id = intervalId;
//     }
//     stop() {
//         clearInterval(this.id)
//     }
//     reset() {
//         this.counter = 0;
//     }
// }

// const timer1 = new Timer();
// const timer2 = new Timer();
// console.log(timer1);
// timer1.start();


// // setTimeout(()=>{
// //     timer1.reset()
// // },3000)


// setTimeout(( ) => {
//     timer1.stop();
// },5000)

// setTimeout(() => {
//     timer1.start()
// }, 7000);

// setTimeout(() => {
//     timer1.reset()
// }, 10000);



// setTimeout(() => {
//     timer1.stop()
//     timer1.reset()
//     console.log(timer1);
// }, 17000);


// setTimeout(() => {
//     timer2.start();
// }, 13000);





// -----------------------------  3 Определите класс Person со следующими свойствами:

// Конструктор, который принимает 4 аргумента: firstName (по умолчанию «Джон», если не задано), lastName (по умолчанию 
// «Доу», если не задано), возраст (по умолчанию 0, если не задано) и пол (по умолчанию «Мужской», если не задано). Они 
// должны быть сохранены в this.firstName, this.lastName, this.age и this.gender соответственно.
// // Значения по умолчанию не определяйте в аргументах функции.
// // Метод sayFullName, который не принимает аргументов и возвращает полное имя (например, «Джон Доу»).



// class Person{
//     constructor(firstName, lastName, age, gender) {
//         this.firstName = firstName || 'Джон';
//         this.lastName = lastName || 'Доу';
//         this.age = age || 0;
//         this.gender = gender || 'male';
//     }
//     sayFullName() {
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
//     static greetExtraTerrestrials(raceName) {
//         console.log(`Добро пожаловать на планету Земля, ${raceName}`);
//     }
// }

// const person1 = new Person('Harry', 'Potter', '12', 'male');
// const person = new Person()
// person1.sayFullName()
// // person1.greetExtraTerrestrials()
// Person.greetExtraTerrestrials('венера')
// person.sayFullName()





// паттерны проектирования


// 3 группы:

// *порождающие - создание новых
// *структурные - создание иерархии 
// *поведенческие



// Singleton => порождающий (еще называют антипаттерн)
// он гарантирует, что у класса есть только 1 инстанс(экземпляр)


// class Sun{
//     static #instance = null

//     constructor() {

//     }

//     get sunInstance() {
//         if (Sun.#instance) {
//             return Sun.#instance;
//         } else {
//             Sun.#instance = new Sun();
//             return Sun.#instance;
//         }
//     }
// }

// const sun = Sun.instance;
// const sun2 = Sun.instance;

// console.log(sun);
// console.log(sun2);

// console.log(sun === sun2);



// factory(фабрика)

// class Transport {
//     constructor(type, width, height) {
//         this.type = type;
//         this.width = width;
//         this.height = height;
//     }
//     transport(to) {
//         console.log(`Доставка груза в ${to} по ${this.type}`);
//     }
// }


// class Logistic {
//     constructTransport(type) {
//         if (type === 'ground') {
//             return new Transport(type, 300, 200)
//         } else if (type === 'sea') {
//             return new Transport(type, 100, 50)
//         }
//     }
// }

// const logisticFactory = new Logistic();

// const fura = logisticFactory.constructTransport('ground');


// fura.transport('Dobrush')
// console.log(fura);


// const korablic = logisticFactory.constructTransport('sea');
// korablic.transport('Mogilev')




// class BMW {
//     constructor(model, speed, color) {
//         this.model = model;
//         this.speed = speed;
//         this.color = color;
//     }
// }


// class BMWFactory {
//     create(type) {
//         switch (type) {
//             case 'X3':
//                 return new BMW(type, 150, 'red')
//             case 'X5':
//                 return new BMW(type, 200, 'black')
//             case 'X6':
//                 return new BMW(type, 250, 'white')
//         }
//     } 
// }


// const factory = new BMWFactory();
// const x6 = factory.create('X6');
// const x3 = factory.create('X3')

// const x3Model = [];

// for(let i = 0; i<=100; i++){
//     x3Model.push(factory.create('X3'))
// }

// console.log(x6);
// console.log(x3);
// console.log(x3Model);




// абстрактная фабрика (Abstract factory)
// фабрика фабрик
// группировка связанных или похожих объектов



// class BMW_1_Series {

// }

// class BMW_M_Series{

// }

// function familyFactory() {
//     return new BMW_1_Series()
// }

// function sportFactory() {
//     return new BMW_M_Series()
// }

// function bmwProducer(type) {
//     switch (type) {
//         case 'family': return familyFactory;
//         case 'sport': return sportFactory;
//         default: return null;
//     }
// }

// const createFamily = bmwProducer('family');
// const familyCar = createFamily();


// const createSport = bmwProducer('sport');
// const sportCar = createSport();





// прокси(proxy)
// заместитель
// промежуточный модуль


class Person {
    constructor(name) {
        this.name = name;
    }
    walk(to) {
        console.log(`${this.name} walks to ${to}`);
    }
    sleep(hours) {
        console.log(`${this.name} sleeps ${hours} hours`);
    }
}

const p1 = new Person('John');

p1.walk('bar');
p1.walk('home');

class PersonProxy {
    constructor(person) {
        this.person = person;
    }
    walk(to) {
        if(to === 'bar'){
            console.log(`${this.person.name}, тебе нельзя идти в бар!`);
        }else{
            this.person.walk(to)
        }
    }
    sleep(hours) {
        console.log(`${this.name} sleeps ${hours} hours`);
    }
}

const hp1 = new PersonProxy(new Person('David'))
hp1.walk('bar')
hp1.walk('home')





















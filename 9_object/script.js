// объект => object
// {}
// ключ:значение,
// литерал объекта - {}
// функция в объекте называется метод
// получить значение через . или ключ ['Ключ']

// const car = {
//     year: 1990,
//     model: 'lada',
//     owner: 'dyadya Misha',
//     color: 'malinovayia',
//     bibip: function() {
//         console.log('bibip');
//     },
//     run() {
//         console.log('lada can run');
//     },
//     dtp: true,
//     prev_owners: ['Valerik', 'Dimon'],
//     engine: {
//         power: 80,
//         swap: false
//     }
// }

// console.log(car.model);
// console.log(typeof car);
// car.bibip();
// car.run();

// console.log(car['engine']);

// car.perekup = true;

// console.log(car);


// ---------------------  Задачи

// ---------------------  1

// const arr = [
//     {a: 2, b: 1},
//     {a: 5, b: 12},
//     {a: 95, b: 7}
// ]


// const result = arr.every((currentElement) => {
//     return currentElement.a > currentElement.b
// });

// result ? console.log('its valid') : console.log('its invalid');


// ----------------------  2

// const dog = {
//     theDogName: 'Bobik',
//     theDogAge: 15,
//     theDogBreed: 'Corgi',
//     theDogColor: 'Red',
//     makeSound() {
//         console.log('woof, woof!')
//     }
// }

// dog.makeSound();
// console.log(dog.theDogName);
// console.log(dog.theDogBreed);


// -----------------------   3

// let users = [
//     {name: 'Vasya', isOnline: false},
//     {name: 'Kolya', isOnline: true},
//     {name: 'Vika', isOnline: false},
//     {name: 'Olya', isOnline: true},
//     {name: 'Sasha', isOnline: true},
//     {name: 'Oleg', isOnline: false},
//     {name: 'Petya', isOnline: true},
//     {name: 'Denis', isOnline: false},
// ]


// const filteredUsers = users.filter((user) => {
//     return user.isOnline === true;
// })

// const names = filteredUsers.map((user) => {
//     return user.name;
// })

// console.log(names.join(', '));

// console.log(`Сейчас онлайн: ${names.join(', ')}`);



// const person = {
//     name: 'Vika',
//     age: 23,
//     address: {
//         country: 'Belarus',
//         city: 'Gomel',
//         phoneNumber: '375333964016'
//     },
//     stack: ['html', 'css', 'js', 'react'],
//     walk() {
//         setTimeout(() => {
//             console.log('Person can walk');
//         }, 1000)
//     }
// }


// person.walk()
// delete person.age;
// console.log(person.age);

// person.age = 111;

// console.log(person);

// console.log(person.address.country);
// console.log(person.address['country']);

// person.stack.forEach((elem) => {
//     console.log(elem);
// })



// Object.keys(object) => массив ключей объекта
// Object.values(object) => массив значений объекта

// console.log(Object.keys(person))
// console.log(Object.values(person))


// Object.entries(object) => массив с массивами пар
// console.log(Object.entries(person));




// ---------------------------------  ЦИКЛЫ

// for of => массивов, строк, коллекций

// for in => объекты


// for (const key in person) {
//     console.log(key);
//     console.log(person[key]);
// }



// создание объекта с помощью функции конструктора
// const person2 = new Object();

// person2.name = 'Vova'
// person2.age = 222
// person2.address = {}
// person2.address.country = 'Moldova'
// person2.address.city = 'Kish'
// person2.address.phoneNumber = '44567890212'
// person.stack = ['java', 'docker', 'php']
// person2.walk = function () {
//     setTimeout(() => {
//         console.log('Person can walk');
//     }, 1000);
// }

// console.log(person2);


// const person3 = {
//     name: 'Oleg',
//     age: 23,
//     address: {
//         country: 'Belarus',
//         city: 'Minsk',
//         phoneNumber: '375333934586'
//     },
//     stack: ['html', 'css', 'js', 'react'],
//     walk() {
//         setTimeout(() => {
//             console.log('Person can walk');
//         }, 1000)
//     }
// }

// const persons = [person, person2, person3]

// console.log(persons);



// const filteredMoldovane = persons.filter((person) => {
//         return person.address.country === "Moldova";
//     })

//     console.log(filteredMoldovane[0]);


//     const moldovanin = persons.find((person) => {
//         return person.address.country === "Moldova";
//     })

// console.log(moldovanin);






// объекты 2

// const student1 = {
//     name: 'John',
//     age: 22
// }

// const student2 = student1;

// const student3 = {
//     name: 'John'
// }
// console.log(student1 === student2); //// TRUE


// const objCopy = {
//     ...student1
// }

// const objCopy2 = {

// }

// for (const key in student1){
//     objCopy2[key] = student1[key]
// }

// console.log(objCopy2 === student1);



// object.assign(target, source1, source2, ...)=> позволяет скопировать свойства из множества объектов

// const student4 = Object.assign({}, student1);

// console.log(student4);



// как проверить наличие ключа

// console.log(student1.city); //// UNDEFINED


// prop in obj
// оператор in - проверяет наличие ключа в объекте или цепочке прототипов
// console.log('city' in student1);  ////FALSE
// console.log('name' in student1);    //// TRUE

// hasOwnProperty('prop') => проверяет наличие собственного свойства (неунаследованного/не в прототипе)
// не проверяет цепочку прототипов

// console.log(student1.hasOwnProperty('city'));
// console.log(student1.hasOwnProperty('name'));




// ? => опциональная цепочка => безопасный способ доступа к свойсвам
// останавливает вычисление и возвращает undefined если значение перед ?. => undefined или null

// const person = {
//     name: 'John',
//     age: 22,
//     address: {
//         country: 'Belarus',
//         city: 'Minsk',
//         phoneNumber: '375333934586',
//         // getInfo() {
//         //         console.log('get info');
//         //     },
//     },
//         stack: ['html', 'css', 'js', 'react'],
            
//         walk() {
//                 console.log('Person can walk');
//     },
// }

// console.log(person.address.city);
// console.log(person?.address?.street);



// console.log(person.address.country);



// object.keys(object) => [] ключей
// object.values(object) => [] значений
// object.entries(object) => [] ключ и значение

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));



// this - контекст вызова (текущий контекст выполнения кода)
// методу в объекте нужен доступ к информации внутри объекта
// чаще всего this это object
// this => это объект перед точкой
// У стрелочной функции нет своего this, берет из внешней функции
// К стрелочной функции нельзя привязать контекст 
// в глобальном контексте указывает на window



// const person = {
//     firstName: 'David',
//     lastName: 'Travolta',
//     age: 40,
//     getFullName() {
//         console.log(`Hello ${this.firstName} ${this.lastName}`);
//     }
// }

// setTimeout(person.getFullName(), 1000);

// const person2 = {
//     firstName: 'John',
//     lastName: 'Goldof',
//     age: 79,
    // getFullName() {
    //     console.log(`Hello ${this.firstName} ${this.lastName}`);
    // }
// }
// const person3 = {
//     firstName: 'Peter',
//     lastName: 'Mexico',
//     age: 23,
    // getFullName() {
    //     console.log(`Hello ${this.firstName} ${this.lastName}`);
    // }
// }

// person.getFullName()

// console.log(this);



// потеря контекста
// this устанавливается во время вызова

// const test = person.getFullName;


// привязка контекста
// методы функций
// call(), apply(), bind()  => можно явно указать this
// call(), apply() => привязывают контекст и возвращает функцию
// call() => аргументы передаются через запятую
// apply() => аргументы передаются через массив
// bind() => привязывает контекст и возвращает новую функцию с привязанным контекстом, ИЗМЕНИТЬ УЖЕ ПРИВЯЗАННЫЙ КОНТЕКСТ НЕЛЬЗЯ!

// function getFullName(a, b) {
//     console.log(`Hello ${this.firstName} ${this.lastName}`);
//     console.log(a + b);
// }

// getFullName.apply(person, [1, 3]);
// getFullName.call(person2, 45, 5);
// getFullName.bind(person3, 10, 20)();





// ЗАДАЧИ

// --------------------- 1 Написать функцию, которая проверяет является ли переданная строка палиндромом

// function isThisPalindrom(str){
//     if(str === str.split('').reverse().join('')){
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// isThisPalindrom('дед');
// isThisPalindrom('дедуля');


// ------------------------  2

// const person1 = {
//     name: 'John',
//     age: 23,
//     isProgrammer: true,
//     tech: ['HTML', 'CSS', 'JS']
// };

// const person2 = {
//     name: 'David',
//     age: 34,
//     isProgrammer: false,
//     tech: ['DIG', 'BUILD', 'RUN']
// };

// const person3 = {
//     name: 'Peter',
//     age: 41,
//     isProgrammer: false,
//     tech: ['JUMP', 'SPEAK', 'READ']
// };

// const person4 = {
//     name: 'Gregory',
//     age: 54,
//     isProgrammer: true,
//     tech: ['JAVA', 'NGINX', 'PYTHON']
// };

// const persons = [person1, person2, person3, person4];

// const getCounter = () => {
//     let time = 0;
//     return () => {
//         time += 1000
//         return time;
//     }
// }

// const nextTime = getCounter();

// persons.forEach(({tech, name}) => {
//     person.tech.forEach((tech) => {
//         setTimeout(() => {
//             console.log(`${name} can ${tech}`);
//         }, nextTime());
//     })
// })




// -------------------------  3
// const arr = [
//     { a: 2, b: 1 },
//     { a: 5, b: 12 },
//     { a: 95, b: 7 }
// ];

// const arr2 = arr.map((obj) => {
//     return {
//         a: obj.a, 
//         b: obj.b ** 2
//     }
// });

// console.log(arr);
// console.log(arr2);



// const arr2 = [];

// arr.forEach((value) => {
//     return arr.value
// })


// console.log(arr2);



// объекты продолжение ---------------------------- ч.3

// const user = {
//     userName: 'Oleg',
//     age: 71
// }


// 3 свойства конфигурации (флаги, дескрипторы)
// значение дескрипторов => true/false

// 1) writable - доступно ли свойство для перезаписи, если true, то можно менять
// 2) enumerable - видимо ли свойство, например в for in, Object.keys()
// 3) configurable - переконфигурация, нельзя использовать delete для удаления, и др.



// при создании объекта 'простым способом const obj = {}', то все дескрипторы будут со значением true


// для изменения: Object.defineProperty(), Object.defineProperties()
// для чтения: Object.getOwnPropertyDescriptor(), Object.getOwnPropertyDescriptors()


// writable: true => это дескриптор

// const laptop = {
//     screen: '18 inch'
// }

// Object.defineProperty(obj, key, settings + value)

// Object.defineProperty(laptop, 'os', {
//     value: 'Windows',
//     writable: false,
//     enumerable: true,
//     configurable: true
// })

// если не указать дескрипторы в defineProperty - они будут false

// const descriptorsLaptop = Object.getOwnPropertyDescriptors(laptop);
// const descriptorUser = Object.getOwnPropertyDescriptor(user, 'userName')

// console.log(descriptorsLaptop);
// laptop.os = 'MacOS';
// console.log(laptop);

// console.log(descriptorUser);


// defineProperties(obj with which you working, obj with keys and descriptors)


// const flower = {
//     name: 'rose',
//     color: 'red'
// }

// Object.defineProperties(flower, {
//     name: {writable: false, configurable: false},
//     color: {enumerable: false}
// }
// );

// нельзя изменить

// Object.defineProperty(flower, 'name', {
//     writable: false
// })

// const descriptorsFlower = Object.getOwnPropertyDescriptors(flower);

// console.log(descriptorsFlower);

// for(const key in flower) {
//     console.log(key);
// }

// console.log(Object.keys(flower));
// console.log(Object.values(flower));
// console.log(Object.entries(flower));


// console.log(flower.color);



// геттер, сеттер  =>  дескрипторы доступа
// с их помощью можно определить работу свойства с помощью функции для чтения и записи свойства

// геттер - чтение get
// сеттер - запись set

// геттер - для получения значения свойства
// этот метод будет вызываться при получении значения
// obj.city => геттер
// "Grodno" => сеттер

// сеттер - для установки значения свойства
// принимает аргумент - новое значение

// _name => нижнее подчеркивание означает, что это значение нельзя явно менять

// const cat = {
//     _hiddenName: 'Кот',
//     _hiddenAge: 22,
//     get name() {
//         return this._hiddenName;
//     },
//     set name(value) {
//         this._hiddenName = value
//     },
//     get age() {
//         return this._hiddenAge;
//     },
//     set age(value) {
//         this._hiddenAge = value
//     }
// };

// Object.defineProperty(cat, 'name', {
//     get: function() {
//         return this._hiddenName;
//     },
//     set: function(value) {
//         this._hiddenName = value
//     }
// });

// cat.name = 'Курица';

// console.log(cat.name);
// console.log(cat);


// Этими методами можно защитить объект от вмешательства извне.
// Не влияют на вложенный объект
// Object.seal(obj) => он запечатывает, нельзя удалить и добавить, можно только менять, нельзя изменить прототип
// Object.freeze(obj) => он запрещает все, нельзя ни удалить, ни добавить
// Object.preventExtensions(obj) => он запрещает расширение, т.е. нельзя добавлять новые поля, но можно удалить


// Этими методами можно проверить защищен ли объект от внешних вмешательств
// Object.isSealed(obj) => проверяет, запечатан ли объект
// Object.isFrozen(obj) => проверяет, заморожен ли объект
// Object.isExtensible(obj) => проверяет, расширяем ли объект

// Все 3 запрещают добавлять

// const user = {
//     name: 'Gorge'
// }

// const user2 = {
//     name: 'Gena',
//     age: 32,
//     blood: {
//         dnk: '+'
//     }
// }

// Object.seal(user2);


// user2.city = 'Gomel';
// delete user2.age;
// user2.name = 'David'

// console.log(Object.isSealed(user2));
// console.log(Object.isSealed(user));
// console.log(user2);

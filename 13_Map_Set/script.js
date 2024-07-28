// map, set

// Map - коллекция для хранения чего-то, где ключем может быть что угодно


// коллекция 
// [ключ, значение]
// ключ - любой

// const testMap = new Map();

// console.log(testMap);

// индексов нет, по индексу получить элемент нельзя

// set(ключ, значение) - добавить
// get(ключ) - получить => если ключа нет = undefined
// has(ключ) - проверить наличие => true/false
// values() - итератор значений
// keys() - итератор ключей
// entries() - итератор пар
// delete(ключ) - удалить
// clear() - очистить
// forEach(fn) - перебор ключей и значений

// size - узнать кол-во значений

// const func = () => {
//     console.log('function');
// }


// testMap.set('1','значение по ключу - строка 1')
// testMap.set(1,'значение по ключу - число 1')
// testMap.set(false,'значение по ключу - false')
// testMap.set(func, 'ключ - функция')
// testMap.set(NaN, 'ключ - Nan')
// testMap.set('()', func)

// console.log(testMap.get(func));



// console.log(testMap);
// console.log(testMap.get(1));
// testMap.delete("1")
// console.log(testMap.get("1")); //undefined

// console.log(testMap.has(1)); // true
// console.log(testMap.has("1")); // false

// testMap.clear()
// console.log(testMap.size)

// testMap.forEach((value, key) => {
//     console.log(`${key} - ${value}`);
// })


// for (const [key, value] of testMap) {
//     console.log(`${key} - ${value}`);
// }


// const myMap = new Map([['js', 'JavaScript'], ['py', 'Python']])
// console.log(myMap.size);





// Set

// Это коллекция уникальных значений

// Одно и то же значение нельзя добавить в коллекцию set более 1 раза

// неиндексированнная коллекция


// add(значение) - добавить
// has(значение) - проверить наличие
// clear() - очистить
// delete(значение) - удалить
// forEach(fn) - перебор

// size 

// const obj = {
//     name: 'John'
// }

// const obj2 = {
//     name: 'John'
// }
// const uniqNumbers = new Set()

// uniqNumbers.add(obj)
// uniqNumbers.add(obj2)
// uniqNumbers.add(69)
// uniqNumbers.add('69')
// uniqNumbers.add(69)
// uniqNumbers.add(false)


// // uniqNumbers.delete(69)
// // // uniqNumbers.clear()
// // console.log(uniqNumbers.has(69));
// // console.log(uniqNumbers);
// // console.log(uniqNumbers.size);

// uniqNumbers.forEach((value) => {
//     console.log(value);
// })


// for (const value of uniqNumbers){
//     console.log(value);
// }

// const numbers = [1, 2, 3, 5, 6, 2, 2, 1, 6, 4]

// const uniq = [...new Set(numbers)];

// console.log(uniq);


// ------------------------------------  1 задача

// const student = {
//     name: 'Maxim',
//     programmingLanguage: 'JavaScript',
// }


// function handleObject(obj,key,action) {
    // if(action === 'get') {
    //     return obj[key];
    // } else if(action === 'add') {
    //     obj[key] = '';
    //     return obj
    // } else if(action === 'delete'){
    //     delete obj[key];
    //     return obj;
    // } else {
    //     return obj;
    // }

// -------------- решение с помощью switch
//     switch (action) {
//         case 'get':
//             return obj[key];
//         case 'add':
//             obj[key] = '';
//             return obj
//         case 'delete':
//             delete obj[key];
//             return obj;
//         default:
//             return obj
//     }
// }


    
// const result = handleObject(student, 'programming', 'add');
// console.log('result', result);


// ------------------------------------------  2 задача

// const coffees = ['Latte', 'Cappuccino', 'Americano'];

// const coffeeName = prompt('Поиск кофе по названию:').trim().toLowerCase();

// const coffeeIndex = coffees.findIndex(coffee => coffee.toLowerCase() === coffeeName) 

// console.log(coffeeIndex);

// const coffee = coffees[coffeeIndex];

// if (coffee) {
//     console.log(`Держите ваш любимый ${coffee}. Он ${coffeeIndex + 1} по популярности в нашей кофейне.`);
// } else {
//     console.log('К сожалению, такого вида кофе нет в наличии');
// }



// --------------------------------------  3 задача

// const coffees = ['Latte', 'Cappuccino', 'Americano'];
// const prices = [1.5, 1, 2];

// const newPrices = prices.map((price) => {
//     return price + 0.5;
// })

// coffees.forEach((coffee, ind) => {
//     console.log(`Кофе ${coffee} сейчас стоит ${newPrices[ind]} евро`);
// })


// -------------------------------------  4 задача

// const clientsEstimations = [];

// function askClientToGiveEstimation(arr) {
//     const askClient = +prompt('Как вы оцениваете нашу кофейню от 1 до 10?').trim();
//     if(askClient >= 1 && askClient <= 10){
//         clientsEstimations.push(askClient)
//     }
// }

// for(let i = 0; i < 5; i++){
//     askClientToGiveEstimation()
// }


// let goodEstimations = clientsEstimations.filter((estimation) => {
//     return estimation > 5;
// })

// let notGoodEstimations = clientsEstimations.filter((estimation) => {
//     return estimation <= 5;
// })

// console.log(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`);

// class Device {
//     constructor() {
//         this.isSwitchedOn = false
//     }
//     switch() {
//         this.isSwitchedOn = !this.isSwitchedOn;
//     }
// }


// class Smartphone extends Device {
//     constructor(model, price) {
//         super();
//         this.model = model;
//         this.price = price;
//     }
//     #battery = 100;
//     callSmbd(name) {
//         if(this.isSwitchedOn && this.#battery >= 10) {
//             this.#battery -= 10;
//             if(this.#battery <= 0) {
//                 this.isSwitchedOn = false;
//                 this.#battery = 0;
//             } 
//             console.log(`Вы звоните ${name}'у`);
//         }else {
//             console.log('Ваше устройство выключено, вы не можете звонить');
//         }
        
//     }
//     charge() {
//         setTimeout(() => {
//         this.#battery = 100;
//         this.isSwitchedOn = true}, 1000)
//     }
// }

// const iphone = new Smartphone('Iphone 14 ProMax', 4000);

// console.log(iphone);

// iphone.switch()
// iphone.callSmbd('David')
// iphone.callSmbd('John')

// console.log(iphone);

// iphone.callSmbd('David')
// iphone.callSmbd('John')
// iphone.callSmbd('John')
// iphone.callSmbd('John')
// iphone.callSmbd('John')
// iphone.callSmbd('John')
// iphone.callSmbd('John')
// iphone.callSmbd('John')
// iphone.callSmbd('John')

// console.log(iphone);

// iphone.callSmbd('John')

// iphone.charge()
// console.log(iphone);

// iphone.callSmbd('John')

// iphone.callSmbd('David')
// iphone.callSmbd('David')
// iphone.callSmbd('David')
// iphone.callSmbd('David')
// iphone.callSmbd('David')
// iphone.callSmbd('David')
// iphone.callSmbd('David')
// iphone.callSmbd('David')
// iphone.callSmbd('David')
// iphone.callSmbd('David')
// iphone.callSmbd('David')

// iphone.charge();

// setTimeout(() => {
//     iphone.callSmbd('Kate')
// }, 1200);





// function Device() {
//     this.isSwitchedOn = false;
// }

// Device.prototype.switch = function() {
//     this.isSwitchedOn = !this.isSwitchedOn;}


// function Smartphone(model, price) {
//     Device.call(this)
//     this.model = model;
//     this.price = price;
// }

// Smartphone.prototype = Object.create(Device.prototype)
// Smartphone.prototype.constructor = Smartphone;

// Smartphone.prototype.callsmbd = function(name) {
//     if(this.isSwitchedOn) {
//                 console.log(`Вы звоните ${name}'у`);
//         }else {
//                 console.log('Ваше устройство выключено, вы не можете звонить');
//     }
// }

// const xiaomi = new Smartphone('Redmi note 14', 400);
// console.log(xiaomi.switch());

// xiaomi.callsmbd('David')

// xiaomi.switch()

// xiaomi.callsmbd('Vika')










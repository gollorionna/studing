// date 

// UTC => гринвич
// ТЕКУЩИЙ ЧАСОВОЙ ПОЯС => таймзона, timezone


// const date = new Date();

// console.log(date);

// // ТЕКУЩАЯ ДАТА - toLocaleDateString()
// console.log(date.toLocaleDateString().replaceAll('/', '.'));

// // ТЕКУЩЕЕ ВРЕМЯ - toLocalTimeString
// console.log(date.toLocaleTimeString());
// console.log(date.toLocaleTimeString().slice(0, -3));

// // ТЕКУЩЕЕ ВРЕМЯ И ДАТА
// console.log(date.toLocaleString());


// отдельные компоненты даты и времени



// //ВОЗВРАЩАЕТ ГОД
// console.log(date.getFullYear());


// // ВОЗВРАЩАЕТ МЕСЯЦ
// console.log(date.getMonth()); // месяц с 0 до 11

// // ВОЗВРАЩАЕТ ДЕНЬ
// console.log(date.getDate()); // c 1 до 31

// // ВОЗВРАЩАЕТ ТЕКУЩИЙ ДЕНЬ НЕДЕЛИ
// console.log(date.getDay()); // порядковый номер дня недели с 0 до 6

// // ВОЗВРАЩАЕТ ЧАСЫ
// console.log(date.getHours()); // от 0 до 23
// console.log(date.getMinutes()); // for 0 to 59
// console.log(date.getSeconds()); // for 0 to 59
// console.log(date.getMilliseconds()); //for 0 to 999

// // ВОЗВРАЩАЕТ ВРЕМЯ ПО ГРИНВИЧУ
// console.log(date.getUTCHours());





// МЕТОДЫ, НЕ ПРИВЯЗАННЫЕ К ЧАСОВОЙ ЗОНЕ(ПОЯСУ)

// // ЗНАЧЕНИЕ В МС, ПРОШЕДШЕЕ С 1 ЯНВАРЯ 1970г.
// console.log(date.getTime());

// // СМЕЩЕНИЕ ЧАСОВОЙ ЗОНЫ ПО ГРИНВИЧУ
// console.log(date.getTimezoneOffset());



// ----------------------------------------------------------

// Date(year, month, date, hours, minutes, seconds, milliseconds)
// const date = new Date(2000, 0, 10);
// const date2 = new Date(2000, 1, 15);

// // console.log(date.getDate());
// // console.log(date2.getDate());


// const diff = date2.getTime() - date.getTime();

// const convertMstoDays = 1000 * 60 * 60 * 24;

// console.log(diff / convertMstoDays);


// ---------------------------------------------------------

// const date = new Date();

// date.setFullYear(2026); // .setFullYear(year, month, day)
// date.setMonth(10);  // .setMonth(month, day)

// console.log(date);

// ---------------------------------------------------------

// const test = new Date().getTime();

// const test2 = Date.now();

// console.log(test);
// console.log(test2);


// const start = Date.now();

// for(let i = 0; i < 10; i++) {

// }

// const end = Date.now();

// const diff = end - start;

// console.log(diff);




// const date = new Date();

// const options = {
//     year: 'numeric',
//     weekday: 'long',
//     month: 'long'
// }


// console.log(date.toLocaleDateString('de-DE', options));
// console.log(date.toLocaleDateString('ko-KR', options));
// console.log(date.toLocaleDateString('th-TH', options), date.getTime());
// console.log(date.toLocaleDateString('ja-JP', options), date.getTime());



// ---------------------------------- ЗАДАЧИ

// ------- 1  (Создать случайный массив чисел длиной 10. На основе оригинального массива создать массив чисел которые являются четными и делятся на 4)



// function getRandomArr() {
//     const arr = [];
//     for(let i = 0; i < 10; i++) {
//         const randomNumber = Math.floor(Math.random() * 100);
//         arr.push(randomNumber);
//     }
//     return arr
// }

// const numbers = getRandomArr();

// const filteredNumbers = numbers.filter((elem) => {
//     return elem % 4 === 0;
// })
// console.log(numbers);
// console.log(filteredNumbers);


// --------- 2 (Создать массив имен длиной больше 5, выяснить есть ли в массиве "Семен" (без метода includes))

// const arr = ['Matvey', 'Vika', 'Oleg', 'Semen', 'Olya'];

// const result = arr.some((currentElement) => {
//     return currentElement.toLowerCase() === 'Semen'.toLowerCase();
// })
// console.log(arr);
// console.log(result);

// ----------  3 (Дан массив случайных чисел, просуммировать только четные числа этого массива)

// function getRandomArr() {
//     const arr = [];
//     for(let i = 0; i < 10; i++) {
//         const randomNumber = Math.floor(Math.random() * 100);
//         arr.push(randomNumber);
//     }
//     return arr
// }

// const numbers = getRandomArr();

// const result = numbers.reduce((sum, number) => {
//     // if (number % 2 === 0) {
//     //     return sum + number
//     // } else {
//     //     return sum
//     // }
//     return number % 2 === 0 ? sum + number : sum;
// }, 0)
// console.log(numbers);
// console.log(result);


// -----------  4 (Спросить у пользователя 5 чисел, ПОСЛЕ ввода всех чисел, проверить все ли из них преобразуемы в число (могут быть числами))

// let arr = [];

// for(let i = 1; i <= 5; i++) {
//     let num = prompt(`Введите число ${i}`);
//     arr.push(num);
// }
// console.log(arr);
// let result = arr.every((currentElement) => {
//     return currentElement !== '' && currentElement !== null && !isNaN(currentElement)
// })

// console.log(result);


// ------------- 5 (Сделайте функцию, которая параметром будет принимать массив с числами и возвращать максимальное и минимальное значение из этого массива в виде следующего объекта:{max: 9, min: 1,})

// const arr = [2, 3, 4, 5, 7, 8, 9]
// function maxAndMinArray(arr) {
//     const max = Math.max(...arr)
//     const min = Math.min(...arr)

//     return {
//         max,
//         min
//     }
// }

// const result = maxAndMinArray(arr);
// console.log(result);


// ---------------  6 (Напишите функцию isEmptyObj(), которая проверяет пуст объект или нет. Если объект пуст, функция вернет true, если в объекте есть хотя бы одно поле, функция вернет false.)

// const obj = {
//     test: 2
// }

// function isEmptyObj(obj) {
//     const keys = Object.keys(obj);
//     if (!keys.length){
//         return true
//     } else {
//         return false;
//     }
// }

// const result = isEmptyObj(obj);
// console.log(result);


// --------------  7

// const computers = [
//     {
//         name: 'MacBook Pro 13',
//         price: 4000
//     },
//     {
//         name: 'MacBook Pro 14',
//         price: 5000
//     },
//     {
//         name: 'MacBook Pro 16',
//         price: 7000
//     },
// ];

// const macbook = computers.find(({name}) => {
//     return name === 'MacBook Pro 16'
// })

// console.log(macbook);


// --------- 8


// function helloName(name) {
//     // if (name.length < 5) {
//     //     return `Hello, ${name}`
//     // } else {
//     //     return `Hi, ${name}`
//     // }
//     // return name.length < 5 ? `Hello, ${name}` : `Hi, ${name}`;
// }

// const greetings = helloName('Vika');

// console.log(greetings);


// const sayHello = name => name.length < 5 ? `Hello, ${name}` : `Hi, ${name}`

// console.log(sayHello('Vika'));
// console.log(sayHello('Viktoria'));


// ---------------  9

// const arr = [10, 4, 100, -5, 54, 2];

// const result = arr.reduce((sum, elem) => {
//     return sum + elem**3;
// }, 0)
// console.log(result);

// let sum = 0;

// arr.forEach((number) => {
//     sum += number**3;
// }) 

// console.log(sum);



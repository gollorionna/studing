// функции

// function declaration  => простое объявление функции
// function expression => функциональное выражение
// arrow function => стрелочная функция
// IIFE - УСТАРЕВШАЯ ФУНКЦИЯ 



// function declaration
// function sayHello() {
//     console.log('Привет');
// }

// sayHello();


// function expression
// анонимная функция

// const sayHello = function() {
//     console.log('Выражение');
// }


// sayHello();


// arrow function
// () => {}

// const sayHello = () => {
//     console.log('стрелочная функция');
// }

// sayHello();

// let a = 10;
// let b = 5;
// если аргумент не передан, то undefined
// функция принимает - параметры
// function getSum(first = 0, second = 0) {
//     console.log(first + second);
// }
// first = 0 - значение по умолчанию

// функции передаем при вызове - аргументы
// getSum(a, b);

// console.dir(getSum); // функция это object



// let a = 10;
// let b = 5;
// function getSum(a, b) {
//     a = 15;
//     console.log(a + b);
// }

// getSum(a, b);
// console.log('a:', a);


// области видимости - scope
// 1) глобальная
// 2) функциональная
// 3) блочная

// function test() {

// }

// let c = 22;
//  var - нет блочной области видимости
// if (true) {
    // let c = 44;
    // let test = 33;
    // const str = 'test';
    // console.log(num);
    // var num = 20;
    // console.log(c);
// }


// console.log(test);
// console.log(num);



// поднятие => hoistiong - поднятие в начало своей области видимости


// const names = ['John', 'Max', 'David', 'Gleb' ];
// // arguments - псевдомассив аргументов функции
// function changeNames(test, a) {
//     console.log(arguments.length);
//     test[0] = 'Kate';
// }

// changeNames(names, 2);


// console.log(names);



// return
// undefined - если нет return
// let num1 = 11;
// let num2 = 7;

// function test() {
//     console.log('test');
// }
// // first-class object
// // first-class citizen
// function sum(a, b, func) {
//     func();
//     console.log(a + b);
//     return a + b;
// }

// const result = sum(num1, num2, test);
// console.log(result);


// const arr = [1, 2, 3]

// const res = arr.map(() => {

// })

// особенности стрелочных функций
// можно опустить (), если функция принимает один аргумент
// можно опустить {}, если функция сразу что-то возвращает
// нет arguments
// нет своего this

// const arrowSum = (a, b) => {
//     console.log(a + b);
//     return a + b;
// }

// const arrowSum2 = function(a, b) {
//     console.log(a + b);
//     return a + b;
// }

// arrowSum(num1, num2);
// arrowSum2(num1, num2);


// задачи 

// ----------------------------  1 Дан массив ['John', 'Dan', 'David', 'Lambert', 'Eddie', 'Janett', 'Mike'] Переставить 'Janett', 'Mike' в начало массива


// const arr = ['John', 'Dan', 'David', 'Lambert', 'Eddie', 'Janett', 'Mike'];

// arr.unshift(arr.pop());
// arr.unshift(arr.pop());

// console.log(arr);


// const arr = ['John', 'Dan', 'David', 'Lambert', 'Eddie', 'Janett', 'Mike'];
// const arrSlice = arr.slice(arr.indexOf('Janett'));
// arr.pop();
// arr.pop();

// console.log(arr);
// console.log(arrSlice.concat(arr));


// const arrSlice = arr.slice(arr.indexOf('Janett'));

// arr.splice(0, 0, 'Janett', 'Mike');
// arr.splice(arr.lastIndexOf('Janett'), 1);
// arr.splice(arr.lastIndexOf('Mike'), 1);

// console.log(arr);




// const startIndex = arr.indexOf('Janett');
// const arrSplice = arr.splice(startIndex, 2);

// console.log(arrSplice.concat(arr));




// ----------------------------2  Заменить 'Dan', 'David' на 'Bob', 'Oliver'

// const arr = ['John', 'Dan', 'David', 'Lambert', 'Eddie', 'Janett', 'Mike'];
// arr.fill('Bob', 1, 2);
// arr.fill('Oliver', 2, 3);
// console.log(arr);



// arr.splice(arr.indexOf('Dan'), 2, 'Bob', 'Oliver');
// console.log(arr);

// ----------------------------3 Перевернуть массив и заменить первые 3 элемента на 'Robert'


// arr.reverse().fill('Robert', 0, 3);
// arr.reverse().splice(0, 3, 'Robert', 'Robert', 'Robert');
// console.log(arr);







// ----------------------------  4  Дан второй массив ['Bob', 'Oliver', 'Robert', 'Daniel']. Скопировать все эелемнты начиная с 'Oliver' и вставить их в конец первого массива


// const arr2 = ['Bob', 'Oliver', 'Robert', 'Daniel'];

// const arrSlice = arr2.slice(arr2.indexOf('Oliver'));

// console.log(arr.concat(arrSlice));



// ----------------------------- 5  Из второго массива скопировать 'Robert' и вставить меджу 'David' и 'Lambert'

// const arr2 = ['Bob', 'Oliver', 'Robert', 'Daniel'];
// const robertIndex = arr2.indexOf('Robert');
// const davidIndex = arr.indexOf('David');

// // const arrSlice = arr2.slice(arr2.indexOf('Robert'), arr2.indexOf('Robert') + 1);

// const elem = arr2[robertIndex];

// arr.splice(davidIndex + 1, 0, elem);

// console.log(arr);
// console.log(elem);




// ----------------------------  6 Написать функцию-валидатор числа, которая принимает сроку и возвращает true, если эта строка может быть числом, false - если не может


// const info = prompt('Введите инфу');

// function sayTrueOrFalse(someString) {
//     const isNumber = !!Number(someString);
//     if (isNumber) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(sayTrueOrFalse(info));


// const test = someString => !!Number(someString) ? true : false;

// console.log(test(info));

// ----------------------------  7 Написать функцию, которая вычисляет среднее арифметическое за год (нужно передавать оценки за 4 четверти)

// const num1 = +prompt('Введите оценку за 1 четверть');
// const num2 = +prompt('Введите оценку за 2 четверть');
// const num3 = +prompt('Введите оценку за 3 четверть');
// const num4 = +prompt('Введите оценку за 4 четверть');

// function arithmeticNumber (num1 = 0, num2 = 0, num3 = 0, num4 = 0) {
//     const sum = num1 + num2 + num3 + num4;
//     console.log(Math.round(sum/arguments.length));
// }

// arithmeticNumber(num1, num2, num3, num4);


// -----------------------------  8 Написать функцию, которая вычисляет процент побед. Функция принимает количество побед и поражений, и возвращает процент

// function getWinsPercent (wins, losses) {
//     const games = wins + losses;
//     const winsPersent = ((wins / games ) * 100).toFixed(2);
//     const lossesPersent = ((losses / games) * 100).toFixed(2);
//     const message = `Процент побед - ${winsPersent}%, процент поражений - ${lossesPersent}%`
//     console.log(message);
//     return message;
// }

// getWinsPercent(20, 80);
// getWinsPercent(15, 11);
// getWinsPercent(23, 56);

//  -------------------------  9

// const getSumOfNumbers = (number, type = 'odd') => {
//     let sum = 0;
//     for (let i = 0; i <= number; i++) {
//         const isEven = i % 2 === 0;
//         const isOdd = !isEven;
//         if (type === '') {
//             sum += i;
//         } else if (isEven && type === 'even') {
//             sum += i;
//         } else if (isOdd && type === 'odd') {
//             sum += i;
//         }
//     }
//     console.log(sum);
//     return sum;
// }

// getSumOfNumbers(100, 'even');
// getSumOfNumbers(100, 'odd');
// getSumOfNumbers(100, '');






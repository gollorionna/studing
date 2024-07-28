// функции

// области видимости:  => scope
// глобальная
// функциональная
// блочная

// hoisting =>  поднятие

// лексическая область
// набор правил движка где и как найти переменную

// скрытый объект, в нем есть переменные этой функции и ссылки на внешнее окружение и др. информация

// function func() {
//     var a = 5;
//     let b = 10;
//     const c = 15;

//     function func2() {
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     func2();
// }

// func();

// замыкания - closures

// инкапсуляция => защита данных
// для запоминания параметров
// function sayHello() {
//     const message = 'Добрый вечер!';
//     const test = 22;
//     return function(name) {
//         console.log(test);
//         console.log(`${message} ${name}`);
//     }
// }

// const result = sayHello();
// console.dir(result);

// result('John');

// function counter() {
//     let count = 0;
//     return function() {
//         return ++count;
//     }
// }

// const useCounter = counter();
// const useCounter2 = counter();

// console.log(useCounter());
// console.log(useCounter());
// console.log(useCounter());
// console.log(useCounter());

// console.log(useCounter2());
// console.log(useCounter2());

// pure function => чистая функция
// не вызывает побочных эффектов (side effects)
// это все никак не влияет на окружающее состояние
// при передаче одинаковых параметров всегда выдает одинаковый результат

// function pure(a, b) {
//     return (a + b) / b;
// }

// console.log(pure(2, 10));
// console.log(pure(2, 10));
// console.log(pure(2, 10));
// console.log(pure(2, 10));

// function impure(a, b) {
//     return (a + b) / Math.random();
// }

// console.log(impure(2, 10));
// console.log(impure(2, 10));
// console.log(impure(2, 10));
// console.log(impure(2, 10));

// рекурсия  => повторение процесса внутри самого себя
// метод создания функции, которая вызывает саму себя, пока не будет достигнут результат

// условие заверешния => предохранитель от плохих данных
// базовый сценарий  => цель

// рекурсия => повторный вызов самой функции с измененным аргументом

// любая задача, которую можно решить рекурсией, также решается циклом
// структур данных с глубокой вложенностью или неизвестной глубиной

// let days = 0;

// function daysTest() {
//       if(days === 365) {
//         return;  // базовый сценарий
//     }

//     if(days < 0) {
//         return; // условие завершения
//     }
//     days++;
//     console.log(days);
//     daysTest();  // рекурсия
// }

// daysTest();

// задача 1

// function test1() {
//     let status = true;
//     return function() {
//         status = !status
//         console.log(status);
//         return status
//     }
// }

// const result = test1();
// result();
// result();
// result();
// result();
// result();

// задача 2

// function arr(length) {
//     let result = [];
//     for(let i = 0; i<=length; i++) {
//         result.push(Math.floor(Math.random() * 10));
//     }
//     console.log(result);
// }

// arr(15);

// задача 3

// function argument() {
//     console.log(`Количество аргументов: ${arguments.length}`);
// }

// argument(3, 4, 5, 'test', 2423, true)

// задача 4

// function num(n, m) {
//     console.log(Math.pow(n, m));
// }

// num(2, 2);

// задача 5

// function test(name) {
//     const arr = name.split(' ');
//     const index = name.indexOf(' ') + 1
//     console.log(`${arr[0][0]}.${arr[1][0]}.`);
//     console.log(`${name[0]}.${name[index]}.`);
// }

// test('Лев Толстой')

// Задача 6

// function sum(num) {
//     let sum = 0;
//     for(let i = 1; i <=num; i++) {
//         sum += i;
//     }
//     console.log(sum);
// }

// sum(5)

// function sum2(num) {
//     if (num === 0) {
//         return 0;
//     }
//     if (num < 0) {
//         return 'ошибка'
//     }

//     return num + sum2(num - 1)
// }

// const result = sum2(6);

// console.log(result);

// ------------- задача

// let numbers = [1, 2, 3, 4, 5, 6];

// function sumArray(arr, sum = 0) {
//     if (arr.length === 0) {
//         return sum
//     } else {
//         return sumArray(arr, sum + arr.pop())
//     }
// }

// console.log(sumArray(numbers));

// Currying => карирование/каринг

// преобразование функции с множеством аргументов
// в набор вложенных функций с 1 аргументом
// получается каррированная функция

// function sum(x, y, z) {
//     return x + y + z;
// }

// console.log(sum(2, 4, 6))

// Карирование всегда приводит к замыканию
// Если один или ноль аргументов, то каррировать нельзя
// Кол-во функций = кол-ву аргументов
// function currySum(x) {
//     return function(y) {
//         return function(z) {
//             return x + y + z;
//         }
//     }
// }

// console.log(currySum(2) (4) (6))

// sum(2)(4)(6);

// const translate = (local, text) => {

// }

// translate('ru', 'Good morning');
// translate('ru', 'Milk');
// translate('de', 'Freedom');
// translate('de', 'My name is Vika');

// const curryTranslate = (local) => {
//     return function(text) {
//         console.log(`${local}: ${text}`);
//     }
// }

// const translateToRu = curryTranslate('ru');
// const translateToDe = curryTranslate('de');

// translateToRu('Good morning');
// translateToRu('Milk');
// translateToDe('Freedom');
// translateToDe('My name is Vika');

// частичное применение
// partial application
// фиксирование одного или нескольких значений (аргументов)

// function add(a, b, c) {
//     return a + b + c;
// }

// function partAdd(a) {
//     return function (b, c) {
//         return a + b + c;
//     }
// }

// const addFive = partAdd(5);

// console.log(addFive(2, 3));


// hof => higher order function => функция высшего порядка
// функция, которая принимает функцию в качестве аргумента
// функция, которая возвращает новую функцию

// const arr = [1, 2, 3];

// arr.map(() => {

// });

// // функция обратного вызова => callback

// function greeting(name) {
//     console.log(`Привет, ${name}`);
// }


// function inputHandler(callback) {
//     const userName = prompt('Enter your name:')
//     callback(userName)
// }

// inputHandler(greeting)



// settimeout, setinterval
// Web API
// Browser API


// setTimeout(() => {
//     console.log('Через один сек');
// }, 1000);

// setInterval(() => {
//     console.log('1 сек');
// }, 1000)


// const timerId = setInterval(() => console.log('test'), 1000)


// setTimeout(() => {
//     clearInterval(timerId);
// }, 3000);




// clearTimeout,  clearInterval


// console.log('start');

// setTimeout(() => {
//     console.log('timeout');
// }, 0);

// console.log('end');




// IIFE
// immediately invoked function expression
// немедленно вызываемая функция
// ()()

// (function hello() {
//     const text = 'IIFE'
//     console.log(text);
// })();




// let numbers = [1, 2, 3, 4, 5];

// function randomArr(arr) {
//     const index = Math.floor(Math.random() * arr.length);
//     console.log('index', index);
//     return arr[index]
// }

// console.log(randomArr(numbers));

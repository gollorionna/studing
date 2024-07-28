// массивы
// [] - это массив, массив это object

// создание маасивов
// const users = [1, 2, 3]; // литерал массива - []
// const str = 'fgh'; // литерал строки 

// console.log(typeof users); // object


// const people = new Array(); // конструктор

// console.log(people);


// const names = Array.of('Sam', 'Tom', 'Vika', 'John');

// console.log(names);


// const letters = Array.from('Hello');

// console.log(letters);


// const arr = [1, 2, 3];

// console.log(arr.length);
// console.log(arr[1]);


// ссылочный тип данных
// console.log(2 === 2); // true
// console.log([1, 2, 3]  ===  [1, 2, 3]); // false


// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// const arr3 = arr1;
// arr3[3] = 10;



// проверка на массив
// Array.isArray(переменная)
// const arr = ['1', 2, 'Hello'];
// const test = 2;

// console.log(Array.isArray(test)); // false
// console.log(Array.isArray(arr)); // true


// удаление/добавление

// const arr = ['1', 2, 'Hello'];
// arr[5] = 'new element';
// delete arr[0];

// console.log(arr);



// методы

// split() => метод СТРОКИ

// const str = 'Lorem ipsum dolor sit amet';
// const str2 = 'JavaScript';

// const result = str.split(' ');
// const result2 = str2.split('');

// console.log(result2);

// методы массивов
// push()  => добавляет элемент в конце массива
// возвращает новую длину массива

// const arr = [5, 9, 1, 10, 2];

// const res = arr.push('test', true, 88);

// console.log(arr);
// console.log(res);


// pop() => удаляет последний элемент массива
// возвращает удаленный элемент

// const arr = [5, 9, 1, 10, 2];

// const res = arr.pop();

// console.log(arr);
// console.log(res);


// shift() => удаляет первый элемент 
// возвращает удаленный элемент
// const arr = [5, 9, 1, 10, 2];

// const res = arr.shift();

// console.log(arr);
// console.log(res);


// unshift() => добавляет элемент(ы) в начало
// и возвращает новую длину

// const arr = [5, 9, 1, 10, 2];

// const res = arr.unshift('test');

// console.log(arr);
// console.log(res);


// concat() => объединяет массивы и не меняет первоначальный

// const arr = [5, 9, 1, 10, 2];
// const arr2 = [5, 9, 1, 10, 2];

// const res = arr.concat('test', 2, true);
// const res2 = arr.concat(arr2);

// console.log(arr);
// console.log(res);
// console.log(res2);


// reverse() => переворачивает элементы массива
// мутирует исходный массив

// const arr = [5, 9, 1, 10, 2];

// const res = arr.reverse();

// console.log(arr);
// console.log(res);




// join() => преобразовывает элементы массива в строку
// если массив пустой, то => '' (пустая строка)
// const str = 'JavaScript';

// const res = str.split('').reverse().join('');

// const arr = [];
// const res2 = arr.join('');
// const res3 = arr.pop();  // => undefined - если массив пустой
// const res4 = arr.shift();   // => undefined - если массив пустой

// console.log(str);
// console.log(res);
// console.log(res2);
// console.log(res3);
// console.log(res4);




// slice(start, end) => копирование элементов массива

// const arr = [5, 9, 1, 10, 2]

// const res = arr.slice();

// console.log(arr);
// console.log(res);
// console.log(res === arr);  // false



// indexOf(element, index) => возвращает индекс первого вхождения элемента
// lastIndexOf(element, index) => возвращает индекс последнего вхождения элемента 
// второй аргумент (index) - начало поиска

// const arr = [5, 9, 1, 10, 2, 9]

// const res = arr.indexOf(9);
// const res2 = arr.lastIndexOf(9);
// const res3 = arr.lastIndexOf(78);

// console.log(arr);
// console.log(res);
// console.log(res2);
// console.log(res3);


// includes(element, start) => проверяет, содержит ли массив указаный элемент
// start => индекс начала поиска
// => true/false
// const arr = [5, 9, 1, 10, 2];

// const res = arr.includes(10);

// console.log(arr);
// console.log(res);



// at(index)

// const arr = [5, 9, 1, 10, 2];

// const res = arr.at(3);
// const res2 = arr.at(-1);

// console.log(arr);
// console.log(res);
// console.log(res2);


// fill(element, start, end) => заполняет значениями/ заменяет
// мутирует
// const arr = [5, 9, 1, 10, 2];

// const res = arr.fill(3);

// console.log(arr);
// console.log(res);



// splice(index, сколько удалить, что добавить) => вырезает и добавляет (швейцарский нож)
// мутирует
// const arr = [5, 9, 1, 10, 2];

// const res = arr.splice(3, 0, 'test');

// console.log(arr);
// console.log(res);



// flat(глубина) - убирает массив в массиве


// циклы

// const arr = [5, 9, 1, 10, 2];
// // const arrCopy = [];

// // for (let i = 0; i < arr.length; i++) {
// //     // arrCopy.push(arr[i]);
// //     arrCopy[i] = arr[i]
// // }

// // console.log(arrCopy);

// const users = ['John', 'David', 'Tom', 'Maxim']

// for (let user of users) {
//     console.log(user);
// }

// const str = 'javaScript'

// for (let letter of str) {
//     console.log(letter);
// }



// -------------------------  1

// const num1 = +prompt('Введите первое число');
// const arr = [];
// const COUNT = 5;
// for (let i = 0; i < COUNT; i++) {
//     arr[i] = num1;
// }

// console.log(arr);


// -------------------------  2  

// const arr = [3,6,12,10,51];
// const result = arr.reverse();

// console.log(result);

// --------- 2 variant
//  arr.length - 1 => индекс последнего элемента
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }


// ---------------------------- 3  Создать массив из 10 любых чисел, вывести среднее арифметическое всех чисел в массиве

// const arr = [3, 6, 10, 34, 23, 11, 2, 7, 89, 16];
// let result = 0;

// for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
// }

// const srArifm = result / arr.length;
// console.log(srArifm);


// -------------------------- 4  Дан массив [2,-4,10,5,1,-20,3,-8]. Создать новый массив, где каждый элемент равен противоположному элементу оригинального массива

// const arr = [2,-4,10,5,1,-20,3,-8];
// const newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     newArr[i] = arr[i] * -1;
// }

// console.log(newArr);


// -------------------------  5 Сформировать массив длиной 10 элементов. Автоматически заполнить этот массив чередующимися нулями и единицами, начиная с нуля.

// const arr = [];
// const MAX_LENGTH = 10;

// for (let i = 0; i < MAX_LENGTH; i++) {
//     if (!(i % 2)) {
//         arr.push(0);
//     } else {
//         arr.push(1);
//     }
// }

// console.log(arr);

// -------------------------  6  Сформировать массив длиной 8, внутри массива должны быть только те числа, которые делятся нацело на 4 (обязательно использовать цикл)

// const arr = [];
// const MAX_LENGTH = 8;

// for (let i = 0; arr.length <= MAX_LENGTH; i++) {
//     if (i === 0) {
//         continue;
//     }
//     if (i % 4 === 0) {
//         arr.push(i);
//     }
// }

// console.log(arr);


// ----------------------  7 С помощью цикла создать массив длиной 8, где каждый элемент равен квадрату своего номера(индекса) в массиве

// const arr = [];
// const MAX_LENGTH = 8;

// for (let i = 0; arr.length <= MAX_LENGTH; i++) {
//     arr.push(Math.pow(i, 2))
// }

// console.log(arr);


// ------------------------  8 Создать массив из 10 случайных чисел. Вывести количество четных чисел

// const arr = [];
// let MAX_LENGTH = 10;

// let count = 0;

// for (i = 0; i < MAX_LENGTH; i++) {
//     arr[i] = Number((Math.random() * 100).toFixed(0));
//     if (arr[i] % 2 === 0) {
//         count += 1;
//     }
// }

// console.log(arr);
// console.log(count);



// ------------------------  9 Создать массив из 10 чисел и вывести наибольшее число

// const arr = [34, 3453, 3423, 46, 23, 213, 4636, 573, 5363, 5363, 2134245, 2134245, 1];
// let MAX_LENGTH = 10;

// let max = arr[0];

// for (i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// console.log(arr);
// console.log(max);













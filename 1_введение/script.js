// комментарий однострочный

/*
многострочный
комментарий
*/



// Типы данных
// 8шт.

// 1. Number - число => 2.5 52
// 2. String - строка => 'stroka'  "test"  `JavaScript`
// 3. Boolean - булевский => true false
// 4. Null - ничего => null
// 5. Undefined - неопределенный => undefined
// 6. BigInt - большое число => 123n
// 7. Symbol - символ - уникальный идентификатор
// 8. Object - объект (пользовательский, встроенный) => { model: 'BMW', year: '2000' } 


// объявление переменных

// var, let, const

/*let userName = 55;
userName = 'John';
userName = 'David';
userName = true;
console.log(userName); 
*/

// экранирование - \
// let test = 'boy\'s toy';
// let test2 = "boy's toy";

// alert, prompt, confirm

// alert('Моё первое сообщение');

// prompt('Введите имя:', 'Vika');

// confirm('Вам есть 18 лет?');

// const userAge = prompt('Введите свой возраст:');
// const user18 = confirm('Вам есть 18 лет?');
// const user18 = alert('Шторм');

// console.log(userAge);
// console.log(user18);
// console.log(user18);


// typeof

// const str = "JavaScript";
// const year = 2024;
// const isLoading = false;
// const test = null;

// console.log(typeof str);
// console.log(typeof test);
// console.log(typeof year);
// console.log(typeof isLoading);

//var
// console.log(age);
// var age = 30;


// let age2 = 50;

// const begin = "Запускаем таймер";
// console.log(begin);

// alert("5");
// alert("4");
// alert("3");
// alert("2");
// alert("1");

// const end = "Обратный отсчет закончен";
// console.log(end);

// let myName = "Вика";
// let mySurname = "Дайнеко";
// let myFavoriteDrink = "Энергетик";
// let myFavoriteAnimal = "Кошка";

// console.log(myName);
// console.log(mySurname);
// console.log(myFavoriteDrink);
// console.log(myFavoriteAnimal);

// const carName = 'BMW';
// let carOwner = 'Vadim';
// let maxCarSpeed = 180;
// alert(carName);
// alert(carOwner);
// alert(maxCarSpeed);


// операторы
// = - присвоить
// +
// -
// *
// /
// ** - возведение в степень 
// % - остаток от деления (модуль) 3 % 2 = 1      2 % 2 = 0
// ++ - инкремент (увеличить на один)  2++ = 3
// -- - декремент => уменьшить на 1
// ++2 - префиксная запись
// 2++ - постфиксная запись


// let a = 10;
// let b = 4;

// const res_1 = a + b;
// const res_2 = a - b;
// const res_3 = a * b;
// const res_4 = a / b;
// const res_5 = a % b;
// const res_6 = a ** b;


// console.log('сумма:',res_1);
// console.log('-:',res_2);
// console.log('*:',res_3);
// console.log('/:',res_4);
// console.log('%:',res_5);
// console.log('**:',res_6);


// const c = 5;

// console.log(0 / 0);


// // above все называется конкатенация строк
// console.log('Hello' + 'world');

// console.log('Hello' + 2); // => если один из операндов строка, то получим строку (Hello2)



// операторы присваивания

// let x = 4;
// x += 2;  // => x = x + 2;
// x -= 2; // => x = x - 2;
// x *= 2; // => x = x * 2;
// x /= 2; // => x = x / 2;
// x **= 2; // => x = x ** 2;
// x %= 2; // => x = x % 2;
// console.log(x);


// операторы сравнения

// == - преобразует тип и сравнивает значение
// === - сравнивает и значение и тип
// != 
// !==
// >
// <
// >=
// <=
// ?
// ??

// console.log('!=:', 2 != 2);
// console.log('!==:', 2 !== 2);


// console.log(4 > 6);
// console.log(4 < 6);
// console.log(4 >= 4);
// console.log(4 <= 2);

// console.log('3' < '25');

// console.log("H" === "h");



// равны друг другу и не равны ничему другому
// console.log(null == undefined);



// логические операторы

// и &&
// или ||
// не - !


// console.log((4 + 5 < 10) && 4 < 6);
// console.log(4 > 5 || 4 < 6);


// console.log(!true);
// console.log(!false);


// преобразование типов 

// явное преобразование 
// Number()  => преобразование в число
// String()  => преобразование к строке
// Boolean() => преобразование к true false
// +, *, /


// const a = 2;
// const b = '4';

// console.log(a * b);
// console.log(b / a);
// console.log(+b + a);
// console.log(Number(b) + a);
// console.log('Hello');


// console.log(typeof Number(b));
// console.log(typeof String(a));
// console.log(Boolean(a));
// console.log(Number("Hello"));


// const userAge = +prompt('Введите ваш возраст:')

// console.log(!!userAge)


// 6 falsy значений => false

// console.log(!!false);
// console.log(!!0);
// console.log(!!'');
// console.log(!!null);
// console.log(!!undefined);
// console.log(!!NaN);


// let test = 'value';
// let test2 = '2';

// console.log(+test);
// console.log(test * 2);
// console.log(test / 2);
// console.log(test - 2);
// console.log(2 - test );

// console.log(typeof +test);

// console.log(isNaN(+test));
// console.log(isNaN(+test2));



// шаблонные строки - `` - бэктики
// можно писать многострочный текст
// можно писать другие кавычки без экранирования
// можно внедрять значения или писать выражения


// const greeting = 'Hello';
// const firstName = 'John';

// const message = greeting + ',' + ' ' + firstName + '!';

// интерполяция - ${}
// const message = `${greeting}, ${firstName}!`;
// console.log(message);



// const firstName = prompt ("Введите свое имя:");
// const age = prompt ("Введите свой возраст:");


// const greeting = `Добро пожаловать ${firstName}, Вам ${age} лет`

// console.log(greeting);


// инкремент, декремент 

// let i = 0;

// console.log(i++);
// console.log(i++);


// console.log(i);

// console.log(++i);
// console.log(++i);


// console.log(i);


// условные операторы 

// if else
// if (5 > 10) {
//     console.log('5 < 10')
// } else {
//     console.log('else block')
// }

// let test = 0;

// if (test === 1) {
//     console.log('1')
// } else if (test === 2){
//     console.log('2')
// } else {
//     console.log('3')
// }




// switch

// const str = prompt('Введите слово:');

// switch (str) {
//     case 'ципленок':
//         console.log('Правильно-цыпленок');
//         break;
//     case 'циц':
//         console.log('Правильно-цыц');
//         break;
//     case 'циган':
//         console.log('Правильно-цыган');
//         break;
//     default:
//         console.log('Молодец, ты написал правильно!');
//         break;
// }


// if (5 > 10) {
//     console.log('5 больше 10');
// } else {
//     console.log('5 меньше 10');
// }

// тернарный опертор - короткая запись if else

// 'условие' ? 'в случае true' : 'в случае false'

// 5 > 10 ? console.log('5 больше 10') : console.log('5 меньше 10')



// 1

// const firstPersonAge = +prompt('Введите ваш возраст:');
// const secondPersonAge = +prompt('Введите ваш возраст:');

// if (firstPersonAge > secondPersonAge) {
//     console.log(`Старшему: ${firstPersonAge} лет`)
// } else if (secondPersonAge > firstPersonAge) {
//     console.log(`Старшему: ${secondPersonAge} лет`);
// } else if (isNaN(firstPersonAge) || isNaN(secondPersonAge) || firstPersonAge === '' || secondPersonAge === '' || firstPersonAge === null || secondPersonAge === null) {
//     console.log('Ошибка');
// } else {
//     console.log('Возраст равен');
// }



// 2

// const userAge = +prompt('Введите свой возраст:');

// if (userAge >= 0 && userAge <= 10) {
//     console.log('привет мальчик');
// } else if (userAge >= 11 && userAge <= 18) {
//     console.log('привет подросток');
// } else if (userAge >= 19 && userAge <= 40) {
//     console.log('здарова пацан');
// } else if (userAge >= 41 && userAge <= 80) {
//     console.log('добрый вечер');
// } else if (userAge >= 81 && userAge <= 100) {
//     console.log('здравия желаю');
// } else {
//     console.log('Ошибка');
// }


//3

// const num1 = +prompt('Введите первое число:');
// const num2 = +prompt('Введите второе число:');
// const num3 = +prompt('Введите третье число:');


// console.log((num1 + num2 + num3)/3);


//4

// const colorName = prompt('Введите цвет');
// switch (colorName) {
//     case 'red':
//         console.log(1);
//         break;
//     case 'blue':
//         console.log(2);
//         break;
//     case 'orange':
//         console.log(3);
//         break;
//     case 'gray':
//         console.log(4);
//         break;
//     case 'salmon':
//         console.log(5);
//         break;

//     default:
//         console.log('ошибка');
//         break;
// }


//5

// const month = +prompt('Введите номер месяца');

// switch (month) {
//     case 1:
//         console.log('Январь');
//         break;
//     case 2:
//         console.log('Февраль');
//         break;
//     case 3:
//         console.log('Март');
//         break;
//     case 4:
//         console.log('Апрель');
//         break;
//     case 5:
//         console.log('Май');
//         break;

//     default:
//         break;
// }


//6

// const fedot = +prompt('Введите возраст Федота:');
// const mitya = +prompt('Введите возраст Митяя:');

// if (mitya > fedot) {
//     console.log(` Митяй старше Федота на ${mitya - fedot} `);
// } else if (mitya < fedot) {
//     console.log(` Федот старше Митяя на ${fedot - mitya} `);
// } else if (isNaN(mitya) || isNaN(fedot) || mitya === '' || fedot === '' || mitya === null || fedot === null) {
//     console.log('Ошибка');
// } else {
//     console.log('Возраст равен');
// }


// 7

// const num = prompt('Введите число:');

// if (+num === 0) {
//     console.log('Это ноль');
// } else if ( +num > 0) {
//     console.log('Это положительное число');
// }else if ( +num < 0) {
//     console.log('Это отрицательное число');
// }else if ( num === '' || isNaN(num) || num === null) {
//     console.log('ошибка');
// }

//8

// const planet = prompt('Введите название планеты:');

// planet === 'Земля' || 'земля' ? console.log('Привет, землянин') : console.log('Привет, инопланетянин')

















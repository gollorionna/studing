// строки, методы строк

// строка - это тип данных, хранится и сравнивается по значению

// '', "", ``

// const userName = 'Hello, world! javascript';

// console.log(userName);
// console.log(typeof userName);
// console.log(Boolean(userName));
// console.log(Number(userName));
// console.log(isNaN(userName));
// console.log(isNaN(+userName));


// ДЛИНА СТРОКИ (LENGTH)

// console.log(userName.length);
//получить символ по индексу
// индекс 1-го символа => 0
// console.log(userName[0]);
// console.log(userName[userName.length - 1]);

// выбрать регистр у всех букв

// console.log(userName.toLowerCase());
// console.log(userName.toUpperCase());

// объединение строк
// const firstName = 'Ivan';
// const lastName = 'Demidov';


// console.log(firstName + lastName);
// console.log(`${firstName} ${lastName}`);


// concat(переменная) - объединяет две или более строк в одну
// возвращает новую строку

// const fullName = firstName.concat(lastName, lastName, lastName)

// console.log(fullName);


// доступ к символам []
// charAt(index)

// console.log(userName.charAt(4));
// console.log(userName[4]);



// Поиск строки в строке
// includes(string, index?) => возвращает true/false

// console.log(userName.includes('Hello', 10));
// console.log(userName.includes('Hello'));
// console.log(userName.toLowerCase().includes('hello'.toLowerCase()));
// console.log(userName.includes('John'));
// console.log(userName.includes('!'));
// console.log(userName.includes('?'));


//indexOf(string, index?) => возвращает индекс или -1
// индекс первого вхождения подстроки в строку

// console.log(userName.indexOf('l'));
// console.log(userName.indexOf('?'));


// lastIndexOff(string, index?) => возвращает индекс или -1
// индекс последнего вхождения подстроки в строку
// console.log(userName.lastIndexOf('l'));


// endsWith(string) => true/false  - заканчивается ли строка символом

// console.log(userName.endsWith('!'));
// console.log(userName.endsWith('world'));


// startsWith(string) => true/false - начинается ли строка с заданным символом


// console.log(userName.startsWith('Hello'));
// console.log(userName.startsWith('hi'));


// search(string)  => индекс начала совпадения
// если совпадения нет, мы получим -1


// console.log(userName.search("world"));  





// извлечение строк 

// slice(start, end)  => извлекает часть строки и возвращает новую строку
// start - откуда извлекать
// end - до куда извлекать, он не обязателен,  по умолчанию он до конца строки
// без аргументов это будет копия


// const startIndex = userName.search("world");
// const endIndex = userName.lastIndexOf("!");
// const res = userName.slice(startIndex, endIndex);
// console.log(res);


// копирование строки 
// const copy = userName.slice();
// console.log(copy);
// console.log(copy === userName);



// substring(start, end)  => end может быть меньше, чем start


// const startIndex = userName.search("world");
// const endIndex = userName.search("!") + 1;
// const res = userName.substring(startIndex, endIndex);
// console.log(res);



// substr(start, length)


// const result = userName.substr(7,5);

// console.log(result);




// добавление символов
// padEnd(number, symbol)
// padStart(number, symbol)


// const testStart = userName.padStart(30, '*');
// const testEnd = userName.padEnd(30, '*');

// console.log(testStart);
// console.log(testEnd);



// замена
// replace()
// replaceAll()


// const res = userName.replace('l', '1');
// const res2 = userName.replaceAll('l', '1');
// console.log(res);
// console.log(res2);



// Повтор строки

// repeat(number)


// const res = userName.repeat(2);

// console.log(res);


// удаление пробелов в строке в начале или конце

// trimStart()
// trimEnd()
// trim()


// const userString = prompt("Введите текст:");
// console.log(userString.trim());




// console.log(userName[1]);

// for (let i = 0; i < userName.length; i++) {
//     console.log(userName[i]);
// }




// задачи

// ..............   1

// const firstStr = prompt('Введите первую строку');
// const secondStr = prompt('Введите вторую строку');

// if (firstStr.length > secondStr.length) {
//     console.log(1);
// } else if (firstStr.length < secondStr.length) {
//     console.log(-1);
// } else if (firstStr.length === secondStr.length) {
//     console.log(0);
// }



// ..............   2

// const stroka = "aaa@bbb@ccc";

// console.log(stroka.replaceAll('@', '!'));


// ..................   3

// const stroka = "я учу javascript!";

// console.log(stroka.length);



// .................   4

// const word = prompt('Введите слово');
// let reversedWord = '';

// for (let i = word.length -1; i >= 0; i--) {
//     reversedWord += word[i];
//     console.log(word[i]);
// }

// console.log(reversedWord);



// ..................  5

// const str = prompt('Введите слово');
// let counter = 0;

// for(let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//         counter += 1
//     } 

// }

// console.log(counter);



//......................  6

// const firstName = prompt("Введите ваше имя");
// const surname = prompt("Введите вашу фамилию");
// const fullName = firstName.concat(' ', surname);


// console.log(fullName);



// ....................   8


// const num = 1357;
// const str = String(num);
// let summa = 0;

// for (let i = 0; i < str.length; i++) {
//     summa += +str[i];
// }


// console.log(summa);


// .....................  9

// const currentYear = 2024;
// let year = +prompt('Введите год вашего рождения');

// let age = 0;

// while (year <= currentYear) {
//     console.log(`В ${year} было ${age} лет`);
//     year++;
//     age++;
// }


// .....................  10

// let bolshe = 0;
// let menshe = 0;
// let nuli = 0;


// for (let i = 1; i<=10; i++) {
//     const num = +prompt("Введите число");
//     if (num > 0) {
//         bolshe++
//     } else if (num < 0) {
//         menshe++
//     } else {
//         nuli++
//     }
// }

// console.log(`Положительных: ${bolshe}, отрицательных: ${menshe}, Нулей: ${nuli}`);




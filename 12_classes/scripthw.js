// -----------------------------  1  Написать функцию, которая считает количество слов в предложении.


/*
function wordsCounter(text) {
    return text.split(' ').length;
}
let words = wordsCounter('My name is Viktoria and I like cats');
console.log(words);
*/



// -----------------------------  2 Написать функцию сокращения строки. Функция принимает строку и ее
// максимальную длину. Если длина строки больше, чем максимальная, то необходимо
// отбросить лишние символы, добавив вместо них троеточие.
// Например: truncate(«Hello, world!», 8) должна вернуть «Hello...».
// кОПИРУЕМ SLICE от 0 до макс

// function truncate(str, maxlength){
//     if(str.length > maxlength){
//         return str.split('').fill('...', maxlength).join('');
//     } 
// }

// let result = truncate('Hello, world!', 8);
// console.log(result);




// --------------------------------  3 Сделайте функцию, которая параметром будет принимать массив и элемент и
// возвращать следующий за ним элемент. Пример:
// let arr = [1, 2, 3, 4, 5];
// func(arr, 1); // 2
// func(arr, 4); // 5
// func(arr, 5); // 1
// includes, indexOf, if
// let arr = [1, 2, 3, 4, 5];
// function arrReturn(arr, index){
//     arr.find((element) => {
//         return 
//     })
// }




// --------------------------------- 4  Дан массив чисел arrayNumbers. Необходимо создать переменную isEven, которая
// будет true или false в зависимости от того, являются ли все числа массива четными



/*
const arrayNumbers = [2, 4, 10, 6, 8, 14, 24, 50];

let isEven = arrayNumbers.every((element) => {
    return element % 2 === 0;
})

console.log(isEven);
*/



// ------------------------------------  5  Напишите функцию, которая принимает строку и возвращает строку, в которой
// каждый символ (с учетом регистра) повторяется.


/*
function repeatsLetter(str){
    return str.split('').map((element, i) => element.repeat(2)).join('');
}

let repeats = repeatsLetter('GoodBYE');
console.log(repeats);
*/



// ------------------------------------- 6

/*
const existedUserLogin = 'the_best_user';
const existedUserPassword = '12345678';
let userLogin = prompt('Введите логин:').trim();
let userPassword = prompt('Введите пароль:').trim();

function entrance(userLogin, userPassword){
    if(userLogin === existedUserLogin && userPassword === existedUserPassword){
        console.log(`Добро пожаловать, ${existedUserLogin}!`);
    }else{
        console.log(`Логин и (или) Пароль введены неверно!`);
    }
}

entrance(userLogin, userPassword);
*/



// -------------------------------------  7  


/*
const userName = prompt('Как вас зовут?').toLocaleLowerCase().trim();
alert(`Вас зовут ${userName}`);
*/


// ----------------------------------  8 

/*
let str = 'я учу javascript!';
console.log(str.substr(2,14));
console.log(str.substring(2,16));
console.log(str.slice(2,16));
*/



// -----------------------------------  9 



// let arr = [];
// for(let i = 0; i < 3; i++){
//     arr[i] = [];
//     for(let n = 1; n <=5; n++){
//         arr[i].push(n)
//     }
// }

// console.log(arr);




// ----------------------------------   10


let userPassword = prompt('Введите пароль:');


function password(userPassword){
    let arrPassword = userPassword.split();
    arrPassword.some(element => {
        return element === Number;
    });
    arrPassword.some((element) => {
        return element === 
    })
}

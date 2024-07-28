// работа с числами
// Math

//String(2)
//.toString(2)

// const num = 21;

// const result = num.toString();

// console.log(result);
// console.log(typeof result);



// .toFixed(number) => возвращает строку
// const a = 8;
// const b = 3;

// const result = a / b;

// console.log(result.toFixed(2));

// console.log(+0.3.toFixed(2) === +(0.1 + 0.2).toFixed(2));


// console.log(0.1 + 0.2);


// +,  Number()
// parseInt(), - иследует строку и возвращает целое число, только если строка начинается с числа
// parsefloat() - возвращает дробное число


// let userData = prompt('Введите информацию');

// Number(userData)

// const test1 = parseInt(userData);
// console.log(test1);


// const test2 = parseFloat(userData);
// console.log(test2);




//isInteger() => определяет целое ли число

// const num = 5.5;

// console.log(Number.isInteger(num));


// Number
// String
// Boolean


// Math

// const PI = Math.PI;

// console.log(PI);


// работа с дробными числами 

// const num = 3.2;
// const num2 = 3.9;
// const num3 = 3.49;

// console.log(Math.ceil(num));  // =>округление в большую сторону
// console.log(Math.floor(num2));  // => округление в меньшую сторону
// console.log(Math.round(num3));  // => округление по правилам математики 


// console.log(Math.trunc(num3));  // => отбрасывает дробную часть



// console.log(Math.abs(-5)); // => модуль |-5|
// console.log(Math.pow(3, 2)); // => возвести в степень, второе число - степень
// console.log(Math.sqrt(36)); // квадратный корень
// console.log(Math.sign(-8));  // определяет знак числа
// console.log(Math.sign(8));  // положительное число = 1, отрицательное = -1
// console.log(Math.sign(0));  // 0 => 0


// console.log((Math.max(5, 7, 32, 768)));
// console.log((Math.min(-5, 7, 32, 768)));


// Math.random() => генерирует случайное дробное число от 0 до 1, всегда меньше 1
// console.log(Math.floor(Math.random() * 1000));


// min - включено
// max - исключено
// console.log(Math.floor(Math.random() * (max - min)) + min);




// ---------------------- 1

// через цикл

// for (let i = 1; i <= 4; i++) {
//     let num = +prompt('Введите число');
//     console.log(Math.min(num));
// }


// через переменные

// let num = +prompt('Введите первое число ');
// let num2 = +prompt('Введите второе число ');
// let num3 = +prompt('Введите третье число ');
// let num4 = +prompt('Введите четвертое число ');

// console.log(Math.min(num, num2, num3, num4));


// --------------------------  2

// for (let i = 1; i <= 3; i++) {
//     let num = +prompt('Введите число');
//     console.log(Math.max(num));
// }


// let num = +prompt('Введите первое число ');
// let num2 = +prompt('Введите второе число ');
// let num3 = +prompt('Введите третье число ');

// console.log(Math.min(num, num2, num3));



// ---------------------  3

// let max = +prompt('Введите максимальное число');
// let min = +prompt('Введите минимальное число');


// console.log(Math.floor(Math.random() * (max - min + 1)) + min);


// --------------------  4

// const num = +prompt('Введите число');

// console.log(num * -1);

// if (num < 0) {
//     console.log(Math.abs(num));
// } else if (num > 0) {
//     console.log(+`-${num}`);
// } else {
//     console.log(num);
// }


// ------------------  5

// let num = +prompt('Введите число');

// console.log(Math.sqrt(num));



// const randomColor = Math.floor(Math.random() * 16777216).toString(16);


// document.body.style.backgroundColor = '#' + randomColor;


// console.log('#' + randomColor);


// const password = Math.random().toString(36).slice(2, 10)

// console.log(password);



/*
const word = 'javascript';
const newWord = word[0].toUpperCase() + word.slice(1);
const newWord2 = word.replace(word[0], word[0].toUpperCase());
let newWord3 = '';

for (let i = 0; i < word.length; i++) {
    if (i === 0) {
        newWord3 += word[i].toUpperCase();
        continue;
    }
    newWord3 += word[i];
}

console.log(newWord3);
*/



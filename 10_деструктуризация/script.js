// rest, spread, деструктуризация


// ... => rest    ... => spread  - три точки ставятся перед именем переменной

// spread - используется для разделения коллекций на отдельные элементы, КОПИРУЕТ (простой способ копирования) и ОБЪЕДИНЯЕТ
// spread => может использоватбся в любом месте
// rest - используется для объединения отдельных значений в массив - остаточный массив
// rest => используется только в конце


// const arr = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arrCopy = [...arr];

// const result = arr.concat(arr2)
// const result2 = [...arr, ...arr2]


// console.log(result);
// console.log(result2);
// console.log(...arr);
// console.log(arrCopy);

// console.log(Math.max(...arr)); // разложили массив на отдельные элементы



// const numbers = [2, 3, 4, 5, 6];
// const test = [7, 1,...numbers, 8, 10];

// console.log(numbers);
// console.log(test);


// const obj = {
//     name: 'John',
//     age: 55
// }

// const objCopy = {
//     ...obj,
//     city: 'Gomel'
// };

// console.log(obj === objCopy);



// ...rest 

// const test = function (a, b, ...rest) {
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }

// test('Пример', 'использования', 'rest', 'оператора');


// const log = function(...args) {

//     console.log(args);
// }

// log(1, 2, 3, 4, 5);




// деструктуризация  => это особый синтаксис, который позволяет извлекать значения
// деструктурирующее присваивание

// для массива => извлекаем значение и записываем в переменную
// литерал массива с левой стороны от =

// для объекта


// const userProfile = ['David', 'Johnson', 'david@gmail.com'];

// // const firstName = userProfile[0];
// // const lastName;
// // const email;

// const [firstName, lastName, email] = userProfile;

// console.log(firstName);
// console.log(lastName);
// console.log(email);


// const [userName, ...userData] = userProfile;

// console.log(userName);
// console.log(userData);


// обмен локальными переменными

// let width = 300;
// let height = 400;
// const landscape = true;

// console.log(`${width} x ${height}`);

// if (landscape) {
//     // let initialWidth = width;
//     // width = height;
//     // height = initialWidth;
//     [width, height] = [height, width]
//     console.log(`${width} x ${height}`);
// }


// const user = {
//     name: 'John',
//     age: 30,
//     city: 'Gomel',
//     car: true

// }

// const {name, age} = user;
// console.log(name);
// console.log(age);

// function displayUserName({name, age}) {
//     console.log(name);
//     console.log(age);
// }

// displayUserName(user);



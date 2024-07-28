// loop - цикл - многократное выполнение одних и тех же действий, инструкций, кода

//for
//while
//do ... while
//for ... in
// for ... of


//for => цикл со счетчиком
// итерация - один проход через тело цикла, внизу 10 итераций

// for (let i = 1; i <= 10; i++) {
//     // тело цикла
//     console.log(`колесо сделало ${i} оборот`);
// }


// for (let i = 1; i <= 10; i+=2) {
//     // тело цикла
//     if(i===5){
//         console.log(`колесо сделало ${i} оборот`);
//     }
// }


// for (инициализация; условие; финальное выражение) {
//     // тело цикла
// }


// break - прерывает цикл
// продолжает выполнение кода после него

// continue - прерывает текущюю итерацию


// for (let i = 1; i <= 15; i++) {
//     if (i % 5 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// console.log('После цикла');


// while 

// let i = 0;
// const end = 5;

// while (i <= end) {
//     console.log(i);
//     i += 1;
// }

// console.log('После цикла');


// do while
// даже если условие false, он все равно выполнится обязательно не меньше одного раза
// let i = 0;
// const end = 5;

// do {
//     console.log(i);
//     i += 1;
// } while (i <= end);



//1
// let num = +prompt('Введите длину стороны квадрата');

// const result = num * num;
// const result2 = num ** 2;

// console.log(result);
// console.log(result2);

//2

// let num = +prompt('Введите число');
// const res = num ** 3;
// console.log(res);

//3

// const str = 'bla';
// let newStr = 'bla';

// for (let i = 1; i <= 4; i++) {
//     console.log(newStr);
//     newStr += str;
// }

//4

// let num = +prompt('Введите количество #');
// let res1 = '';
// let res2 = '#';


// for (let i = 1; i <= num; i++) {
    
//     res1 += res2;
// }

// console.log(res1);


// 5

// const num = +prompt('Введите число');

// if(num>0){
//     for (let i = num; i >= 0; i--) {
//     console.log(i);
//     }
// } else {
//     for (let i = num; i <= 0; i++) {
//         console.log(i);
//     }
// }




//6

// const start = 40;
// const end = 140;
// for (let i = start; i <=end; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }
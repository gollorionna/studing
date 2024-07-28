// --------------------- homework 5



// -----------------------  1 exercise

/*
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    compareAge(personAge) {
        if(this.age > personAge.age){
            console.log(`${this.name} старше, чем ${personAge.name} `);
        }else if (this.age < personAge.age){
            console.log(`${this.name} младше, чем ${personAge.name}`);
        } else {
            console.log(`${this.name} одного возраста с ${personAge.name}`);
        }
    }
}

const person1 = new Person('Максим', 24);
const person2 = new Person('Светлана', 36);
const person3 = new Person('Ирина', 23);

person1.compareAge(person2);
person2.compareAge(person3);
person3.compareAge(person1);
*/



// ------------------------------  2 exercise


/*
const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
    return 'Гав-Гав';
    }
}


const bird = {
    name: 'Петя',
    type: 'Ворон',
    makeSound() {
    return 'Кар-кар';
    }
}


function makeDomestic(isDomestic) {
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
    return Object.assign({isDomestic}, this)
}

const firstDog = makeDomestic.bind(dog)(true);
console.log(firstDog);
const firstBird = makeDomestic.call(bird, true)
const secondBird = makeDomestic.apply(bird, [true])
console.log(firstBird);
console.log(secondBird);
*/



// --------------------------------  3

// class CarService {
//     constructor(name, workingOurs = CarService.DefaultWorkingHours) {
//         this.name = name;
//         this.workingOurs = workingOurs;
//     }
//     repairCar(carName) {
//         if (carName === false || carName === !String) {
//             console.log("Вам необходимо указать название машины, чтобы ее отремонтировать");
//         } else {
//             if(this.workingOurs < CarService.DefaultWorkingHours.from || this.workingOurs > CarService.DefaultWorkingHours.till){
//                 console.log("К сожалению, мы сейчас закрыты. Приходите завтра");
//             } else {
//                 console.log(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста`);
//             }
//         }
//     }
//     static DefaultWorkingHours = {
//         from: '9:00',
//         till: '20:00',
//     };
// }

// const carService = new CarService('RepairCarNow', { from: '10:00', till: '19:00' });
// carService.repairCar('BMW');




// ---------------------------  4

/*
const people = [
    {name: 'Иван', profession: 'Backend-developer'},
    {name: 'Анастасия', profession: 'DevOps-developer'},
    {name: 'Василий', profession: 'Frontend-developer'},
    {name: 'Оксана', profession: 'Project-manager'}
]


const frontendDev = people.find((person, profession) => {
    return person.profession === 'Frontend-developer'
})
console.log(frontendDev);
*/


// ---------------------------  5

/*
const people = [
    {name: 'Иван', age: 22},
    {name: 'Анастасия', age: 20},
    {name: 'Василий', age: 16},
    {name: 'Оксана', age: 27},
    {name: 'Оксана', age: 14},
    {name: 'Оксана', age: 30}
]

const adultPeople = people.filter((person) => {
    return person.age > 17; 
})

console.log(adultPeople);
*/


// --------------------------  6

// function getDaysBeforeBirthday(nextBirthdayDate){
//     let today = new Date().getMilliseconds();
//     let nextBirthday = nextBirthdayDate;
//     let result = nextBirthday - today;
//     return nextBirthday
// }

// function convertMsToDays() {

// }

// console.log(getDaysBeforeBirthday(new Date(2025, 3, 28)));




// -------------------------------  7


const car = {
    model: 'tesla',
    address: {
        country: {
            city: {
                name: 'gomel',
                street: {
                        name: 'sovetskaya',
                        number: 2
                    }
                }
            },
        region: ['gomel', 'brest', 'minsk']
    },
    specs: {
        price: {
            low: 2000,
            mid: 3000,
            hight: 5000
        },
        engine: {
            power: 400,
            lowPower: 100
        }
    }
};


const car2 = {
    model: 'lada',
    address: {
        country: {
            city: {
                name: 'gomel',
                street: {
                    name: 'sovetskaya',
                    number: 20
                }
            }
        },
        region: ['minsk', 'grodno', 'eremino']
    },
    specs: {
        price: {
            low: 100,
            mid: 2000,
            hight: 2500
        },
        engine: {
            power: 200,
            lowPower: 100
        }
    }
};


const car3 = {
    model: 'bmw',
    address: {
        country: {
            city: {
                name: 'boston',
                street: {
                    name: 'sovetskaya',
                    number: 2
                }
            }
        },
        region: ['new york', 'berlin', 'bacelona']
    },
    specs: {
        price: {
            low: 100000,
            mid: 150000,
            hight: 200000
        },
        engine: {
            power: 1000,
            lowPower: 500
        }
    }
};

const arrCars = [car, car2, car3];

// ----------------------  7.1
console.log(arrCars.filter(el => el.address.region === 'minsk'));


// ----------------------  7.2

/*
const result = arrCars.map((auto)=>{
    return auto.specs.price.hight;
})

const sum = result.reduce((currentSum, currentNumber)=>{
    return currentSum + currentNumber;
})
console.log(sum);
*/


// ---------------------- 7.3

/*
let result = arrCars.find((elem)=>{
    return elem.specs.engine.power > 500;
})

console.log(result);
*/


// ---------------------  7.4

// let result = arrCars.filter((elem)=>{
    
// })
// console.log(result);

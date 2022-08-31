// 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)  // tesla[0]
console.log(otherRandomCar) // mercedes[1]
console.log('____________________');



// 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name); // name is now otherName so it shouldnt exist
console.log(otherName); // elon
console.log('____________________');


// 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //12345
console.log(hashedPassword); // should be error no password in person
console.log('____________________');

// 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second); // 2 != 5
console.log(first == third); // should = true
console.log('____________________');



// 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // should print key 
console.log(secondKey); // i think a [] w all numbers
console.log(secondKey[0]); // 1
console.log(willThisWork); // dont think so // ahhhhh its 5 i get it now
console.log('____________________');



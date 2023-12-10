// datatypes 

// primitive 7 types 
// string , number , boolean , null , undifined , symbol  , bigint 

const score = 100 
const scorefull = 100.3 
const isloggedIn = false
const outsideTemp = null
let userEmail ;


// refrence ( Non Primitive )
// array , object , function 

const id =  Symbol("123")
const anotherId = Symbol("123")

//console.log(id === anotherId);


const bignumber = 2555653565656565n // this is a bigint number 


// function greet(name) {
//     console.log(`Hello, ${name}!`);
//   }
  

//   greet('Alice');


// function greet(name){
//     console.log(`Hello ${name}`);
// }

// greet('Omkar')

let currrentDate = new Date();

//console.log(currrentDate)

let person = {
    name : 'Omkar',
    age :25 ,
    city : "Pune"
};

// console.log(person.name); 
// console.log(person['age']);   // Output: 30
// console.log(person.city); 

console.log([person]);





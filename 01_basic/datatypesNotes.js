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

//console.log([person]);



// **stack memory (primitive type use this memory) 
//   like numbers boolean datatpes
  // when use of stack memory we gave copy of decleard varible


// **heap memory
// when use of heap memory we gave copy of refrence varible

let myyoutubeName = "om BHarati"

let anotherName = myyoutubeName
anotherName = "chaiorjs"


 console.log(myyoutubeName);//not changes the original vlaue  output is "om BHarati"
 console.log(anotherName); // chnages the another name value which assign you latter output is "chaiorjs"


let useOne ={
    emial : "user@google.com",
    upi : "om@ybl"
}

let userTwo = useOne 


userTwo.emial = "om@google.com"

console.log(useOne.emial);
console.log(userTwo.emial);

// in this heap meomory original value is changes pitput is  "om@google.com"




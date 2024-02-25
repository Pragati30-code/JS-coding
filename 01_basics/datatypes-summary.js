//primitive datatypes
//there are 7 types of primitive datatypes
//string,null,number,boolean,undefined,symbol,bigInt

const score = 100
const scorevalue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 2423993870027376728635n


//Refrence Non primitive datatypes
//Array,objects,functions

const heroes = ["shaktiman","naagraj","doga"];
let myObj = {
    name: "khushi",
    age: 20,
}
 const myFunctions = function(){
    console.log("Hello World");
 }

 console.log(typeof anotherId);
 

 //++++++++++++++++++++++++++++++++++++++

 //Stack and Heap Memory
 //Stack is used in primitive datatypes(isme hume copy milti hai)
 //Heap is used in non primitive datatypes(isme reference hota hai matlab direct original me change hota hai)

 //example for stack

 let myname = "khushi"
 let anothername = myname
 anothername = "pragati"

 console.log(anothername);
 console.log(myname);

 //example for heap

 let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
 }

 let userTwo = userOne
 
 userTwo.email = "pragati@gmail.com"
 console.log(userOne.email);
 console.log(userTwo.email);
 







 
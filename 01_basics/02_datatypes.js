//Datatypes and ecma standard

"use strict"; //treat all JS code as newer version
//if not mentioned it will be implimented by default


//alert(3 + 3) // not available in nodeJS 

//use mdn docs 

// let name = "hitesh"

// let age = 30;

// let isLoggedIn = true;

//number  ==>range :  2 to the power of 53
//bigInt also there

//String "" or ''

//boolean true OR false

//null  ==> datatype and standalone value

//undefined ==> value is still not assigned

//symbol ==> mostly used in react /used for uniqueness

//objects


// console.log(typeof "sonu");
// console.log(typeof null); //type of null is object
// console.log(typeof undefined);
// console.log(typeof age);

//Premitives and Reference

//# Premitives :--

// Call by Value

// 7 types : string , number , boolean , null , undefined , symbol , bigint

// const score = 111;

// const scoreOn:Number = 111; TypeScript

// const score = 11.11;
// console.log(typeof score);

//Symbol

const id = Symbol("123")
const Aid = Symbol("123")

//  console.log(id === Aid); //false

//BigInt

const score = 132132455456135n

// console.log(typeof score);




// Js is dynamically typed language

//# Reference :--
// Call By Reference

// Array,Objects,Functions


//Array

// const heros = ["Shaktiman","naagraj","doga"]


//Object

// let myobj = {
//     name:"hitesh",
//     age:22
// }

//Function


// const myfunc = function()
// {
//     console.log("Hello World...");
// }

//null ==> typeof () ==> object

// all Reference typeOf is ==> Object Only


/*+++++++++++++++++++++++++++++++++++++++*/

// Stack(Premitive) , Heap (Reference)
// const tinderUser = new Object() // singleton object
// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));//returns an arrray of all the keys
// console.log(Object.values(tinderUser));//returns an arrray of all the values
// console.log(Object.entries(tinderUser));
//Above three outputs
// [ 'id', 'name', 'isLoggedIn' ]
// [ '123abc', 'Sammy', false ]
// [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]
// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true



const regularUser = {
    email:"something@gmail.com",
    fullname:{
        userFullName : {
            firstName : "Yusuf",
            lastName : "pathan"
        }
    }
}

// console.log(regularUser.fullname.userFullName);
// console.log(regularUser);

const obj1 = {1:"A",2:"B"}

const obj2 = {3:"C",4:"D"}

const obj3 = Object.assign(obj1,obj2) //combines the objects together

// console.log(obj3);

// console.log(obj1 == obj3); // true

// const obj3 = {...obj1,...obj2} //spread
// console.log(obj3);

//Array of objetcs

const arrayObj = [{fullname:"Yusuf"},{Email:"Yusuf@ai.com"},{Roll:45}]

// console.log(arrayObj[1].Email);

const tinderUser = 
{id : "123abc",
name : "Sammy",
isLoggedIn : false
}

const {isLoggedIn : li} = tinderUser

console.log(li);


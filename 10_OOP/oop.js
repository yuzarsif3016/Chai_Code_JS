// const user = {
//     userName:"Hitesh",
//     loginCount : 8,
//     signedIn : true,
//     getUserDetails:function(){
//         // console.log("Got user Details From Database");
//         // console.log(`userName ${this.userName}`);
//         console.log(this);
//     }
// }

// console.log(user.userName);
// user.getUserDetails()

// console.log(this);

// function user(username,loginCount,isLoggedIn){

//     this.username = username
//     this.loginCount = loginCount
//     this.isLoggedIn = isLoggedIn
//     return this
// }

// const userOne = user("Hitesh",12,true)
// const userTwo = user("Sonu",112,true) // this will over write all the values 

// console.log(userOne); // "Sonu",112,true


// Solution 


// function user(username,loginCount,isLoggedIn){

//     this.username = username
//     this.loginCount = loginCount
//     this.isLoggedIn = isLoggedIn
//     return this
// }

// const userOne = new user("Hitesh",12,true)
// const userTwo = new user("Sonu",112,true) // this will over write all the values 

// console.log(userOne);
// console.log(userTwo);
// o/p
// user { username: 'Hitesh', loginCount: 12, isLoggedIn: true }
// user { username: 'Sonu', loginCount: 112, isLoggedIn: true }




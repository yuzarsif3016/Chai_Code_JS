//SingleTon  using constructor
//Object.create()


//Object literals

const mysymbol = Symbol("key1")

const JsUser = {
    name:"Hitesh",
    "FullName" : "Chaudhary",
    [mysymbol]:"mykey1", //use [] for symbol type
    age:18,
    location:"Jaipur",
    roll : 404,
    email:"hitesh@AI",
    lastLogDays : ["mon","tue","wed"]
}

// console.log(JsUser.email);

// console.log(JsUser["email"]);

// console.log(JsUser[mysymbol]);

// Object.freeze(JsUser) // to lock the values

JsUser.greetings = function(){
    console.log("Hello JS user");
}

// console.log(JsUser.greetings());

// console.log(JsUser.greetings);

JsUser.greetingstwo = function(){
    console.log(`Hello Js user ${this.FullName}`);
}

 console.log(JsUser.greetingstwo());

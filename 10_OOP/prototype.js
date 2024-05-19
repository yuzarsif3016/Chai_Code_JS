let myName = "Hitesh        "
let AnothersName = "Chai aue Code       "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}
console.log(AnothersName.trueLength());
"Yusuf".trueLength()


let myHeros = ["thor","spiderman"]

let heroPower = {

    thor:"Hammer",
    spiderman:"Sling",

    getHeroPower : function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.Hitesh = function()
{
    console.log(`Hitesh is present in all objects globally using this technique`);
}

// heroPower.Hitesh()


//Inheritance
const user={
    name:"Chai",
    email:"chai@google.com"
}
const Teacher = {
    MakeVideo : true
}

const Teachingsupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignement : 'JsAssignment',
    fullTime:true,
    __proto__:Teachingsupport // get all the prop of teachingSupport
}

Teacher.__proto__ = user

//NEW Modern Syntax

Object.setPrototypeOf(Teachingsupport,Teacher) // Teacher avaliable to teachingsupport
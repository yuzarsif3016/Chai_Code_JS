//Functions Can Also Act As an Object

function mul(num){
    return num * 5
}
mul.power=2
// console.log(mul(5));
// console.log(mul.power);
// console.log(mul.prototype);

function createUser(username,score)
{

    this.username = username
    this.score = score
}
//prototype of current and adding our custom methos inc and printme
createUser.prototype.inc = function()
{
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}

const chai = new createUser("chai",25)
const tea = new createUser("tea",250)

chai.printMe()
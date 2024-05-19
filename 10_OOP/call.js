function setUsername(username){
    this.username = username


}

function createUser(username,email,password)
{
    setUsername.call(this,username) //holds the current reference

    this.email = email
    this.password = password
}

const chai = new createUser("chai","1234@gmail.com","123")
console.log(chai);
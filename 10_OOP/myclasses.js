//ES Onwards

class user{
    constructor(username,email,pwd)
    {
        this.username = username
        this.email = email
        this.pwd = pwd
    }

    encryptPassword()
    {
        return `${this.pwd}abc`
    }
}

const chai = new user("XYZ","A@AI.com","123")

console.log(chai.encryptPassword()); 
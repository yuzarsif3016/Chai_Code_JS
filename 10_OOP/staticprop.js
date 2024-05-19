class user{
    constructor(username)
    {
        this.username = username
    }

    logMe()
    {
        console.log(`User : ${this.username}`);
    }

    //One Intstance is shared with all
    static createId(){
        return `123`
    }
}

const hitesh = new user("Hitesh")
console.log(hitesh.createId());
// function sayMyName()
// {
//     console.log("Y");
//     console.log("U");
//     console.log("S");
//     console.log("U");
//     console.log("F");
// }
// console.log(sayMyName); // function reference
// console.log(sayMyName());


// function addTwo(num1 , num2)
// {
// console.log(num1+num2);
// }

// addTwo(4,6) // 10

// addTwo(4,"6") // 46

// function addTwo(num1 , num2)
// {
// return num1+num2;
// }

// const result = addTwo(10,20)

// console.log(result);

function loginUserMessage(username = "sam")
{
    //if(username === undefined)
    if(!username)
    {
        console.log("please enter a username");
        return
    }
    return `${username} Just Logged In`
}

// const result = loginUserMessage("")
// console.log(result);

// console.log(loginUserMessage());undefined Just Logged In

// console.log(loginUserMessage());sam Just Logged In


//Rest operator (var arg method)
function calculateCartPrice(...num1)
{

   
    return  num1
}

//console.log(calculateCartPrice(100,200,300));



//Passing object to a function


const user = {
    username : "Yusuf",
    price : 100
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

// handleObject(
//     {
//         username:"Sonu",
//         price:199
//     }
// )

//Passing array to a function

const myArr = [200,400,600,800]

function returnSecondval(getArr)
{
    return getArr[1]
}
// console.log(returnSecondval(myArr)); // 400

// console.log(returnSecondval([100,200,300,400])); // 200

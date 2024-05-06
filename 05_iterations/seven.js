//reduce

// const mynums = [1,2,4,5,7]

// const myTotal = mynums.reduce((acc,curr)=>{
//     console.log(`acc : ${acc} and curr : ${curr}`);
//     return acc + curr
// },0)

// console.log(myTotal);

const shoppingCart = [


    {
        course:"Java",
        price:1000
    },
    {
        course:"JavaScript",
        price:2000
    },
    {
        course:"Advance Java",
        price:10000
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0)

console.log(priceToPay);
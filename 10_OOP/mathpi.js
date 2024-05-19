// const Des = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(Des);
// O/P 
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }

const Chai = {
    name:"Ginger chai",
    price:250,
    isAvailable:true
}

console.log(Object.getOwnPropertyDescriptor(Chai,"name"));

// O/P

// {
//     value: 'Ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

Object.defineProperty(Chai,"name",{
        writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(Chai,"name"));

// O/P


// {
//     value: 'Ginger chai',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }
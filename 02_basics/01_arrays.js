// Arrays
//shallow copy
// const myArr = [132, 54 , 55 , 65 , 'Yusuf']

// console.log(myArr[0]);

// const myarr2 = new Array(1,2,3,4);

// myArr.push(6)

// console.log(myArr); [ 132, 54, 55, 65, 'Yusuf', 6 ]

// const newArr = myArr.join() 

// console.log(newArr);

// console.log(typeof newArr); string

const myArr = [132, 54 , 55 , 65 , 66]

// const myn1 = myArr.slice(1,3)

// console.log(myn1);

// console.log("B" , myArr);

const myn2 = myArr.splice(1,3) // manipulate original array

console.log(myn2);

console.log("C" , myArr);




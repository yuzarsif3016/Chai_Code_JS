const marvel_Heros = ['thor','IronMan','spiderMan']

const dc_Heros = ['superman','flash','batman']

// marvel_Heros.push(dc_Heros)

// console.log(marvel_Heros);

//[ 'thor', 'IronMan', 'spiderMan', [ 'superman', 'flash', 'batman' ] ]


// const allHeros = marvel_Heros.concat(dc_Heros);

// console.log(allHeros);


//Spread Operator

// const allNewHeros = [...marvel_Heros,...dc_Heros]

// console.log(allNewHeros);


const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArray = anotherArray.flat(Infinity)

console.log(realAnotherArray);

// console.log(Array.isArray("Hitesh")); false

// const myArr = Array.from("Hitesh")

// console.log(myArr);[ 'H', 'i', 't', 'e', 's', 'h' ]

// let s1 = 10;
// let s2 = 20;
//  let s3 = 30

//  console.log(Array.of(s1,s2,s3));[ 10, 20, 30 ]



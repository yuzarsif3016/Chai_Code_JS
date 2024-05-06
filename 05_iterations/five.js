const arr = [1, 5, 8, 9, 3, 45, 85];

// arr.forEach( function (item){
// console.log(item);
// })

// arr.forEach( (item)=>{
//     console.log(item);
// })

// arr.forEach( (item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding = [{

    langName :"Java",
    langFile : "java"

}, {
    langName :"JavaScript",
    langFile : ".js"
}, {
    langName :"Python",
    langFile : "py"
},];


myCoding.forEach((item)=>{
    console.log(item.langName);
})

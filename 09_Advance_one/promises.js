// const promiseOne = new Promise((resolve,reject)=>{
//     //Do an asynch task
//     //DB calls,cryptography,n/w calls

//     setTimeout(function(){
//         console.log('Asynch task is complete');
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log('Promise Consumed');
// })

// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('Asynch Task Again');
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log(`Asynch 2 resolved`);
// })

// const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({userName:'Chai',email:'Ai@gmail.com'})
//     },1000)
// })

// promiseThree.then((user)=>{
// console.log(user);
// })

// const promiseFour = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = false;
//         if(!error)
//             {
//                 resolve({userName:'Chai',email:'Ai@gmail.com'})
//             }
//             else{
//                 reject(`Wrong`)
//             }
//     },1000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.userName
// }).then((userName)=>{
//     console.log(userName);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log(`Finally Promise is resolved or rejected`);
// })

// const promiseFive = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//                 let error = true;
//                 if(!error)
//                     {
//                         resolve({userName:'Chai',email:'Ai@gmail.com'})
//                     }
//                     else{
//                         reject(`went Wrong`)
//                     }
//             },1000)
// })

// async function consumepromiseFive()
// {
//    try {
//     const resp = await promiseFive
//     console.log(resp);
//    } catch (error) {
//     console.log(error);
//    }
// }

// consumepromiseFive()


// async function getAllUsers()
// {

//     try {
//         const resp = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await resp.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers()


// fetch('https://jsonplaceholder.typicode.com/users').then((resp)=>{
//     return resp.json()
// }).then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })
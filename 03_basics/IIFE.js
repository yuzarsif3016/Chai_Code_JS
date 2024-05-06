//immediately invoked function expression
//to remove the polution of global scope variables


(function chai(){
    console.log("DB Connected");
})();



((name)=>{
    console.log(`Chai aur code ${name}`);
})("Yusuf")


// function* generator(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
// }

// let gen = generator();

// console.log(gen.next().value)
// console.log(gen.next().value)
// setTimeout(
//     ()=>{
//         console.log(gen.next().value)
//         console.log(gen.next().value)
//     }, 2000
// )


// function* generator(){
//     let index = 0

//     while(true){
//         yield index++
//     }
// }

// let gen = generator();

// console.log(gen.next().value)
// console.log(gen.next().value)


//callback hell
// console.log("Before")
// setTimeout(
//     ()=>console.log("setTimeout"), 2000
// )
// console.log("After")



// //async await

new Promise(function(resolve, reject){
    setTimeout(()=>reject("Error==========="), 2000)
})
.then(
    (result)=>console.log(result),
    // (err)=>console.log(err)
)
.catch((err)=>console.log(err))
.finally(()=>console.log("Finally always execuets"))
//
//
//
//
//



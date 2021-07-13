function doubleAfter2Seconds(x){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(x*2)
        }, 2000)
    });
}
//#region 
// doubleAfter2Seconds(10).then((r)=>{
//     console.log(r)
// })

// let sum = doubleAfter2Seconds(10) + doubleAfter2Seconds(20) + doubleAfter2Seconds(30)
// console.log(sum)


// function addPromise(){
//     return new Promise(resolve =>{
//         doubleAfter2Seconds(10).then((a)=>{
//             doubleAfter2Seconds(20).then((b)=>{
//                 doubleAfter2Seconds(30).then((c)=>{
//                     resolve(a+b+c)
//                 })
//             })
//         })
//     })
// }

// addPromise().then(r=>{
//     console.log(r)
// })
//#endregion
//async fns always returns a promise
//async code as sync code
async function addSync(){
    const a = await doubleAfter2Seconds(10);
    const b = await doubleAfter2Seconds(20);
    const c = await doubleAfter2Seconds(30);

    return a+b+c
}

addSync().then((sum)=>{
    console.log(sum)
})


//DOM
//BOM

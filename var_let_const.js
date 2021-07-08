//1.Scoping  let is block scoped  var is global
// function fun(){
//     var a = "LOL"
//     let b = "BUZZ"

//     console.log(a,' ',b)

//     {
//         c = "horse"
//         let d = "apple"
//     }
//     console.log(c)
//     // console.log(d)
// }

// fun()
// console.log("-------------------"+c)


// var funcs = [];
// //3 fncs and store in the array
// for (let i = 0; i < 3; i++) {
//     funcs[i] = function(){
//         console.log("My Func:"+i)
//     }
// }

// for (let j = 0; j < 3; j++) {
//     funcs[j]();
// }

//2. HOISTING TO THE TOP
// function fun(){
//     // var a;
//     //let a;

//     console.log(a)
//     let a = 101
//     // console.log(a)
// }


//3. redecleration
// let a = 111;
// let a = 222;
// console.log(a)




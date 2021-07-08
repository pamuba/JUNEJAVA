//1.Scoping  let is block scoped  var is global
function fun(){
    var a = "LOL"
    let b = "BUZZ"

    console.log(a,' ',b)

    {
        c = "horse"
        let d = "apple"
    }
    console.log(c)
    // console.log(d)
}

fun()
console.log("-------------------"+c)

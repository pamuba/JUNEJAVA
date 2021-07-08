//capturing outer variables variables + arguments

function outer(a,b){
    var outerA = 22;

    function inner(c){
        console.log(outerA);
        console.log(a);
        console.log(b);

        function innermost(){
            console.log("From Innermost:"+outerA)
        }
        innermost()
    }
    return inner;
}

var inn = outer(77,99);
setTimeout(
    ()=>{inn(33)}, 3000
)

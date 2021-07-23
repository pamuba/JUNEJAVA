export {}
let booleanVal: boolean = true;
let total: number = 0;
let name : string ="typescript";
// name = "false";

let data: string = `My name is ${name}
    I am a beginner
`

console.log(data)

let a:null = null
let u:undefined = undefined 

//null+undefined are subtypes of other types

let val1:boolean = null;
let val2:string = undefined;

let arr1: number[] = [1,2,3]
let arr2: Array<number> = [6,5,4]

//Tuple - array with different types
let person1:[string, number, string, [number]] = ["John", 22, "Sales",[22]]

//Enums
enum color{Red=5, Green, Blue}
let c: color = color.Green
console.log(c)


//any 
// let boo : any = 10;
// boo = true
// boo = "Hello"

// console.log(boo.name)
// boo()
// boo.toUpperCase();


//unknown
// let boo : unknown = 10;
// // boo = true
// // boo = "Hello"

// // console.log(boo.name)
// // boo()
// (boo as string).toUpperCase();


//function

// function add(num1:number, num2:number = 10){
//     return num1+num2
// }

// add(5, 10)
// // add(1 + 'a')
// add(3)

//interfaces

// interface Person {
//     firstName:string;
//     lastName?:string;
// }

// function fullName(person:Person){
//     console.log(`${person.firstName} ${person.lastName}`)
// }


// let p = {
//     firstName:"John",
// }

// fullName(p)

class Employee {
    public employeeName: string;
    constructor(name:string){
        this.employeeName = name;
    }
    greet(){
        console.log(`Good Morning ${this.employeeName}`)
    }
}

let emp1 = new Employee("John")
emp1.greet()

class Manager extends Employee{
    constructor(managerName: string) {
        super(managerName);
    }
    delegateWork(){
        console.log("Manager delegating Work")
    }
}

let m1 = new Manager("Supername");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
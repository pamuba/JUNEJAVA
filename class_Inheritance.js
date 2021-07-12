// class God{
//     hi(){
//         console.log("He is the GOD")
//     }
// }
// class Animal extends God{
//     constructor(name, height){
//         super();
//         this.name = name;
//         this.height = height;
//     }
//     hello(){
//         console.log(`Hello I am ${this.name} from the animal kingdom`)
//     }
// }
// // console.dir(Animal)
// let king = new Animal("Lion King", 4.5);
// console.log(king);
// king.hello();

// class Lion extends Animal{
//     constructor(name, height, color){
//         super(name, height)
//         this.color = color;
//     }
//     hello(){
//         console.log("From class Lion")
//     }
//     callParentello(){
//         super.hello()
//     }
// }

// let lion = new Lion("Tiger King", 6, "golden")
// lion.hello()
// lion.callParentello();

//////////////////////////////////////////////////////

class A{
    constructor(x){
        this.a = x
    }
}
class B extends A{
    constructor(x,y){
        super(x)
        this.b = y
    }
}
class C extends B{
    constructor(x,y,z){
        super(x,y)
        this.c = z
        console.log(`A:${this.a} B:${this.b} C:${this.c}`)
    }
}
obj = new C(11,22,33)
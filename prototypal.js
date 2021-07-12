// function Student(){
//     this.name = "John",
//     this.gender = "Male"
// }

// Student.prototype.age = 15;

// var std1 = new Student();
// // std1.age = 15;
// console.log(std1.age);

// var std2 = new Student();
// console.log(std2.age);

let dragon = {
    name:'Tanya',
    fire:true,
    fight(){
        return 9;
    },
    sing(){
        if(this.fire)
            return `I am ${this.name}, the breather of fire`
    }
}
let lizard = {
    name:'Kiki',
    // fire:true,
    fight(){
        return 1;
    }
}

//we want to borrow the sing fun for the lizard from dragon
// const singLizard = dragon.sing.bind(lizard)
// console.log(singLizard())

//PROTOYPAL INHERITANCE
lizard.__proto__ = dragon
console.log(lizard.sing())
console.log(lizard.fire)
console.log(lizard.fight())
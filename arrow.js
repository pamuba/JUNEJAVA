//1. no this, but can get it from the outer scope
//2. cannot used with new
//3. have no arguments
//4. no super

let group = {
    title : "Our Group",
    students:["John", "Jim", "Jeny"],

    showList(){
        // title = "My Title";
        this.students.forEach(
            student => console.log(this.title+':'+student)
            // function(student){
            //     console.log(this.title+':'+student)
            // }

        )
    }
}

group.showList();

var express = require('express')

var app = express()

app.use(express.static(__dirname+'/public'))

app.get('/contactlist', function(req, res){

    console.log("Server  received the request");

    var person1 = {
        name:"John",
        email:"john@gmail.com",
        number:'(111) 111-1111'
    }
    var person2 = {
        name:"JIll",
        email:"jill@gmail.com",
        number:'(222) 222-2222'
    }
    var person3 = {
        name:"James",
        email:"james@gmail.com",
        number:'(333) 333-3333'
    }
    var person4 = {
        name:"Sally",
        email:"sally@gmail.com",
        number:'(444) 444-4444'
    }
    var contactlist = [person1, person2, person3, person4]
    res.json(contactlist)
})

app.listen(3000)
console.log("Server listening @3000")

var express = require('express')
var mongojs = require('mongojs')
var db = mongojs('contactlist',['contactlist'])

var app = express()

//middlewares
app.use(express.static(__dirname+'/public'))
app.use(express.json())

app.get('/contactlist', function(req, res){

    db.contactlist.find(function(err, docs){
        if(!err){
            console.log(docs)
            res.json(docs)
        }
        else
           console.log("Error retrieving data from database")
    })
    
})
app.post('/contactlist', function(req, res){
    console.log(req.body)
    db.contactlist.insert(req.body, function(err, doc){
        res.json(doc)
    })
})

app.delete('/contactlist/:id', function(req, res){
    var id = req.params.id;
    db.contactlist.remove({_id:mongojs.ObjectId(id)}, function(err, doc){
        res.json(doc)
    })
})


app.get('/contactlist/:id', function(req, res){
    var id = req.params.id;
    console.log(id)
    db.contactlist.findOne({_id:mongojs.ObjectId(id)}, function(err, doc){
        console.log(doc)
        res.json(doc)
    })
})

app.put('/contactlist/:id', function(req, res){
    var id = req.params.id;
    db.contactlist.findAndModify({query:{_id:mongojs.ObjectId(id)},
        update:{$set:{name:req.body.name, email:req.body.email, number:req.body.number}},
        new:true},function(err, doc){
            res.json(doc) 
    })
})

app.listen(3000)
console.log("Server listening @3000")

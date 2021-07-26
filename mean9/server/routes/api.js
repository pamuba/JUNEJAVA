const express = require('express');
const router = express.Router()

//localhost:3000/api
router.get('/', function(req, res) {
    res.send('Api Works') 
});

module.exports = router;
const router = require('express').Router();
//          -----models
const Faang = require('../models/tech').Faang;
const Lang = require('../models/tech').Lang;
//          -----------

//GET request
router.get('/', (req, res, next)=>{
    res.send({request: 'GET'});
});

//POST request
router.post('/', (req, res, next)=>{
   Faang.create(req.body).then((savedItem)=>{
       res.send(savedItem);
   }).catch(next);
});

//PUT request
router.put('/:id', (req, res, next)=>{
    res.send({request: 'PUT'});
});

//DELETE request
router.delete('/:id', (req, res, next)=>{
    res.send({request: 'DELETE'});
});


module.exports = router;
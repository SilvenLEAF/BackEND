const router = require('express').Router();
//          -----models
const Faang = require('../models/tech').Faang;
const Lang = require('../models/tech').Lang;
//          -----------

//GET request
router.get('/:id', (req, res, next)=>{
    Faang.findOne({name: req.params.id}).then((foundItem)=>{
        res.send(foundItem);
    }).catch(err){
         next(err, req, res)
     };
});

//POST request
router.post('/', (req, res, next)=>{
   Faang.create(req.body).then((savedItem)=>{
       res.send(savedItem);
   }).catch(err){
         next(err, req, res)
     };
});

//PUT request
router.put('/:id', (req, res, next)=>{
    Faang.findOneAndUpdate({name: req.params.id}, req.body)
        .then(()=>{
            Faang.findOne({name: req.params.id})
                .then((updatedItem)=>{
                    res.send(updatedItem);
                })
        }).catch(err){
         next(err, req, res)
     };
});

//DELETE request
router.delete('/:id', (req, res, next)=>{
   Faang.findOneAndDelete({name: req.params.id})
    .then((deletedItem)=>{
        res.send(deletedItem);
    })
    catch(err){
         next(err, req, res)
     };
});


module.exports = router;

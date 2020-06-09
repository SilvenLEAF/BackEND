const router = require('express').Router();
//          -----models
const Faang = require('../models/tech').Faang;
const Lang = require('../models/tech').Lang;
//          -----------

//GET request
router.get('/:id', (req, res, next)=>{
    Faang.findOne({name: req.params.id}).then((foundItem)=>{
        res.send(foundItem);
    }).catch(next);
});

//POST request
router.post('/', (req, res, next)=>{
   Faang.create(req.body).then((savedItem)=>{
       res.send(savedItem);
   }).catch(next);
});

//PUT request
router.put('/:id', (req, res, next)=>{
    Faang.findOneAndUpdate({name: req.params.id}, req.body)
        .then(()=>{
            Faang.findOne({name: req.params.id})
                .then((updatedItem)=>{
                    res.send(updatedItem);
                })
        }).catch(next);
});

//DELETE request
router.delete('/:id', (req, res, next)=>{
   Faang.findOneAndDelete({name: req.params.id})
    .then((deletedItem)=>{
        res.send(deletedItem);
    })
    .catch(next);
});


module.exports = router;
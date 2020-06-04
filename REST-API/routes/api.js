const router = require('express').Router();


//GET request
router.get('/', (req, res, next)=>{
    res.send({request: 'GET'});
});

//POST request
router.post('/', (req, res, next)=>{
    res.send({request: 'POST'});
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
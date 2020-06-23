const router = require('express').Router();

router.get('/', (req, res)=>{
    res.send(`This is a GET request`);
});

router.post('/', (req, res)=>{
    res.send({alert: `This is a POST request`, body: req.body});
});

router.put('/', (req, res)=>{
    res.send(`This is a PUT request`);
});

router.delete('/', (req, res)=>{
    res.send(`This is a DELETE request`);
});


module.exports = router;
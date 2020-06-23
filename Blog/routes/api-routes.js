/* ...............................DB */
const Blog = require('../models/blog');

// -----------------------------------
const router = require('express').Router();

router.get('/', (req, res)=>{
    res.send(`This is a GET request`);
});

router.post('/', (req, res)=>{
    Blog.create(req.body)
        .then((createdItem)=>{
            res.send(createdItem);
        });
});

router.put('/', (req, res)=>{
    res.send(`This is a PUT request`);
});

router.delete('/', (req, res)=>{
    res.send(`This is a DELETE request`);
});


module.exports = router;
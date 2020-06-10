const router = require('express').Router();
const fs = require('fs');

router.get('/', (req, res, next)=>{
    try{
        //send HTML (Stream + Pipe)
        const myReadStream = fs.createReadStream(__dirname +'/../client/index.html', 'utf8');
        myReadStream.pipe(res);
    } catch(next){
        next();
    }
})

router.post('/', (req, res, next)=>{
    console.log(req.body);
    res.send({request: 'POST', data: req.body});
})

router.put('/', (req, res, next)=>{
    res.send('PUT');
})

router.delete('/', (req, res, next)=>{
    res.send('DELETE');
})

module.exports = router;
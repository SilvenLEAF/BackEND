require('dotenv').config()




const express = require('express');




const app = express();
app.set('view engine', 'ejs')
app.use(express.static(`${__dirname}/public`))


app.get('/', (req, res, next)=>{
  try {
    
    res.render('Home', { publishableKey: process.env.PUBLISHABLE_KEY })

  } catch (err) {
    next(err, req, res)
  }
})















// ERRORS HANDLING
app.use((err, req, res)=>{
  console.log(err)
  req.status(500).end()
})






const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`)
})
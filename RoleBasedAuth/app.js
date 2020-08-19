const express = require('express');
const app = express();
const { users } = require('./data');
const { authUser } = require('./basicAuth')





app.use(express.json());
app.use(setUser);



app.use('/projects', require('./routes/projects.js'));

app.get('/', (req, res)=>{
  res.send(`Home page!`)
})

app.get('/dashboard', authUser, (req, res)=>{
  res.send(`Dashboard page!`)
})

app.get('/admin', (req, res)=>{
  res.send(`Admin page!`)
})



/* --------------------------------
.          own middlewares
-------------------------------- */
function setUser(req, res, next){
  const userId = req.body.userId;
  if(userId){
    req.user = users.find( user => user.id === userId);
  }
  next();
}



// ---------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
})
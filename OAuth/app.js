const express = require('express');
const passportSetup = require('./config/passportSetup');



// firing express app
const app = express();
app.use(express.json());



/* --------------------------------
.           Routes
-------------------------------- */
app.use('/auth', require('./routes/authRoutes'));



// --------------------------LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
})

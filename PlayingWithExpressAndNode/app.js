const express = require('express');


// firng express app
const app = express();
app.use(express.json());



/* ---------------------------------
.            routes
--------------------------------- */









// -------------------------------------LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port${PORT}`);
});
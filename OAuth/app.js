const express = require('express');



// firing express app
const app = express();



/* --------------------------------
.           middlewares
-------------------------------- */

// --------------------------LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
})
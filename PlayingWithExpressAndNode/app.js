const fs = require('fs');


/* -------------------------------
.         1)CREATE directory
.         2)REMOVE directory
.         3)CREATE file
.         4)READ file
.         5)REMOVE file
------------------------------- */


//-------------CREATING DIRECTORY
fs.mkdir('NEW DIRECTORY', (err)=>{
  if(err) throw err;
  console.log(`New directory created!!`);    
})




//-------------REMOVING DIRECTORY
fs.rmdir('NEW DIRECTORY', (err)=>{
  if(err) throw err;
  console.log(`New directory removed!!`);    
})




//-------------CREATING FILE
fs.writeFile('NEW FILE.js', '', (err)=>{
  if(err) throw err;
  console.log(`New file created!!`);    
})





//-------------READ FILE
fs.readFile('NEW FILE.js', 'utf8', (err, data)=>{
  if(err) throw err;
  console.log(data);    
})




//-------------REMOVE FILE
fs.unlink('NEW FILE.js', (err)=>{
  if(err) throw err;
  console.log(`New file deleted!!`);    
})
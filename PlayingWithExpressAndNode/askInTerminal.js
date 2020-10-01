
/* ------------------------------------
.      creating the ask engine
------------------------------------ */
const readline = require(`readline`).createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`Started GameZONE`)








/* ------------------------------------
.               asking
------------------------------------ */
readline.question(`What's your name Mate?\n`, name=> {
  console.log(`Glad to meet you ${name}!`)
  readline.close()
}); 

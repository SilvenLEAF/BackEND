const dns = require('dns');


/* -------------------------------------------
.           finds the IP address
.returns undefined if it's unused domain name
------------------------------------------- */
dns.lookup(`localhost`, (err, addresses, family)=>{
  console.log({addresses, family})
})
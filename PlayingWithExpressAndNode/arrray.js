console.log(`GAMEZONE Begins...`)

const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]



/* -------------------------------------------
.               forEach()

.   it is the array verion of for loop
.   you can change the main array if you want
.   not executed for empty arrays





.    myArr.forEach((item, index, arr)=>{
.              you can access thisValue here
.     }, thisValue)



.      it is just like this....


.      let thisValue = 0;
.      myArr.forEach((item, index, arr)=>{...access thisValue}) 

------------------------------------------- */
myArr.forEach((item, index, arr)=>{
  return thisValue+= item;
}, thisValue=1)

console.log(thisValue)

































/* -------------------------------------------
.               reduce()

.    it reduces array into a single value
.    does not execute for empty arrays
.    does not change the original array


.    myArr.reduce((total, item, index, arr)=>{
.              it returns the result into initialValue.
.              when complete, it returns the final (initialValue) total value
.              when we change total, it changes initialValue (a.k.a total)
.     }, initialValue)



------------------------------------------- */
const reduce = myArr.reduce((total, item, index, arr)=>{
  return total + item;
}, 0)

console.log(reduce)

const myForm = document.querySelector('#my-form');

const myInput = document.querySelector('#my-input');
const submitBtn = document.querySelector('.submit-btn');


myForm.addEventListener('submit', async (e)=>{
    e.preventDefault();

    const name = myInput.value;    
      
    const response = await fetch('http://localhost:3000/crud', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name})
    })
    

     const data = await response.json()
   
        console.log(data);
})

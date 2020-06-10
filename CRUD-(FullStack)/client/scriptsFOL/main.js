const myForm = document.querySelector('#my-form');

const myInput = document.querySelector('#my-input');
const submitBtn = document.querySelector('.submit-btn');


myForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const name = myInput.value;    
      
    fetch('http://localhost:3000/crud', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name})
    }).then((response)=>{
       return response.json()
    }).then((text)=>{
        console.log(text);
    })
})
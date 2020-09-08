
    
    const stripeHandler = StripeCheckout.configure({
      key: stripePublicKey,
      locale: 'auto',
      token: (token)=>{

        console.log("token", token)
        
      }
    })




    const price = 500;

    const myPayButton = document.querySelector('#myPayButton');



    myPayButton.addEventListener('click', (e)=>{
      stripeHandler.open({
        amount: price
      })
    })





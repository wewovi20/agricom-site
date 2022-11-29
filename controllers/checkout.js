


 //const qtyV = document.querySelector('.quantity').value
// const span = document.querySelector('.total')
// qtyV.addEventListener('change', function () {
//     totalPriceP = qtyV * item.price
//     span.textContent = totalPriceP
// })

const cartItem=  JSON.parse(localStorage.getItem("carts"))
const totalCheck = document.getElementById('checkTotal')
console.log(totalCheck)
let checkOutTotal = 0
let check
// addEventListener("load", function(){
  let productId
   const subT = document.getElementById('subTotal')
   const total = document.getElementById('total')
   const checktotal = document.getElementById('checkTotal')
  const cartNumber = document.getElementById('cartNumber')
  let totalIndividual = 0
  
let delevery = 0
let discount = 0
  
  cartNumber.innerHTML = `[${cartItem.length}]`
  for(let i = 0; i<= cartItem.length; i++){
    console.log(cartItem[i].price)
    subTotal = cartItem[i].price * cartItem[i].quantityV,
    check = cartItem[i].price * cartItem[i].quantityV,
    checkOutTotal += check
    totalIndividual += subTotal
    totalCheck.innerHTML = `GHC ${checkOutTotal}`
    subT.innerHTML = `Ghc ${totalIndividual}`
    }
    const terms = document.getElementById('check').value

// })
// const cartItems= await JSON.parse(localStorage.getItem("carts"))

const buttonPay = document.getElementById('payCheck')
buttonPay.addEventListener('click', payWithPaystack, false);

function payWithPaystack() {
    console.log(terms)
  var handler = PaystackPop.setup({
    key: 'YOUR_PUBLIC_KEY', // Replace with your public key
    email: document.getElementById('email').value,
    amount: checkOutTotal, // the amount value is multiplied by 100 to convert to the lowest currency unit
    currency: 'GHS', // Use GHS for Ghana Cedis or USD for US Dollars
   
    callback: function(response) {
      //this happens after the payment is completed successfully
      var reference = response.reference;
      alert('Payment complete! Reference: ' + reference);
      // Make an AJAX call to your server with the reference to verify the transaction
    },
    onClose: function() {
      alert('Transaction was not completed, window closed.');
    },
  });
  handler.openIframe();
}
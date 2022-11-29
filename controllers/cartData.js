let productsIds
let allTotal = 0
let quant 
const cartItem=  JSON.parse(localStorage.getItem("carts"))

// addEventListener("load", function(){
  let productId
   
  
   const subT = document.getElementById('subtotal')
   const total = document.getElementById('total')
   
  const cartNumber = this.document.getElementById('cartNumber')
  let totalIndividual = 0
  
let delevery = 0
let discount = 0
  console.log(cartItem.length)
  cartNumber.innerHTML = `[${cartItem.length}]`
  for(let i = 0; i<= cartItem.length; i++){
    
       productId = cartItem[i]._id,
       quant = cartItem[i].quantityV 
         subTotal = cartItem[i].price * cartItem[i].quantityV,
        // check = cartItem[i].price * cartItem[i].quantityV,
      this.document.getElementById("cart-body").innerHTML+=  `<tr class="text-center" key="${cartItem[i]._id}">
        <td class="product-remove"><button onclick="removeFromCart('${cartItem[i]._id}')"><span class="ion-ios-close"></span></button></td>
        
        <td class="image-prod"><div class="img" style="background-image:url(${cartItem[i].img});"></div></td>
        
        <td class="product-name">
            <h3>${cartItem[i].productName}</h3>
            <p>${cartItem[i].desc}</p>
        </td>
        
        <td class="price">Ghc ${cartItem[i].price}</td>
        
        <td class="quantity">
            <div class="input-group mb-3">
             <input type="number" name="quantity" id="quantityV" class="quantity form-control input-number" value="${cartItem[i].quantityV}" disabled>
          </div>
      </td>
        
      <td class="total">Ghc ${subTotal}</td>
      </tr>`
      totalIndividual += subTotal
     
      subT.innerHTML = `Ghc ${totalIndividual}`
      allTotal = totalIndividual + delevery - discount
      total.innerHTML = `GHC ${allTotal}`
      

    }
    
// })




// const cartItems= await JSON.parse(localStorage.getItem("carts"))
// const user = JSON.parse(localStorage.getItem('user'))
//   const buttonPay = document.getElementById('payCheck')
  

//   buttonPay.addEventListener('click', function (e){
//       e.preventDefault()
//       const name = document.getElementById('name')
//       const country = document.getElementById('country')
//       const street = document.getElementById('street')
//       const houseNumber = document.getElementById('houseNumber')
//       const city = document.getElementById('city')
//       const postalCode = document.getElementById('postalCode')
//       const phone = document.getElementById('phone')
//       const email = document.getElementById('email')
//       for (let index = 0; index < cartItem.length; index++) {
//        productsIds = cartItem[index]._id
        
//       }
// console.log(productsIds)
//       let body = {
//         userId: user._id,
//         products:[{
//          productsIds,
//          quant
//         }
//         ],
//          amount: allTotal,
//          address: {
//           name: name.ariaValueMax,
//           country: country.ariaValueMax,
//           street: street.value,
//           houseNumber: houseNumber.value,
//           city: city.value,
//           postalCode: postalCode.value,
//           phone: phone.value,
//           email: email.value
//          }
//       }
//       console.log(body)
//       fetch('http://localhost:4000/agricom/orders',{
//         method: 'POST',
//         mode: 'cors',
//         headers:{
//             'Accept':'*',
//             'Content-Type': 'application/json',
//             'token': `Bearer ${user.accessToken}`,
//         },
//         body: JSON.stringify(body)
//       })
//       .then(()=>{
//         window.alert('Order placed successfully')
//         window.location.href = './shop.html'
//       })
//     })


// function clearCart(){
//   localStorage.removeItem('carts')
//   location.href = "shop.html"
// }


// const cartItem=  JSON.parse(localStorage.getItem("carts"))
// let array = []
// function removeFromCart(productId){
//   for (var i =0; i< cartItem.length; i++) {
// array.push(cartItem[i])
//     //let item = cartItem[i];
//     array.filter(item => item.id !== productId);
//    console.log(productId)
   
// }
//localStorage.setItem('items', JSON.stringify(filtered));
// }


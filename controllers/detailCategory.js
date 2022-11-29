let productId;
function Card(backgroundImage, name, price) {
    const CardRow = document.querySelector('#getProduct')
    //card itself
    const card = document.createElement('div')
    CardRow.appendChild(card)
    card.classList.add("col-md-6", "col-lg-3", "ftco-animate")
    //div that houses the card
    const product = document.createElement('div')
    card.appendChild(product)
    product.className = 'product'
    //link making a card 
    const discountLink = document.createElement('a')
    product.appendChild(discountLink)
    discountLink.className = 'img-prod'
    discountLink.href = '#'
    //image of product
    const discountImg = document.createElement('img')
    discountLink.appendChild(discountImg)
    discountImg.className = 'img-fluid'
    discountImg.src = backgroundImage
    discountImg.alt ='product image'
    //span 
    const discountSpan = document.createElement('span')
    discountLink.appendChild(discountSpan)
    discountSpan.className= 'status'
    discountSpan.innerHTML = '30%'
    //overlay div
    const discountOverlayDiv = document.createElement('div')
    discountLink.appendChild(discountOverlayDiv)
    discountOverlayDiv.className = "overlay"
    //product name
    const productName = document.createElement('div')
    product.appendChild(productName)
    productName.classList.add("text" ,"py-3", "pb-4", "px-3", "text-center")
    // product name text
    const productNameText = document.createElement('h3')
    productName.appendChild(productNameText)
    //product name text a link
    const productnamelink = document.createElement('a')
    productNameText.appendChild(productnamelink)
    productnamelink.innerHTML = name
    productnamelink.href = '#'
    //pricing
    const productPricing = document.createElement('div')
    productName.appendChild(productPricing)
    productnamelink.className = 'd-flex'
//pricing text
    const productPricingText = document.createElement('div')
    productPricing.appendChild(productPricingText)
    productPricingText.className ='pricing'
    //pricing paragraph
    const productPricingP = document.createElement('p')
    productPricingText.appendChild(productPricingP)
    productPricingP.className = 'price'
    //span
    const productPricingSpan = document.createElement('span')
    productPricingP.appendChild(productPricingSpan)
    productPricingSpan.classList.add("mr-2", "price-dc")
    productPricingSpan.innerHTML = 'GHC 120.00'
    //second span
    const productPricingSpan2 = document.createElement('span')
    productPricingP.appendChild(productPricingSpan2)
    productPricingSpan2.className = 'price-sale'
    productPricingSpan2.innerHTML = price
    //hover tools
    const productHover = document.createElement('div')
    productHover.classList("bottom-area", "d-flex", "px-3")
    productName.appendChild(productHover)
    //hover div child
    const productHoverChild = document.createElement('div')
    productHoverChild.classList("m-auto", "d-flex")
    productHover.appendChild(productHoverChild)
    //hover div child cart link
    const productHoverCart = document.createElement('a')
    productHoverCart.classList("add-to-cart", "d-flex", "justify-content-center", "align-items-center", "text-center")
    productHoverChild.appendChild(productHoverCart)
    productHoverCart.href = "#"
    // product cart span
    const productHoverCartSpan = document.createElement('span')
    productHoverCart.appendChild(productHoverCartSpan)
    // icon
    const productHoverCartSpanI = document.createElement('i')
    productHoverCartSpan.appendChild(productHoverCartSpanI)
    productHoverCartSpanI.className = 'ion-ios-menu'
    
    //hover div child cart link
    const productHoverBuy= document.createElement('a')
    productHoverBuy.classList("buy-now", "d-flex", "justify-content-center", "align-items-center", "mx-1")
    productHoverChild.appendChild(productHoverBuy)
    productHoverCart.href =  `../productDetail.html?id=${productId}`
    // product cart span
    const productHoverBuySpan = document.createElement('span')
    productHoverBuy.appendChild(productHoverBuySpan)
    // icon
    const productHoverBuySpanI = document.createElement('i')
    productHoverBuySpan.appendChild(productHoverBuySpanI)
    productHoverBuySpanI.className = 'ion-ios-cart'

     //hover div child cart link
     const productHoverLike= document.createElement('a')
     productHoverLike.classList("heart", "d-flex", "justify-content-center", "align-items-center")
     productHoverChild.appendChild(productHoverLike)
     productHoverCart.href = "#"
     // product cart span
     const productHoverLikeSpan = document.createElement('span')
     productHoverLike.appendChild(productHoverLikeSpan)
     // icon
     const productHoverLikeSpanI = document.createElement('i')
     productHoverLikeSpan.appendChild(productHoverLikeSpanI)
     productHoverBuySpanI.className = 'ion-ios-heart'
}
window.addEventListener('load', function(){

    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id');
    
    var category;
    
    fetch(`http://localhost:4000/agricom/products/${id}`)
    .then(response => response.json())
    .then(data =>{
        
        category = data.category
    
    })
    .catch((error)=>window.alert(error))
})
fetch(`http://localhost:5000/agricom/products?category=${category}`,{
    headers: {
        token: `Bearer ${user.accessToken}`,
      },
})
.then((response) => response.json())
  .then((data) => {                                                                                                                                                                                                                         
   // console.log(data);
    for (i = 0; i < data.length; i++) {  
        console.log(i)
        productId = data[i]._id
      fetchData(
         
        data[i].name,
        data[i].price,
        data[i].img,
    );
    }
  })
  .catch((error) => console.log(error));
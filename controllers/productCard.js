
 let CardRow = document.querySelector('.cardrow')
console.log(CardRow)
let newData
const user = JSON.parse(localStorage.getItem("user"));
fetch(`http://localhost:4000/agricom/products/?new=true`,{
    mode: 'cors',
    headers: {
        token: `Bearer ${user.accessToken}`,
    },
})
.then((response) => response.json())
    .then((data) => {  
    let html 
	newData=data
  html= data.map(el => {
	
console.log(el)
      return `
          	<div class="col-md-6 col-lg-3">
    				<div class="product">
    					<a href="product-single.html?id=${el._id}" class="img-prod">
							<img class="card-img" src="${el.img}" alt="Colorlib Template">
    						<span class="status">30%</span>
    						<div class="overlay"></div>
    					</a>
    					<div class="text py-3 pb-4 px-3 text-center">
    						<h3><a href="#">${el.productName}</a></h3>
    						<div class="d-flex">
    							<div class="pricing">
		    						<p class="price"><span class="mr-2 price-dc"></span><span class="price-sale">Ghc ${el.price}</span></p>
		    					</div>
	    					</div>
	    					<div class="bottom-area d-flex px-3">
	    						<div class="m-auto d-flex">
	    							<a href="#" class="add-to-cart d-flex justify-content-center align-items-center text-center">
	    								<span><i class="ion-ios-menu"></i></span>
	    							</a>
	    							<button id="addBTN" class="buy-now d-flex justify-content-center align-items-center mx-1">
	    								<span><i class="ion-ios-cart"></i></span>
	    							</button>
	    							<a href="#" class="heart d-flex justify-content-center align-items-center">
	    								<span><i class="ion-ios-heart"></i></span>
	    							</a>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
      `
//    Card(element.img, element.productName, element.price)
  });

        return CardRow.innerHTML=html
    
  })
  .catch((error) => console.log(error));
let add = document.getElementById('addBTN')
  btn.addEventListener("click",async() => {
    let allItems =await JSON.parse(localStorage.getItem("carts")) || []
    let newItems= [newData,...allItems]
    localStorage.setItem("carts", JSON.stringify(newItems))
    window.location.href = "cart.html"
    
    
})


let newData
let productQuantity

window.addEventListener('load', function(){
    const btn=document.getElementById("add-to-cart")
    //const quantityValue = this.document.getElementById('quantity').value
    const quantityV = this.document.getElementById('quantityV').value
    //console.log(quantityValue)
    console.log(quantityV)
    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id');
    
    
    var _id;
    
    fetch(`http://localhost:4000/agricom/products/${id}`)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        _id = data._id;
        let descriptionDetail = document.getElementById('descDetail')
        let nameDetail = document.getElementById('nameDetail')
        let nameDetail1 = document.getElementById('nameDetail1')
        let linkImage = document.getElementById('mainImage')
        let image = document.getElementById('imageBanner')
        let priceDetail = document.getElementById('priceDetail')
        let mainImage = this.document.getElementById('main-image')

        image.style.backgroundImage = `url(${data.img})`
        mainImage.src = data.img
        linkImage.href = data.img
        descriptionDetail.innerHTML = data.desc
        nameDetail.innerHTML =data.productName
        nameDetail1.innerHTML =data.productName
        priceDetail.innerHTML = `Ghc ${data.price}`
        
        newData = {_id :data._id,img: data.img,productName: data.productName,desc: data.desc, price:data.price,quantityV: quantityV}
            

    })
    .catch((error)=>window.alert(error))

    btn.addEventListener("click",async() => {
      
        let allItems =await JSON.parse(localStorage.getItem("carts")) || []
        
        let newItems= [newData,...allItems]
        localStorage.setItem("carts", JSON.stringify(newItems))
        //window.location.href = "cart.html"
        this.location.reload()
        
    })

})





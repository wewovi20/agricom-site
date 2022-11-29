const div = document.getElementById("tutorialDiv")
fetch('http://localhost:4000/agricom/tutorials')
.then((response)=>response.json())
.then((data)=>{
  
  let html = data.forEach(el => {
    
       div.innerHTML += `<div class="col-md-12 d-flex ftco-animate">
        <div class="blog-entry align-self-stretch d-md-flex">
          <a href="blog-single.html" class="block-20" style="background-image: url('./images/image_1.jpg');">
          </a>
          <div class="text d-block pl-md-4">
              <div class="meta mb-3">
              <div><a href="#">July 20, 2019</a></div>
              <div><a href="#">Admin</a></div>
              <div><a href="#" class="meta-chat"><span class="icon-chat"></span> 3</a></div>
            </div>
            <h3 class="heading"><a href="#">${el.title}</a></h3>
            <p class="text-primary">${el.desc}</p>
            <p><a href="blog-single.html" class="btn btn-primary py-2 px-3">Read more</a></p>
          </div>
        </div>
      </div>`
    });

})
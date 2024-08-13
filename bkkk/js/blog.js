console.log("hello")

const blog = document.getElementById('blog')

let arr = [1, 2, 3, 4, 5, 6, 7, , 8, 9,10,11]

arr.forEach(i => {
    blog.innerHTML += `
    
    <div class="card" style="width: 18rem;">
      <img src="../images/hm-1.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
      </div>
    </div>
    
    `
});

const post=()=>{
    console.log("post")
}
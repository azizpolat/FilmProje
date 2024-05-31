const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const widtRadio = Math.floor(window.innerHeight /300)
  let clickCounter = 0;
  const imageCount = movieList[i].querySelectorAll("img").length;
   arrow.addEventListener("click", function () {
      clickCounter++;
    if (imageCount - (4 + clickCounter) + (4-widtRadio) >= 0) {
      movieList[i].style.transform = `translateX(${
        movieList[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
   
  }else{
    movieList[i].style.transform = "translateX(0)"
    clickCounter = 0;
  }
});
});


const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.sidebar,sidebar i,.toggle,.toggle-ball,.movie-list-filter,.movie-list-title")
console.log(items);
ball.addEventListener("click",function(){
   items.forEach((item) => item.classList.toggle("active"));
    
})
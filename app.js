let slider = document.querySelector(".slider");
slider.addEventListener("wheel", (event) => {
  event.preventDefault();


  slider.scrollLeft += event.deltaY;

});
let japanImage = document.querySelector(".japan-img");
let japan1 = document.querySelector(".japan");
let japan2 = document.querySelector(".japan2");
let japan3 = document.querySelector(".japan3");


japan1.addEventListener("click", (event) =>{
    japanImage.src = "betterStartegy.png";
    // japanImage.style.width = "100%";
    console.log("hi")
})
japan2.addEventListener("click", (event) =>{
    japanImage.src = "japan.jpg";
    console.log('2')
})
japan3.addEventListener("click", (event) =>{
    japanImage.src = "japan2.jpg";
    console.log('3')
})
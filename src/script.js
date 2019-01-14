
console.log(screen.width, screen.height)
console.log(window.innerWidth, window.innerHeight)
let image = document.querySelector('img')

image.width = screen.width/(1.8)
image.height = screen.height/(1.8)

setTimeout(()=> {
    document.querySelector('body').style.overflowY = "auto"
},3000)

$(document).ready(()=>{
    console.log("hey")
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            }
        }
    });
});


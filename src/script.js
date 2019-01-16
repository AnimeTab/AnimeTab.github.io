
console.log(screen.width, screen.height)
console.log(window.innerWidth, window.innerHeight)

let image = document.querySelector('.naruto')

image.width = screen.width/(1.8)
image.height = screen.height/(1.8)

let post = document.querySelector('.directions')

post.width = screen.width/(2.5)

setTimeout(()=> {
    document.querySelector('body').style.overflowY = "auto"
},2000)

// Your code goes here
//EL signifies event listener


// ~~~~~~Navigation Bar ELs~~~~~~~~~~~~~~~~~~~

//const navBarAnchors = document.querySelectorAll('.nav-link')
const navBarAnchors = document.querySelector('.nav')
    // console.log(navBarAnchors)
const navContainer = document.querySelector('.nav-container')

navBarAnchors.addEventListener('dblclick', event => {
    console.log('dbl click is working')
    navContainer.style.backgroundColor ="dodgerblue"
    
})
navContainer.addEventListener('mouseover', event => {
    console.log('mouseover is working')
    navContainer.style.backgroundColor = "white"
    event.stopPropagation()
})
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~Header ELs~~~~~~~~~~~~~~~~~~~


const intro = document.querySelector('.intro p')
    // console.log(intro)
intro.addEventListener('copy', event => {
    console.log('highlighted area has been copied to clipboard')
    intro.style.backgroundColor = " #003d66";
})

intro.addEventListener('mouseleave', event => {
    console.log('reverted to original color')
    intro.style.backgroundColor = "white"
})

const introImg = document.querySelector('.intro img')
    console.log(introImg)

window.addEventListener('scroll', event => {
    console.log("Fun Bus doesnt like to be scrolled past")
    introImg.width = "100"
})

window.addEventListener('resize', event => {
    console.log('change in screen size bro')
    introImg.width = "300px"
})





//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~Header ELs~~~~~~~~~~~~~~~~~~~
const footer = document.querySelector('footer p')
    console.log(footer)

footer.addEventListener('contextmenu', event => {
    console.log('footer text selected')
    footer.style.fontFamily = "cursive";
})

footer.addEventListener('mouseout', event => {
    console.log('footer text unselected')
    footer.style.fontFamily = "Impact,Charcoal,sans-serif";
})
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~TExt Els~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const inputValue = document.querySelector('.text-content input')
    console.log(inputValue)

const textWords = document.querySelector('.text-content p')
    console.log(textWords)


inputValue.addEventListener('select', event => {
    console.log('color change of text')
    textWords.style.color = "#cc00cc"
})

textWords.addEventListener('drag', event =>{
    console.log('drag text')
    textWords.style.color = "red"
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
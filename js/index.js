// Your code goes here
//EL signifies event listener


// const homeAnchor = document.querySelector('.home-link')

// homeAnchor.addEventListener('mouseover', event =>{
//   console.log(`A link has been moused over.`)
// })


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




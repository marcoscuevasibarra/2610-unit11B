// inject current year in footer
const time = new Date();
console.log(time.getFullYear())
document.querySelector('#year').textContent = time.getFullYear();





// get me a list of all the items to watch
const myListOfItems = document.querySelectorAll('section')

// a comma deliniated list of name/value pairs controlling how the observer works - cambia a las secciones que dividen la screen




let observerOptions = {
    //null is the default and references the viewport
    root: null,
    //alters the viewport. negative values decrease the size.
    rootMargin: '0px 0px -20px 0px',
    //0 is barely showing, 1 is fully showing - el 0.25 es el porcentaje que se deja ver en la screen
    threshold: .25
  }

// AllItems is a list of all elements being watched
const myObserver = new IntersectionObserver(allItems => {
    allItems.forEach(singleItem => {
        if (singleItem.isIntersecting){
            hiliteNav(singleItem.target)
        }
    })
}, observerOptions)

// function to hilight the current navigation items - se pone ctive al final porque es la pagina activa , ojo tenia fix, tiene que match las tres active en esta parte
function hiliteNav(x) {
	document.querySelector('.active').classList.remove('active');
	let theid = x.getAttribute('id');
	let newActiveLink = document.querySelector(`[href="#${theid}"]`)
	newActiveLink.parentElement.classList.add('active');
}

//call the function for each element in the list
myListOfItems.forEach(item => {
    myObserver.observe(item)
});


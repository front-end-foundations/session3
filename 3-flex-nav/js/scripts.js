var gear = document.querySelector('.fa-gear')
var options = document.querySelector('.account-dropdown ul')

gear.addEventListener('click', showOptions)

function showOptions(){
  options.classList.toggle('active')
}

var mainNav = document.querySelectorAll('.site-nav li a')

mainNav.forEach( navItem => navItem.addEventListener('click', setActive))

// for ( var i = 0; i < mainNav.length; i++){
//   mainNav[i].addEventListener('click', setActive)
// }

function setActive() {
  makeInactive()
  event.target.classList.add('active')
  event.preventDefault()
}

function makeInactive() {
  console.log('boo')
  mainNav.forEach(navItem => navItem.classList.remove('active'));
}
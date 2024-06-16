/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

// Menu show
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
// Menu Hide
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener(
  "scroll",
  shadowHeader
)
  /*=============== EMAIL JS ===============*/

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = ()=>{
  const scrollUp= document.getElementById('scroll-up')
  this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
                    :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections= document.querySelectorAll('section[id]')
const scrollActive =() =>{
const scrollDown = window.scrollY

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
  sectionTop = current.offsetTop - 58,
  sectionId = current.getAttribute('id'),
  sectionsClass = document.querySelector('.nav__menu a[href*='+ sectionId + ']')

  if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
    sectionsClass.classList.add('active-link')
  }else{
    sectionsClass.classList.remove('active-link')
  }
})
}
window.addEventListener('scroll', scrollActive)


/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-regular fa-sun '
// Previously selected topic (if user selected) 
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' :'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-regular fa-moon' :'fa-regular fa-sun '

// We validate if the user previously chose a topic

if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
themeButton.classList[selectedIcon === 'fa-regular fa-moon' ? 'add' : 'remove'](iconTheme)
}
// Activate / deactivate the theme manually with the button 
themeButton.addEventListener('click', () => {
// Add or remove the dark/icon theme
document.body.classList.toggle (darkTheme)
themeButton.classList.toggle(iconTheme)

// We save the theme and the current icon that the user chose
LocalStorage.setItem('selected-theme', getCurrentTheme())
LocalStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
// ScrollReveal().reveal('.home__perfil');

const sr= ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2000,
  delay:300,
  reset:true
})

sr.reveal(`.home__perfil, .about__image, .contact__mail , .section__title-1, .myMix__card`,{origin: 'right'})
sr.reveal(`.home__name, .home__info, .about__container .section__title-1, .about__info, .section__title-2, .contact__social, .contact__data`,{origin: 'left'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})

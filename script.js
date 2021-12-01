'use strict'

document.addEventListener('DOMContentLoaded', () =>{


    const hamburgerMenu = document.querySelector('.mob-menu'),
    desktopMenu = document.querySelector('.wrapper-menu');


hamburgerMenu.addEventListener('click',(event)=>{
  event.preventDefault();
 
  desktopMenu.classList.toggle('hamburger-menu-style');
})

})




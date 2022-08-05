@@include('swiper-bundle.js');
@@include('parallax-mouse.min.js');
@@include('wow.min.js');

"use strict";

document.addEventListener('DOMContentLoaded', function(){

    // работа меню в мобильной версии
    let btnOpenMenu = document.querySelector('.btn__open-menu');
    let navBox = document.querySelector('.nav-box');
    let body = document.querySelector('body');
    let btnCross = document.querySelector('.btn__cross');  

    function showMenu(){
        console.log('show');
        body.classList.add('fixed');
        navBox.classList.add('nav-box-show');
    }
    function hideMenu(){
        console.log('hide');
        body.classList.remove('fixed');
        navBox.classList.remove('nav-box-show');
    }
    btnOpenMenu.addEventListener('click', showMenu); 
    btnCross.addEventListener('click', hideMenu);
 
    //движение по якорям
let arAnchors = document.querySelectorAll('.anchor'); 
arAnchors.forEach(anchor=>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);
        let currentElement = document.querySelector('#' + href); 
        destination = currentElement.getBoundingClientRect().top
        if(navBox.classList.contains('nav-box-show')){
            hideMenu();
            window.scrollBy({
                top: destination,
                behavior: 'smooth'
              });
        }else{
            window.scrollBy({
                top: destination,
                behavior: 'smooth'
              });
        }
        
    });
});
 

  //   #technoslider - код слайдера ныне не активного
  // let swiperTechnologyLine = new Swiper('.technology-line', {
  //   // Optional parameters 
  //   slidesPerView: 7, 
  //   freeMode: true, 
  //   loop: true,  
  //   speed: 3000,
  //   simulateTouch: false,
  //   centeredSlidesBounds: true,
  //   spaceBetween: 10,
  //   freeMode: true,
  //   centeredSlides: true,
  //       autoplay: {
  //         delay: 1000,
  //         disableOnInteraction: false,
  //       } 
  // });

  //подключаю анимацию 
  let wow = new WOW();
  wow.init();

  //если нужен будет паралакс декоративного элемента в секции Преимущества, раскомментиовать код
// function candyDance(){
//     if(document.documentElement.scrollWidth  > 1250){
//         console.log(document.documentElement.scrollWidth);
//         parallaxMouse({ elements: '.candy-1', moveFactor: -100, wrap: '.advantages-section'});
//         parallaxMouse({ elements: '.candy-2', moveFactor: 100, wrap: '.advantages-section'});
//         parallaxMouse({ elements: '.candy-3', moveFactor: 60, wrap: '.advantages-section'});
//         parallaxMouse({ elements: '.candy-4', moveFactor: -80, wrap: '.advantages-section'});
//         parallaxMouse({ elements: '.candy-5', moveFactor: -50, wrap: '.advantages-section'});
//         parallaxMouse({ elements: '.candy-6', moveFactor: 50, wrap: '.advantages-section'});
//         parallaxMouse({ elements: '.candy-7', moveFactor: 140, wrap: '.advantages-section'});
//         parallaxMouse({ elements: '.candy-8', moveFactor: -140, wrap: '.advantages-section'});
//         parallaxMouse({ elements: '.candy-9', moveFactor: 60, wrap: '.advantages-section'});
//         parallaxMouse({ elements: '.candy-10', moveFactor: -120, wrap: '.advantages-section'});
//         parallaxMouse({ elements: '.candy-11', moveFactor: 70, wrap: '.advantages-section'});
      
//         parallaxMouse({ elements: '.candy-photo-1', moveFactor: -10, wrap: '.advantages-section'});
//         parallaxMouse({ elements: '.candy-photo-2', moveFactor: 18, wrap: '.advantages-section'});
//         parallaxMouse({ elements: '.candy-photo-3', moveFactor: -50, wrap: '.advantages-section'});
//         console.log(typeof parallaxMouse);
//       }
// }
// candyDance();
// document.addEventListener('resize', candyDance);



  
});
 
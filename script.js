/*******Feather Icons********** */
feather.replace()
/****************************** */

// MENU BUTTON--MOBILE//
const menuButton = document.querySelector('.navbar__icon--open');
const dropdownList = document.querySelector('.navbar__list');
const mobileBackdrop = document.querySelector('.navbar__mobile-backdrop');
const closeButton = document.querySelector('.navbar__icon--close')

/*navbar__icon--open displayed--mobile*/
/*navbar__icon--close displayed--mobile undisplayed--mobile*/


function closeNavbar(){
    menuButton.classList.remove('undisplayed--mobile');
    closeButton.classList.add('undisplayed--mobile');

    mobileBackdrop.classList.add('undisplayed--mobile');
    dropdownList.classList.add('undisplayed--mobile');
}

menuButton.addEventListener('click', ()=>{
    menuButton.classList.add('undisplayed--mobile');
    closeButton.classList.remove('undisplayed--mobile');

    mobileBackdrop.classList.remove('undisplayed--mobile');
    dropdownList.classList.remove('undisplayed--mobile');


});

closeButton.addEventListener('click', ()=>{
    closeNavbar();
    
    navbarItems.forEach(item=>{

        const dropdown = item.lastElementChild;
        const navbarAnchor = item.firstElementChild;
        const plusIcon = navbarAnchor.children[1];
        const minusIcon = navbarAnchor.children[2];
        
        if(dropdown.classList.contains('displayed--mobile')){
            dropdown.classList.remove('displayed--mobile');
            navbarAnchor.classList.remove('pressed');
    
            plusIcon.classList.remove('undisplayed--mobile');
            minusIcon.classList.add('undisplayed--mobile');
            console.log('closed')
        }
        
    
       });
    
})



// MENU BUTTON--MOBILE//

const navbarItems = document.querySelectorAll('.navbar__item');

navbarItems.forEach(item => item.addEventListener('click', (event)=>{
    event.stopPropagation();
    if(item == navbarItems[0]) return;
    event.preventDefault(); 

    const dropdown = item.lastElementChild;
    const navbarAnchor = item.firstElementChild;
    const plusIcon = navbarAnchor.children[1];
    const minusIcon = navbarAnchor.children[2];

    if(dropdown.classList.contains('displayed--mobile')){
        dropdown.classList.remove('displayed--mobile');
        navbarAnchor.classList.remove('pressed');

        plusIcon.classList.remove('undisplayed--mobile');
        minusIcon.classList.add('undisplayed--mobile')

    }else{
        dropdown.classList.add('displayed--mobile');
        navbarAnchor.classList.add('pressed');
        plusIcon.classList.add('undisplayed--mobile');
        minusIcon.classList.remove('undisplayed--mobile') 
    }
}))

//--------Subdropdowns ----------/////
const dropdownItems = document.querySelectorAll('.first-level > .dropdown__list > .dropdown__item');



dropdownItems.forEach(item => item.addEventListener('click', (event)=>{
    event.stopPropagation();

    const subDropdown = item.lastElementChild.classList;
    const subDropdownAnchor = item.firstElementChild;
    const subDropdownIcon = subDropdownAnchor.firstElementChild;
    const chevron = subDropdownAnchor.lastElementChild;
    /*
    if(subDropdown.contains('displayed--mobile')){
    
        subDropdown.remove('displayed--mobile');
        item.classList.remove('subdropdown-pressed');;
        subDropdownAnchor.classList.remove('pressed--2');
        subDropdownIcon.classList.remove('pressed--2')
        chevron.classList.remove('pressed--2');
        chevron.classList.remove('rotate');

    }else{
        subDropdown.add('displayed--mobile');
        item.classList.add('subdropdown-pressed');
        subDropdownAnchor.classList.add('pressed--2');
        subDropdownIcon.classList.add('pressed--2');
        chevron.classList.add('pressed--2');
        chevron.classList.add('rotate');
    }*/

  
   navbarItems.forEach(item=>{

    const dropdown = item.lastElementChild;
    const navbarAnchor = item.firstElementChild;
    const plusIcon = navbarAnchor.children[1];
    const minusIcon = navbarAnchor.children[2];
    
    if(dropdown.classList.contains('displayed--mobile')){
        dropdown.classList.remove('displayed--mobile');
        navbarAnchor.classList.remove('pressed');

        plusIcon.classList.remove('undisplayed--mobile');
        minusIcon.classList.add('undisplayed--mobile');
        console.log('closed')
    }
    

   });

   closeNavbar();



}));

/*---------------------------TYNY SLIDER---------------------*/

const mainSlider = tns({
    container: '.main-slider__list',
    items: 1,
    autoplay: true,
    arrowKeys:true,
    controls: false,
    autoplayButtonOutput: false,
    nav:true,
    navPosition: 'bottom',
}) 

let carrusell = tns({
    container: '.courses-carrusell__list',
    mouseDrag: true,
    items: 2,
    controls: false,
    nav:false,
    autoplayButtonOutput: false,
    edgePadding: 40,
    swipeAngle: false,

    responsive:{
        517:{
            items: 3,
            edgePadding: 35,

        },
        788:{
            edgePadding: 20,
        },
    },
}) 





let carrusell2 = tns({
    container: '.courses-carrusell__list--2',
    mouseDrag: true,
    items: 2,
    controls: false,
    nav:false,
    autoplayButtonOutput: false,
    edgePadding: 40,
    swipeAngle: false,

    responsive:{
        517:{
            items: 3,
            edgePadding: 35,

        },
        788:{
            edgePadding: 20,
        },
    },
}) 

let carrusell3 = tns({
    container: '.courses-carrusell__list--3',
    mouseDrag: true,
    items: 2,
    controls: false,
    nav:false,
    autoplayButtonOutput: false,
    edgePadding: 30,
    swipeAngle: false,

    responsive:{
        517:{
            items: 3,
            edgePadding: 35,

        },
        788:{
            edgePadding: 20,
        },
    },
})


let masterclasses = tns({
    container: '.courses-carrusell__list--4',
    mouseDrag: true,
    items: 2,
    controls: false,
    nav:false,
    autoplayButtonOutput: false,
    edgePadding: 30,
    swipeAngle: false,

    responsive:{
        517:{
            items: 3,
            edgePadding: 35,

        },
        788:{
            edgePadding: 20,
        },
    },
}) 



let carrusell4 = tns({
    container: '.community__list',
    mouseDrag: true,
    items: 1,
    controls: false,
    nav:false,
    autoplayButtonOutput: false,
    autoplay: true,
})




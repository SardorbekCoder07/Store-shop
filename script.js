function copyMenu(){
  // copy inside .dpt-cat to .departaments
  let dptCategory=document.querySelector('.dpt-cat');
  let dptPlace=document.querySelector('.departaments');
  dptPlace.innerHTML=dptCategory.innerHTML;
  // copy inside nav to nav
  let mainNav=document.querySelector('.header-nav nav');
  let navPlace=document.querySelector('.off-canvas nav');
  navPlace.innerHTML=mainNav.innerHTML;
  // copy .header-top .wrapper to .thetop-nav
  let topNav=document.querySelector('.header-top .wrapper');
  let topPlace=document.querySelector('.off-canvas .thetop-nav');
  topPlace.innerHTML=topNav.innerHTML;
};
copyMenu();
// Show mobile menu
const menuButton=document.querySelector('.trigger');
const closeButton=document.querySelector('.t-close');
const addclass=document.querySelector('.site');

menuButton.addEventListener('click', function(){
  addclass.classList.toggle('showmenu');
});
closeButton.addEventListener('click', function(){
  addclass.classList.remove('showmenu');
});

// Show sub menu on mobile 
const submenu=document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu)=>menu.addEventListener('click',toggle));

function toggle(e) {
  e.preventDefault();
  submenu.forEach((item)=>item != this ? item.closest('.has-child').classList.remove('expand'):null);
  if(this.closest('.has-child').classList !='expand');
  this.closest('.has-child').classList.toggle('expand');
}
// Slider
const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});
//Show Bottom

const searchButton=document.querySelector('.t-search'),
      tClose=document.querySelector('.search-close'),
      showClass=document.querySelector('.site');
searchButton.addEventListener('click', function(){
  showClass.classList.toggle('showsearch');
});
tClose.addEventListener('click',function(){
  showClass.classList.remove('showsearch')
})

// Show dpt menu 

const dptButton=document.querySelector('.dpt-cat .dpt-trigger'),
      dptClass=document.querySelector('.site');
dptButton.addEventListener('click',function(){
  dptClass.classList.toggle('showdpt');
});
//product image slider 
var productThumb= new Swiper('.small-image',{
  loop:true,
  spaceBetween:10,
  slidesPerView:3,
  freeMode:true,
  watchSlidesProgress:true,
  breakpoints:{
    481:{
      spaceBetween:32,
    }
  }
});
var productBig = new Swiper('.big-image',{
  loop:true,
  autoHeight:true,
  navigation:{
    nexEl:'.swipper-button-next',
    preEl:'.swipper-button-prev',
  },
  thumbs:{
    swipper: productThumb,
  }
})
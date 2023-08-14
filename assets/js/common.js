/*
* layout
*/

const bodyWrap = document.querySelector('.body-wrap');
const header = document.querySelector('.header');
const btnMenuBar = document.querySelector('.header .btn-menubar');
const btnOpenProfile = document.querySelector('.profile');
const btnProfile = document.querySelector('.profile .btn-profile');
const popProfile = document.querySelector('.pop-profile');

btnMenuBar && btnMenuBar.addEventListener('click', () => {
  bodyWrap.classList.toggle('nav-open');
  popProfile.classList.remove('open');
});

header && header.addEventListener('click', () => {
  bodyWrap.classList.toggle('nav-open');
  popProfile.classList.remove('open');
});



/**
 * header :: pop-profile
*/

btnOpenProfile && btnOpenProfile.addEventListener('click', (event) => {
  event.currentTarget.nextElementSibling.classList.toggle('open');
  bodyWrap.classList.remove('nav-open');
  
  if(event.currentTarget.nextElementSibling.classList.contains('open')) {
    btnProfile.style.transform = 'rotate('+ -180+'deg)';
  } else {
    btnProfile.style.transform = '';
  }
});


/**
 * nav :: side menubar close
*/

const btnClose = document.querySelector('.nav-bar .nav-header .btn-closed');

btnClose && btnClose.addEventListener('click', () => {
  bodyWrap.classList.remove('nav-open');
});


/**
 * nav :: nav-list open & close
*/

const btnNavListOpen = document.querySelectorAll('.nav-bar .nav-list .btn-nav-list');
let i;
for (i = 0; i < btnNavListOpen.length; i++) {
  btnNavListOpen[i].addEventListener('click', function() {
    this.parentElement.parentElement.classList.toggle('open');
  });
}


/**
 * nav :: recent view slider
*/

let viewport = window.innerWidth;
let recentViewSlider = undefined;

function destroySwiper() {
  if( viewport > 768 && recentViewSlider == undefined ) {
    recentViewSlider = new Swiper('.recent-view-slider', {
      loop: true,
      slidesPerView : 1,
      spaceBetween : 10,
      pagination: {
        el: '.swiper-pagination',
        type: "fraction",
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else if( viewport <= 768 && recentViewSlider != undefined ) {
    recentViewSlider.destroy();
    recentViewSlider = undefined;
  }
};

window.addEventListener('resize', () => {
  viewport = window.innerWidth;
  destroySwiper();
});
destroySwiper();


/**
 * chat answer :: found-product
*/

const foundProductSlider = new Swiper('.found-product-slider', {
  slidesPerView : 1,
  spaceBetween : 14,
  autoHeight : true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


/*
* icon-eye on & off
*/

const btnShow = document.querySelector('.btn-show');

btnShow && btnShow.addEventListener('click', () => {
  btnShow.classList.toggle('show');
});


/*
* tabmenu
*/

const tabList = document.querySelectorAll('.tab-list');
const tabCont = document.querySelectorAll('.tab-cont');

tabList.forEach((tab, index) => {
  tab.addEventListener('click', function () {
    tabList.forEach((el) => {
      el.classList.remove('active');
    });
    tabList[index].classList.add('active');

    tabCont.forEach((cont) => {
      cont.classList.remove('active');
    });
    tabCont[index].classList.add('active');
  });
});


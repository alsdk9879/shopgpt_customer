// nav 클릭하면 이동
document.querySelectorAll('.nav .nav-link').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(el.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

function scrollProgress() {
  let scrollTop = document.documentElement.scrollTop || window.scrollY || window.pageYOffset;

  document.querySelectorAll('.guide-inner-wrap').forEach((el, index) => {
    
    if (scrollTop >= el.offsetTop - 100) {
      document.querySelectorAll('.nav .nav-link').forEach((el) => {
        el.classList.remove('active');
      });
      document.querySelector('.nav .nav-link:nth-child(' + (index + 1) + ')').classList.add('active');
    }
  });
}
window.addEventListener('scroll', scrollProgress);

// color
const colorNum = [25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const stateColorNum = [25, 50, 400, 500];
const primaryColor = colorNum.map((item) => getComputedStyle(document.querySelector('html')).getPropertyValue(`--primary-color-${item}`));
const secondaryColor = colorNum.map((item) => getComputedStyle(document.querySelector('html')).getPropertyValue(`--secondary-color-${item}`));
const grayColor = colorNum.map((item) => getComputedStyle(document.querySelector('html')).getPropertyValue(`--gray-color-${item}`));
const errorColor = stateColorNum.map((item) => getComputedStyle(document.querySelector('html')).getPropertyValue(`--error-color-${item}`));
const warningColor = stateColorNum.map((item) => getComputedStyle(document.querySelector('html')).getPropertyValue(`--warning-color-${item}`));
const successColor = stateColorNum.map((item) => getComputedStyle(document.querySelector('html')).getPropertyValue(`--success-color-${item}`));
const infoColor = stateColorNum.map((item) => getComputedStyle(document.querySelector('html')).getPropertyValue(`--info-color-${item}`));

document.querySelectorAll('.colorbox-wrap.primary .color-hex-code').forEach((el, index) => {
  el.innerHTML = primaryColor[index];
});

document.querySelectorAll('.colorbox-wrap.secondary .color-hex-code').forEach((el, index) => {
  el.innerHTML = secondaryColor[index];
});

document.querySelectorAll('.colorbox-wrap.gray .color-hex-code').forEach((el, index) => {
  el.innerHTML = grayColor[index];
});

document.querySelectorAll('.colorbox-wrap.error .color-hex-code').forEach((el, index) => {
  el.innerHTML = errorColor[index];
});

document.querySelectorAll('.colorbox-wrap.warning .color-hex-code').forEach((el, index) => {
  el.innerHTML = warningColor[index];
});

document.querySelectorAll('.colorbox-wrap.success .color-hex-code').forEach((el, index) => {
  el.innerHTML = successColor[index];
});

document.querySelectorAll('.colorbox-wrap.info .color-hex-code').forEach((el, index) => {
  el.innerHTML = infoColor[index];
});
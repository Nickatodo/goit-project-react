export const getScrollWidth = elm =>
  elm === document.body
    ? window.innerWidth - document.documentElement.clientWidth
    : elm.offsetWidth - elm.clientWidth;

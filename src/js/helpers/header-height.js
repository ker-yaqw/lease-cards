export const getHeaderHeight = () => {
  const headerHeight = document?.querySelector('.header').offsetHeight; // получаем высоту header
  document.documentElement.style.setProperty('--header-height', `${headerHeight}px`); // записываем значение в CSS-переменную
}
const scrollToEl = (className) => {
  const { top } = document.querySelector(className).getBoundingClientRect();
  window.scrollTo({
    left: 0,
    top,
    behavior: 'smooth',
  });
};

export default scrollToEl;

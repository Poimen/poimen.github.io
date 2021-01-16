(function() {
  window.onscroll = function() {
    const scrollLimit = 30;
    const nav = document.getElementById('nav');

    if(window.pageYOffset > scrollLimit) {
      nav.classList.add('shadow-md');
    } else {
      nav.classList.remove('shadow-md');
    }
  };
})();

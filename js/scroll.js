window.onscroll = function() {
    const header = document.querySelector('.header');
    const fixedClass = 'fixed';
  
    if (window.pageYOffset > header.offsetTop) {
      header.classList.add(fixedClass);
    } else {
      header.classList.remove(fixedClass);
    }
  };
  
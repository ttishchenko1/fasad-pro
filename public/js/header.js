window.addEventListener('scroll', function() {
    if (window.pageYOffset > 50) {
        document.getElementsByTagName('header')[0].classList.add('active');
    } else {
        document.getElementsByTagName('header')[0].classList.remove('active');
    }
});	
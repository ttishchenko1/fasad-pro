window.addEventListener('scroll', function() {   

    var yOffset = document.documentElement.scrollTop || window.pageYOffset,
        blocks = document.getElementsByClassName('paralax-img');

    if (yOffset < 20 ) {
        for (i = 0; i < blocks.length; i++) {
            blocks[i].style.top = '0';
        }
    } else {
        for (i = 0; i < blocks.length; i++) {
            blocks[i].style.top = yOffset / 2 +'px';
        }
    }   

});
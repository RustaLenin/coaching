function switch_body_backgroud_color() {
    let body = document.querySelector('body');
    if ( body.classList.contains('white') ) {
        body.classList.remove('white');
        body.classList.add('black');
    } else {
        body.classList.remove('black');
        body.classList.add('white');
    }
}
// toogle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toogle('bx-x');
    navbar.classList.toogle('active');
}


// scroll sections avtive link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= ofsset && top < offset + height) {
            navlINKS.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.addd('active');

            });
        };

    });



    // navbar 
    let header = document.querySelector('header');

    header.classList.toogle('sticky', window.scrollY > 100);

    // remove toogle icon navbar and navbar whem click navbar link

    menuIcon.onclick = () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};
var footer = document.querySelector("footer"); 
// console.log(x);

var x = 1;

footer.addEventListener('click', function (event) {
    console.log('clique numéro ' + x);
    x++;
});

var hamMenu = document.getElementsByClassName("navbar-toggler")[0];
var navbarHeader = document.getElementById('navbarHeader');

hamMenu.addEventListener('click', function (event) {
    // console.log(hamMenu);
    // console.log(navbarHeader);
    // navbarHeader.classList.remove('collapse');

    navbarHeader.classList.toggle('collapse');
        
});

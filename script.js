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


var card1 = document.getElementsByClassName('card')[0];
var editBtn = card1.getElementsByTagName('button')[1];

editBtn.addEventListener('click', function (event) {
    card1.style.color = 'red';
});


var card2 = document.getElementsByClassName('card')[1];
var editBtn2 = card2.getElementsByTagName('button')[1];

editBtn2.addEventListener('click', function (event) {
    if (card2.style.color != 'green') {
        card2.style.color = 'green';
    }
    else {
        card2.style.color = '';
    }
});

var navbar = document.getElementsByClassName('navbar')[0];
var header = document.getElementsByTagName('header')[0];
var twbtsCdn = document.getElementsByTagName('link')[0];

header.addEventListener('dblclick', function (event) {
    twbtsCdn.toggleAttribute('disabled');

});

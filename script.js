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


var cards = document.getElementsByClassName('card');

for (let card of cards) {

    let viewBtn = card.getElementsByTagName('button')[0];

    viewBtn.addEventListener('mouseenter', function (event) {
        let txt = card.getElementsByClassName('card-text')[0];
        let img = card.getElementsByTagName('img')[0];

        if (!card.classList.contains('min')) {
            txt.style.display = 'none';
            img.style.width = '20%';
            card.classList.add('min');
        }
        else {
            txt.style.display = 'block';
            img.style.width = '100%';
            card.classList.remove('min');
        }

    });
    
}


var jumbotron = document.getElementsByClassName('jumbotron')[0];
var nextArrow = jumbotron.getElementsByTagName('a')[1];
var row = document.getElementsByClassName('row')[1];

nextArrow.addEventListener('click', function (event) {
    event.preventDefault();
    let lastCard = cards[cards.length - 1].parentNode;
    row.prepend(lastCard);
});


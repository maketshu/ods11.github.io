const botaoMobile = document.getElementById('botao-mobile');

function aparecemenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
};


// Select button
var button = document.getElementById('read_button');

// Click Event
button.addEventListener('click', function() {
    // Select card
    var card = document.querySelector('.card');

    // Add/Remove Class Active
    card.classList.toggle('active');

    if (card.classList.contains('active')) {
        // Change button text if has class active
        return button.textContent = '-';
    }
    
    // Change button text if hasn't class active
    button.textContent = '+';
});

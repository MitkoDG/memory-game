document.addEventListener('DOMContentLoaded', () => {

    const cardsList = [
        {
            name: 'cat',
            image: '../images/cat.png'
        },
        {
            name: 'cat',
            image: '../images/cat.png'
        },
        {
            name: 'dice',
            image: '../images/dice.png'
        },
        {
            name: 'dice',
            image: '../images/dice.png'
        },
        {
            name: 'dog',
            image: '../images/dog.png'
        },
        {
            name: 'dog',
            image: '../images/dog.png'
        },
        {
            name: 'kids',
            image: '../images/kids.png'
        },
        {
            name: 'kids',
            image: '../images/kids.png'
        },
        {
            name: 'mickey',
            image: '../images/mickey.png'
        },
        {
            name: 'mickey',
            image: '../images/mickey.png'
        },
        {
            name: 'penguin',
            image: '../images/penguin.png'
        },
        {
            name: 'penguin',
            image: '../images/penguin.png'
        },
        {
            name: 'simpsons',
            image: '../images/simpsons.png'
        },
        {
            name: 'simpsons',
            image: '../images/simpsons.png'
        },
        {
            name: 'sponge',
            image: '../images/sponge.png'
        },
        {
            name: 'sponge',
            image: '../images/sponge.png'
        },
        {
            name: 'yoshi',
            image: '../images/yoshi.png'
        },
        {
            name: 'yoshi',
            image: '../images/yoshi.png'
        },
        {
            name: 'mario',
            image: '../images/mario.png'
        },
        {
            name: 'mario',
            image: '../images/mario.png'
        },
        {
            name: 'dora',
            image: '../images/dora.png'
        },
        {
            name: 'dora',
            image: '../images/dora.png'
        },
        {
            name: 'blank',
            image: '../images/blank.png'
        }
    ];

    cardsList.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.gameGrid');

    function initiateBoard() {
        for (let i = 0; i < cardsList.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', '../images/blank.png');
            card.setAttribute('data-id', i); // i is the id from the loop
            // card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    initiateBoard()

})
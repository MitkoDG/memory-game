document.addEventListener('DOMContentLoaded', () => {

    const cardsList = [
        {
            name: 'cat',
            image: './images/cat.png'
        },
        {
            name: 'cat',
            image: './images/cat.png'
        },
        {
            name: 'dice',
            image: './images/dice.png'
        },
        {
            name: 'dice',
            image: './images/dice.png'
        },
        {
            name: 'dog',
            image: './images/dog.png'
        },
        {
            name: 'dog',
            image: './images/dog.png'
        },
        {
            name: 'kids',
            image: './images/kids.png'
        },
        {
            name: 'kids',
            image: './images/kids.png'
        },
        {
            name: 'mickey',
            image: './images/mickey.png'
        },
        {
            name: 'mickey',
            image: './images/mickey.png'
        },
        {
            name: 'penguin',
            image: './images/penguin.png'
        },
        {
            name: 'penguin',
            image: './images/penguin.png'
        },
        {
            name: 'simpsons',
            image: './images/simpsons.png'
        },
        {
            name: 'simpsons',
            image: './images/simpsons.png'
        },
        {
            name: 'sponge',
            image: './images/sponge.png'
        },
        {
            name: 'sponge',
            image: './images/sponge.png'
        },
        {
            name: 'yoshi',
            image: './images/yoshi.png'
        },
        {
            name: 'yoshi',
            image: './images/yoshi.png'
        },
        {
            name: 'mario',
            image: './images/mario.png'
        },
        {
            name: 'mario',
            image: './images/mario.png'
        },
        // {
        //     name: 'dora',
        //     image: './images/dora.png'
        // },
        // {
        //     name: 'dora',
        //     image: './images/dora.png'
        // },
        // {
        //     name: 'blank',
        //     image: './images/blank.png'
        // }
    ];
    
    cardsList.sort(() => 0.5 - Math.random());
    const grid = document.querySelector('.gameGrid');
    const attemptHolder = document.querySelector('.attemptsHolder')
    const foundHolder = document.querySelector('.foundHolder');

    let cardsInGame = 10;
    let attempts = 0;
    let foundCards = 0;
    attemptHolder.textContent = attempts;
    foundHolder.textContent = foundCards;

    let chosenCards = [];
    let chosenCardsIds = [];

    function initiateBoard() {
        for (let i = 0; i < cardsList.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', './images/blank.png');
            card.setAttribute('data-id', i); // i is the id from the loop
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function flipCard() {
        if (chosenCards.length != 2) {
            let cardId = this.getAttribute('data-id');
            if (this.getAttribute('src') != './images/blank.png') {
                chosenCards.push(cardsList[cardId].name);
                chosenCardsIds.push(cardId);
                this.setAttribute('src', cardsList[cardId].image);
                if (chosenCards.lenght == 2) {
                    setTimeout(checkForMatch, 400);
                }
            }
        }

    }

    function checkForMatch() {
        attempts++;
        let cards = document.querySelectorAll('img');
        let firstCard = chosenCardsIds[0];
        let secondCard = chosenCardsIds[1];
        if (chosenCards[0] == chosenCards[1]) {
            foundCards++;
            cards[firstCard].setAttribute('src', './images/blank.png')
            cards[secondCard].setAttribute('src', './images/blank.png')
        } else {
            cards[firstCard].setAttribute('src', './images/plaseholder.png')
            cards[secondCard].setAttribute('src', './images/plaseholder.png')
        }
        chosenCards = [];
        chosenCardsIds = [];
        attemptHolder.textContent = attempts;
        foundHolder.textContent = foundCards;

        if (foundCards == cardsInGame) {
            alert('Well done !')
        }
    }

    initiateBoard()

})
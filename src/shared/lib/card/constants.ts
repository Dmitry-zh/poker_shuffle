export enum CardValue {
    2 = '2',
    3 = '3',
    4 = '4',
    5 = '5',
    6 = '6',
    7 = '7',
    8 = '8',
    9 = '9',
    10 = '10',
    Jack = 'Jack', // валет
    Queen = 'Queen', // дама
    King = 'King', // король
    Ace = 'Ace', // туз
}

export enum CardSuit {
    Hearts = 'Hearts', // червы
    Diamonds = 'Diamonds', // бубны
    Clubs = 'Clubs', // трефы
    Spades = 'Spades' // пики
}

export class Card {
    readonly value: CardValue
    readonly suit: CardSuit

    constructor(value: CardValue, suit: CardSuit) {
        this.value = value
        this.suit = suit
    }
}
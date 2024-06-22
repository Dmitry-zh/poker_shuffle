import {Card, CardSuit, CardValue} from '../card'

export class Deck {
    private _cards: Card[]

    constructor() {
        this._cards = []
        this._init()
        this._shuffle()
    }

    private _init() {
        const suits = Object.values<CardSuit>(CardSuit as Record<string, CardSuit>)
        const values = Object.values<CardValue>(CardValue as Record<string, CardValue>)

        suits.forEach((suit) => {
            values.forEach(value => {
                this._cards.push(new Card(value, suit))
            })
        })
    }

    private _shuffle() {
        this._cards.sort(() => 0.5 - Math.random()
        )
    }

    take(): Card {
        return this._cards.shift()
    }

    get cards(): Card[] {
        return this._cards
    }
}
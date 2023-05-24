import goat from './resources/GOAT.jpeg'
import nostress from './resources/NOSTRESS.jpeg'
import vines from './resources/GOODVINES.jpeg'
import vines2 from './resources/VINES.jpeg'

const cards = [
    {
        id: 0,
        src: [goat],
        title: 'GOAT'
    },
    {
        id: 1,
        src: [nostress],
        title: 'NO STRESS'
    },
    {
        id: 2,
        src: [vines, vines2],
        title: 'GOOD VINES'
    }
]

const j = {
    title: 'ERROR',
    src: [vines]
}

export function getCards() {
    return cards;
}

export function getCardById(id) {
    id = parseInt(id)
    for (let i=0; i<cards.length; ++i) {
        if (cards[i].id === id) {
            console.log('jopa')
            return cards[i]
        }
    }
    return j
}
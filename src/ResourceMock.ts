import goat from './resources/GOAT.jpeg'
import nostress from './resources/NOSTRESS.jpeg'
import vines from './resources/GOODVINES.jpeg'
import vines2 from './resources/VINES.jpeg'
import {MyCard} from "./types/myCard";

const cards:Array<MyCard> = [
    {
        id: 0,
        paths_to_images: [goat],
        title: 'GOAT'
    },
    {
        id: 1,
        paths_to_images: [nostress],
        title: 'NO STRESS'
    },
    {
        id: 2,
        paths_to_images: [vines, vines2],
        title: 'GOOD VINES'
    }
]

const errorCard:MyCard = {
    id: -1,
    title: 'ERROR',
    paths_to_images: [vines]
}

export function getCards(): Array<MyCard> {
    return cards;
}

export function getCardById(idStr: string | undefined): MyCard {
    const id = parseInt(idStr as string)
    for (let i=0; i<cards.length; ++i) {
        if (cards[i].id === id) {
            console.log('jopa')
            return cards[i]
        }
    }
    return errorCard
}
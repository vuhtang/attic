import blessed1 from './resources/blessed/BLESSED1.jpg'
import blessed2 from './resources/blessed/BLESSED2.jpg'
import goat1 from './resources/goat/GOAT1.jpeg'
import nostress1 from './resources/nostress/NOSTRESS1.jpeg'
import vines1 from './resources/vines/VINES1.jpeg'
import vines2 from './resources/vines/VINES2.jpeg'
import {MyCard} from "./types/myCard";
import {DECATRIA_DEFAULT_CLOTHES_DESC} from "./components/const/titles";

const cards:Array<MyCard> = [
    {
        id: 0,
        paths_to_images: [goat1],
        title: 'GOAT',
        price: 1500,
        price_currency: '₽',
        desc: DECATRIA_DEFAULT_CLOTHES_DESC
    },
    {
        id: 1,
        paths_to_images: [nostress1],
        title: 'NO STRESS',
        price: 1500,
        price_currency: '₽',
        desc: DECATRIA_DEFAULT_CLOTHES_DESC
    },
    {
        id: 2,
        paths_to_images: [vines1, vines2],
        title: 'GOOD VINES',
        price: 1600,
        price_currency: '₽',
        desc: DECATRIA_DEFAULT_CLOTHES_DESC
    },
    {
        id: 3,
        paths_to_images: [blessed1, blessed2],
        title: 'BLESSED',
        price: 1500,
        price_currency: '₽',
        desc: DECATRIA_DEFAULT_CLOTHES_DESC
    }
]

const errorCard:MyCard = {
    id: -1,
    title: 'ERROR',
    paths_to_images: [vines1],
    price: 0,
    price_currency: '₽',
    desc: DECATRIA_DEFAULT_CLOTHES_DESC
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
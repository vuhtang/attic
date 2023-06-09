import './desc.css'
import {MyCard} from "../../../../types/myCard";

function ClothesDesc(cardProps: {
    card: MyCard
}) {
    return (
        <div className='desc'>
            <span>{cardProps.card.title}</span>
            <span className="fw-bolder pb-4">{cardProps.card.price + " " + cardProps.card.price_currency}</span>
            <span className="pt-3">Состав: {cardProps.card.desc.composition}</span>
            <span>{cardProps.card.desc.print}</span>
            <span>Размеры: {cardProps.card.desc.sizes}</span>
        </div>
    )
}

export default ClothesDesc
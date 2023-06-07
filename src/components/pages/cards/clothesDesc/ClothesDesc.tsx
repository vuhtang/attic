import './desc.css'
import {MyCard} from "../../../../types/myCard";

function ClothesDesc(cardProps: {
    card: MyCard
}) {
    return (
        <div className='desc'>
            <span>{cardProps.card.title}</span>
            <br />
            <span>Тут должно быть какое-то описание товара, но мы его не заполучили((</span>
        </div>
    )
}

export default ClothesDesc
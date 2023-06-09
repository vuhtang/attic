import {Carousel} from "react-bootstrap";
import './single.css'
import {ClothesDesc} from "../../cards/clothesDesc";
import {MyCard} from "../../../../types/myCard";


function SingleClothes(cardProps: {
    card: MyCard
}) {

    return (
        <div className='single'>
            <Carousel slide={false}>
                {cardProps.card.paths_to_images.map(s =>
                    <Carousel.Item>
                        <img
                            src={s}
                            alt={cardProps.card.title}
                            width={'300px'}/>
                    </Carousel.Item>
                )}
            </Carousel>

            <ClothesDesc card={cardProps.card}/>
        </div>
    )
}

export default SingleClothes
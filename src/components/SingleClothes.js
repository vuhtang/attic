import {Carousel} from "react-bootstrap";
import '../style/single.css'
import {ClothesDesc} from "./ClothesDesc";

export function SingleClothes({card}) {

    return (
        <div className='single'>
            <Carousel slide={false}>
                {card.src.map((s) => {
                    return (
                        <Carousel.Item>
                            <img
                                src={s}
                                alt={'wefwf'}
                            width={'300px'}/>
                        </Carousel.Item>
                    )
                })}
            </Carousel>

            <ClothesDesc card={card}/>
        </div>
    )
}
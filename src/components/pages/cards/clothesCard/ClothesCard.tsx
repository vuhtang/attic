import {MyCard} from "../../../../types/myCard";
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap"
import './card-desc.css'

function ClothesCard(cardProps: {
    card: MyCard
}) {
    return (

        <Card style={{
            border: "none"
        }}>
            <Link to={`/clothes/${cardProps.card.id}`}>
                <Card.Img variant="top" src={cardProps.card.paths_to_images[0]}/>
            </Link>
            <Card.Body>
                <div className='card-desc'>
                    <span>{cardProps.card.title}</span>
                    <span className="price">1500 руб.</span>
                </div>
            </Card.Body>
        </Card>
    )
}

export default ClothesCard
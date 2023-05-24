import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../style/card-desc.css'

export function ClothesCard({card}) {

    return (

        <Card style={{
            border: "none"
        }}>
            <Link to={`/clothes/${card.id}`}>
                <Card.Img variant="top" src={card.src[0]}/>
            </Link>
            <Card.Body>
                <div className='card-desc'>
                    <span>{card.title}</span>
                    <span>0 руб.</span>
                </div>
            </Card.Body>
        </Card>
    )
}
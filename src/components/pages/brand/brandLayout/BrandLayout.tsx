import {getCards} from "../../../../ResourceMock";
import {useEffect, useState} from "react";
import {ClothesCard} from "../../cards/clothesCard";
import {Col, Row} from "react-bootstrap";
import {MyCard} from "../../../../types/myCard";

function BrandLayout() {
    const [cards, setCards] = useState<Array<MyCard>>([])

    useEffect(() => {
        const cards = getCards()
        setCards(cards)
    }, [cards])

    return (
        <Row className='justify-content-begin p-4 m-4'>
            {cards.map(card => (
                <Col md={4} key={card.id}>
                    <ClothesCard card={card}/>
                </Col>
            ))}
        </Row>
    )
}

export default BrandLayout
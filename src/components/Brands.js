import {getCards} from "../ResourceMock";
import {useEffect, useState} from "react";
import {ClothesCard} from "./ClothesCard";
import {Col, Row} from "react-bootstrap";

export function Brands() {
    const [cards, setCards] = useState([])

    useEffect(() => {
        const cards = getCards()
        setCards(cards)
    }, [cards])
    return (
        <Row className='justify-content-end p-4 m-4'>
            {cards.map((card) => {
                return (
                    <Col md={3} key={card.id}>
                        <ClothesCard card={card}/>
                    </Col>
                )
            })}
        </Row>
    )
}
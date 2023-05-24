import {Container, Row, Col} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCardById} from "../ResourceMock";
import {SingleClothes} from "./SingleClothes";

export function ClothesPage() {
    const {id} = useParams()
    const [card,setCard] = useState(getCardById(id))

    useEffect(() => {
        const c = getCardById(id)
        setCard(c)
        console.log(id)
    }, [id])

    return (
        <Container>
            <Row className='justify-content-end'>
                <Col md={{
                    span: 8,
                    offset: 6
                }}>
                    <SingleClothes card={card} />
                </Col>
            </Row>
        </Container>
    )
}
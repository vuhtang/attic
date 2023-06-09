import {Image, Row} from "react-bootstrap";
import BLESSED from "../../../../resources/blessed/BLESSED3.jpg"
import {DECATRIA_DESC} from "../../../const/titles";
import "./brandDesc.css"

function BrandDesc() {

    return (
        <>
            <Row className="justify-content-center p-4 m-4">
                <Image src={BLESSED}/>
            </Row>
            <Row className="justify-content-center">
                <span className="desc-text">{DECATRIA_DESC}</span>
            </Row>
            <Row className="justify-content-center pt-5">
                <span className="text-center fw-bold">ФУТБОЛКИ</span>
            </Row>
        </>
    )
}

export default BrandDesc
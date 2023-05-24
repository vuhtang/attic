import {Image, Row} from "react-bootstrap";
import photo from "../resources/zny.jpg"

export function CutePhoto() {
    return (
        <Row>
            <Image className='p-0' src={photo} width='100%'/>
        </Row>
    )
}
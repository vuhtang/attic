import {Image, Row} from "react-bootstrap";
import photo from "../../../../resources/mainpage.png"
function CutePhoto() {
    return (
        <Row>
            <Image className='p-0' src={photo} width='100%'/>
        </Row>
    )
}

export default CutePhoto
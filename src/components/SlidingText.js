import {Row} from "react-bootstrap";
import Marquee from "react-fast-marquee";
import '../style/marquee-text.css'

export function SlidingText() {
    return (
        <Row className='bg-black text-white  justify-content-center align-items-center p-1'>
            <Marquee autoFill={true} speed={33}>
                <div className='txt'> • &nbsp;&nbsp;MINIMAL@"THEONE" &nbsp;&nbsp;</div>
            </Marquee>
        </Row>
    )
}

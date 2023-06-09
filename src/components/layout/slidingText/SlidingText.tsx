import {Row} from "react-bootstrap";
import Marquee from "react-fast-marquee";
import './marquee-text.css'
import {DECATRIA, DECATRIA_THE_ONE} from "../../const/titles";

function SlidingText() {
    return (
        <Row className='bg-black text-white  justify-content-center align-items-center p-1'>
            <Marquee autoFill={true} speed={33}>
                <div className='txt'> • &nbsp;&nbsp;{DECATRIA}&nbsp;@&nbsp;{DECATRIA_THE_ONE} &nbsp;&nbsp;</div>
            </Marquee>
        </Row>
    )
}

export default SlidingText

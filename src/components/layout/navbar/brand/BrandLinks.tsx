import "./brandLinks.css"
import {DECATRIA_INST, DECATRIA_TG, DECATRIA_VK} from "../../../const/links";
import {NavLink} from "react-router-dom";
import {DECATRIA} from "../../../const/titles";

function BrandLinks() {

    return (
        <div className="brand-container">
            <NavLink to="/clothes" className="brand-name">
                <span>{DECATRIA}</span>
            </NavLink>
            <span className="brand-clothes">ФУТБОЛКИ</span>
            {/*<span className="brand-clothes">ХУДИ / СВИТШОТЫ</span>*/}
            {/*<span className="brand-clothes">БРЮКИ / ШОРТЫ</span>*/}
            <div className="brand-contacts">
                <a className="brand-contacts-link" href={DECATRIA_VK}>VK</a>
                <a className="brand-contacts-link" href={DECATRIA_TG}>TG</a>
                <a className="brand-contacts-link" href={DECATRIA_INST}>INST</a>
            </div>
        </div>
    )
}

export default BrandLinks
import {NavLink} from "react-router-dom";
import {Image} from "react-bootstrap";
import {BrandLinks} from "./brand";
import logo from "../../../resources/logo/logo.png";
import './navbar.css'
import {useState} from "react";
import {DECATRIA} from "../../const/titles";

function NavBar() {
    const [linkIsPressed, setLinkIsPressed] = useState<boolean>(false)

    const handleHomeLinkClick = () => {
        if (linkIsPressed)
            setLinkIsPressed(false)
    }

    return (
        <div className='navbar'>
            <NavLink to='/' onClick={handleHomeLinkClick}>
                <Image src={logo} width={150} className='m-0'/>
            </NavLink>
            {
                linkIsPressed ?
                    <BrandLinks />
                :
                <NavLink to='/clothes' className="navbar-link" onClick={() => setLinkIsPressed(true)}>{DECATRIA}</NavLink>
            }
        </div>
    )
}

export default NavBar
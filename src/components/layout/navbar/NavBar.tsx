import {NavLink} from "react-router-dom";
import {Image} from "react-bootstrap";
import logo from "../../../resources/logo.png";
import './navbar.css'

function NavBar() {
    return (
        <div className='navbar'>
            <NavLink to='/'>
                <Image src={logo} width={150} className='m-0'/>
            </NavLink>
            <NavLink to='/clothes'>THE ONE</NavLink>
        </div>
    )
}

export default NavBar
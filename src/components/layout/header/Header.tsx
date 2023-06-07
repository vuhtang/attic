import './header.css'
import {NavBar} from "../navbar";
import {SlidingText} from "../slidingText";


function Header() {

    return (
        <>
            <SlidingText/>
            <div className="header">
                <NavBar/>
            </div>
        </>
    )
}

export default Header
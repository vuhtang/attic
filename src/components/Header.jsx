import React from "react";
import '../style/header.css'
import {NavBar} from "./NavBar";
import {SlidingText} from "./SlidingText";

export function Header() {

    return (
        <>
            <SlidingText/>
            <div className="header">
                <NavBar/>
            </div>
        </>
    )
}
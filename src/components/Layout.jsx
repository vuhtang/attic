import {Outlet} from "react-router-dom";
import {Header} from "./Header";
import React from "react";
export function Layout() {

    return (
        <>
            <Header/>
            <Outlet />
        </>
    )
}
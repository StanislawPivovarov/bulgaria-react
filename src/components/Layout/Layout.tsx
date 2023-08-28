import React from "react";
import Header from "../Header";
import Menu from "../Menu";

const Layout = ({children}: any) => {
    return (
        <>
        <Header/>
        <Menu/>
        {children}
        </>
    )
}

export default Layout;

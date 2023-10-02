import React from "react";
import Header from "../Header";
import Menu from "../Menu";
import Footer from "../Footer";
import { FloatButton } from "antd";
import { UpOutlined } from "@ant-design/icons";
import style from './Layout.module.scss'
const Layout = ({children}: any) => {
    return (
        <>
        <Header/>
        <Menu/>
        <a href="#showchat" data-message="Хочу сделать заказ"></a>
        {children}
        <FloatButton.BackTop className={style.float_button} icon={<UpOutlined className={style.float_button_icon}/>}/>

        <Footer/>
        </>
    )
}

export default Layout;

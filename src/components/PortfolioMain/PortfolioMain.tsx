import React from "react";
import style from './PortfolioMain.module.scss'
import test from '../../assets/test.jpeg'
import { RightOutlined } from "@ant-design/icons";
import { Button } from "antd";

const PortfolioMain = () => {
    return(
        <div className={style.back}>
            <h2 className={style.header}>Портфолио</h2>
            <div className={style.carousel}>
                <img className={style.image} alt="" src={test}/>
                <img className={style.image} alt="" src={test}/>
                <img className={style.image} alt="" src={test}/>
                <img className={style.image} alt="" src={test}/>
                <img className={style.image} alt="" src={test}/>
                <img className={style.image} alt="" src={test}/>
                <img className={style.image} alt="" src={test}/>
                <img className={style.image} alt="" src={test}/>
                <img className={style.image} alt="" src={test}/>
                <img className={style.image} alt="" src={test}/>
            </div>
            <Button type="link" className={style.portfolio_link} href="#">Смотреть все работы <RightOutlined /></Button>
        </div>
    )
}

export default PortfolioMain;

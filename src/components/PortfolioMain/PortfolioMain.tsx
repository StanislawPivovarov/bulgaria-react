import React from "react";
import style from './PortfolioMain.module.scss'
import test from '../../assets/test.jpeg'
import { RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Marquee from "react-fast-marquee";

const PortfolioMain = () => {
    return (
        <div className={style.back}>
            <h2 className={style.header}>Портфолио</h2>
            <Marquee>
                <div className={style.image_container}>
                    <img className={style.image} alt="" src={test} />
                </div>
                <div className={style.image_container}>
                    <img className={style.image} alt="" src={test} />
                </div>
                <div className={style.image_container}>
                    <img className={style.image} alt="" src={test} />
                </div>
                <div className={style.image_container}>
                    <img className={style.image} alt="" src={test} />
                </div>
                <div className={style.image_container}>
                    <img className={style.image} alt="" src={test} />
                </div>
                <div className={style.image_container}>
                    <img className={style.image} alt="" src={test} />
                </div>
                <div className={style.image_container}>
                    <img className={style.image} alt="" src={test} />
                </div>
                <div className={style.image_container}>
                    <img className={style.image} alt="" src={test} />
                </div>
               
            </Marquee>
            <Button type="link" className={style.portfolio_link} href="#">Смотреть все работы <RightOutlined /></Button>
        </div>
    )
}

export default PortfolioMain;

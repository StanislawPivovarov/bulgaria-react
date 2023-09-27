import React, { useState } from "react";
import style from './PortfolioMain.module.scss'
import test from '../../../assets/test.jpeg'
import { RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Marquee from "react-fast-marquee";
import PopUp from "../../PopUp";


const PortfolioMain = () => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={style.back}>
            <h2 className={style.header}>Портфолио</h2>
            <Marquee>
                <Button onClick={showModal} className={style.image_button} type="link">
                <div className={style.image_container}>
                    <img className={style.image} alt="" src={test} />
                </div>
                </Button>
                <Button onClick={showModal} className={style.image_button} type="link">
                <div className={style.image_container}>
                    <img className={style.image} alt="" src={test} />
                </div>
                </Button>
                <Button onClick={showModal} className={style.image_button} type="link">
                <div className={style.image_container}>
                    <img className={style.image} alt="" src={test} />
                </div>
                </Button>
                <Button onClick={showModal} className={style.image_button} type="link">
                <div className={style.image_container}>
                    <img className={style.image} alt="" src={test} />
                </div>
                </Button>
                <Button onClick={showModal} className={style.image_button} type="link">
                <div className={style.image_container}>
                    <img className={style.image} alt="" src={test} />
                </div>
                </Button>
                <Button onClick={showModal} className={style.image_button} type="link">
                <div className={style.image_container}>
                    <img className={style.image} alt="" src={test} />
                </div>
                </Button>
                <Button onClick={showModal} className={style.image_button} type="link">
                <div className={style.image_container}>
                    <img className={style.image} alt="" src={test} />
                </div>
                </Button>
                <Button onClick={showModal} className={style.image_button} type="link">
                <div className={style.image_container}>
                    <img className={style.image} alt="" src={test} />
                </div>
                </Button>
                
            </Marquee>
            <Button type="link" className={style.portfolio_link} href="/portfolio">Смотреть все работы <RightOutlined /></Button>

            <PopUp open={isModalOpen} onOk={handleOk} onCancel={handleCancel} />

        </div>
    )
}

export default PortfolioMain;

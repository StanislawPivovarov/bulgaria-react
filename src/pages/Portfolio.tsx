import React from "react";
import style from './Portfolio.module.scss'
import image from '../assets/CardPic.jpeg'
import { Button } from "antd";

const Portfolio = () => {
    return (
        <div className={style.back}>
            <h2 className={style.header}>
                Портфолио
            </h2>

            <div className="images">
                <div className={style.first_line} >
                    <div className="big">
                        <Button type="link" className={style.image_container}>
                            <img src={image} className={style.img_big} alt="" />
                        </Button>
                    </div>
                    <div className={style.mini}>
                        <div className={style.first}>
                            <div className={style.image_container}>
                                <img src={image} className={style.img_big} alt="" />
                            </div>
                            <div className={style.image_container}>
                                <img src={image} className={style.img_big} alt="" />
                            </div>

                        </div>
                        <div className={style.first}>
                            <div className={style.image_container}>
                                <img src={image} className={style.img_big} alt="" />
                            </div>
                            <div className={style.image_container}>
                                <img src={image} className={style.img_big} alt="" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className={style.all_left}>
                    <div className={style.image_container}>
                        <img src={image} className={style.img_big} alt="" />
                    </div>
                    <div className={style.image_container}>
                        <img src={image} className={style.img_big} alt="" />
                    </div>
                    <div className={style.image_container}>
                        <img src={image} className={style.img_big} alt="" />
                    </div>
                    <div className={style.image_container}>
                        <img src={image} className={style.img_big} alt="" />
                    </div>
                    <div className={style.image_container}>
                        <img src={image} className={style.img_big} alt="" />
                    </div>
                    <div className={style.image_container}>
                        <img src={image} className={style.img_big} alt="" />
                    </div>
                    <div className={style.image_container}>
                        <img src={image} className={style.img_big} alt="" />
                    </div>
                    <div className={style.image_container}>
                        <img src={image} className={style.img_big} alt="" />
                    </div>
                    <div className={style.image_container}>
                        <img src={image} className={style.img_big} alt="" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Portfolio;
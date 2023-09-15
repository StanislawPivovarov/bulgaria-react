import React from "react";
import style from './Portfolio.module.scss'
import image from '../assets/CardPic.jpeg'

const Portfolio = () => {
    return (
        <div className={style.back}>
            <h2 className={style.header}>
                Портфолио
            </h2>

            <div className="images">
                <div className={style.first_line} >
                    <div className="big">
                        <img src={image} className={style.img_big} alt="" />
                    </div>
                    <div className={style.mini}>
                        <div className={style.first}>
                            <img src={image} className={style.img_big} alt="" />
                            <img src={image} className={style.img_big} alt="" />
                        </div>
                        <div className={style.first}>
                            <img src={image} className={style.img_big} alt="" />
                            <img src={image} className={style.img_big} alt="" />
                        </div>
                    </div>

                </div>

                <div className={style.all_left}>
                    <img src={image} className={style.img_big} alt="" />
                    <img src={image} className={style.img_big} alt="" />
                    <img src={image} className={style.img_big} alt="" />
                    <img src={image} className={style.img_big} alt="" />
                    <img src={image} className={style.img_big} alt="" />
                    <img src={image} className={style.img_big} alt="" />
                    <img src={image} className={style.img_big} alt="" />
                    <img src={image} className={style.img_big} alt="" />
                    <img src={image} className={style.img_big} alt="" />
                    <img src={image} className={style.img_big} alt="" />
                </div>
            </div>
        </div>

    )
}

export default Portfolio;
import React from "react";
import Marquee from "react-fast-marquee";
import style from './PortfolioCarousel.module.scss'
import test from '../../assets/test.jpeg'

interface Props {
    className: string;
}

const PortfolioCarousel = (props: Props) => {
    return(
        <Marquee >
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
    )
}

export default PortfolioCarousel;

import React from "react";
import style from './Advanages.module.scss'
import kazan from '../../assets/adv/Frame 34172.svg'
import color from '../../assets/adv/Frame 34132.svg'
import image from '../../assets/adv/Frame 34171.svg'
const Advantages = () => {
    return (
        <div className={style.wrapper}>
            <img src={kazan} alt="" />
            <img src={color} alt="" />
            <img src={image} alt="" />
        </div>
    )
}

export default Advantages;

import React from "react";
import style from './ProductCard.module.scss'
import image from '../../../assets/CardPic.jpeg'

const ProductCard = (props:any) => {
    return (
        <div className={style.card}>
            <div className={style.image_content}>
                <img className={style.image} src={image} alt="" />
            </div>

            <div className={style.description}>
                <h2 className={style.name}>{props.name}</h2>
                <p className={style.description_text}>{props.description}</p>
            </div>
        </div>
    )
}

export default ProductCard;

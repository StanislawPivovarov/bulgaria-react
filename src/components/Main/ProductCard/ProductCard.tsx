import React from "react";
import style from './ProductCard.module.scss'
import image from '../../../assets/CardPic.jpeg'

const ProductCard = () => {
    return (
        <div className={style.card}>
            <div className={style.image_content}>
                <img className={style.image} src={image} alt="" />
            </div>

            <div className={style.description}>
                <h2 className={style.name}>Визитки</h2>
                <p className={style.description_text}>Я в своем познании настолько преисполнился, что я как будто бы уже сто триллионов миллиардов лет проживаю на триллионах и ...</p>
            </div>
        </div>
    )
}

export default ProductCard;

import React from "react";
import { Carousel } from "antd";

import style from './Sales.module.scss'


const Sales = () => {
    return (
        <Carousel autoplay>
            <div>
                <h3 className={style.content}>1</h3>
            </div>
            <div>
                <h3 className={style.content}>2</h3>
            </div>
            <div>
                <h3 className={style.content}>3</h3>
            </div>
            <div>
                <h3 className={style.content}>4</h3>
            </div>
        </Carousel>
    )
}

export default Sales;

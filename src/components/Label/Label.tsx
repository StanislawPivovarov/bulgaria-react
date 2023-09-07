import React from "react";
import style from './Label.module.scss'

const Label = () => {
    return(
        <div className={style.label_wrapper}>
        <div className={style.label}>
            <h1 className={style.text} style={{textAlign: 'center'}}>АКЦИЯ</h1>
        </div>
        </div>

    )
}

export default Label;

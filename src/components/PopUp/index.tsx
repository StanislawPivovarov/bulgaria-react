import { Button, Modal } from "antd";
import React, { useState } from "react";
import test from '../../assets/popup/56d9edc0508af5327e71c157f85c3570.jpeg'
import style from './PopUp.module.scss'

const PopUp = (props:any) => {

    const width = window.innerWidth
    var close
    if (width > 992){
        close = true
    }
    else (
        close = false
    )
    console.log(close)

    return (
        <div>
            
            <Modal centered className={style.popup} footer={false} open={props.open} onOk={props.onOk} closable={close} onCancel={props.onCancel}>
                <img src={test} className={style.image} alt="" />
                <div className={style.popup_content}>
                    <h1>Профессиональное создание каталога для TopShues</h1>
                    <p className={style.description}>Мы представляем полный цикл создания каталогов для обувного магазина. Мы работали тесно с клиентом, выбрали оптимальную бумагу, распечатали каталоги и сделали контроль качества. Мы гарантируем максимальное качество нашей работы и готовы представлять продукцию магазина на высоком уровне.</p>
                    <div className={style.link}>
                        <p>Товар:</p>
                        <Button type="default">Буклеты и брошюры</Button>
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default PopUp;

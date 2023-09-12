import React from "react";
import { Button, Carousel, Col, Row } from "antd";

import style from './Sales.module.scss'
import back from '../../assets/back.png'
import Label from "../Label";
import card from '../../assets/Визитки.png'
import { RightOutlined } from "@ant-design/icons";

const Sales = () => {
    return (
        <Carousel autoplay>
            <div className={style.content}>
                <div>
                    <img className={style.back} src={back} alt="" />
                    <div className={style.content_filling}>
                        <Row justify={"center"}>
                            <Col xs={23} lg={20}>
                                <div className={style.content_header}>
                                    <img className={style.image} src={card} alt="" />

                                    <div className={style.content_text}>
                                        <h1 className={style.header_text}>Печать визиток
                                            по 1.10₽</h1>
                                        <Label class={style.label} />
                                    </div>
                                    <p className={style.description}>Двухсторонняя цветная печать на плотной мелованной бумаге</p>
                                </div>
                                <div className={style.button_group}>
                                <Button className={style.order_btn} type="primary">Заказать <RightOutlined className={style.btn_logo}/></Button>
                                <Button className={style.more_sales} type="default">Все акции <RightOutlined className={style.more_sales_logo}/></Button>

                                </div>
                             
                            </Col>
                        </Row>

                    </div>
                </div>
            </div>
        </Carousel>
    )
}

export default Sales;

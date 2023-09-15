import React from "react";
import style from './ProductMenu.module.scss'
import { Button, Col, Row } from "antd";
import ProductCard from "../ProductCard";

const ProductMenu = () => {
    return (
        <div className={style.back}>
            <Row justify={'center'}>
                <Col xs={23} lg={20}>
                    <h2 className={style.header}>Наши услуги и продукция</h2>
                    <div className={style.button_group}>
                        <Button className={style.chip} type="primary">Наши услуги и продукция</Button>
                        <Button className={style.chip} type="default">Печати и штампы</Button>
                        <Button className={style.chip} type="default">Лазерная гравировка</Button>
                        <Button className={style.chip} type="default">Полиграфия</Button>
                        <Button className={style.chip} type="default">Собственное производство</Button>
                    </div>


                    <div className={style.cards}>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />

                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProductMenu;

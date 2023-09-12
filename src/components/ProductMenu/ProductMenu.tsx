import React from "react";
import style from './ProductMenu.module.scss'
import { Button, Col, Row } from "antd";

const ProductMenu = () => {
    return(
        <div className={style.back}>
            <Row justify={'center'}>
                <Col  xs={23} lg={20}>
                    <h2 className={style.header}>Наши услуги и продукция</h2>
                    <Button type="primary">Тест</Button>
                    <Button type="primary">Тест</Button>
                    <Button type="primary">Тест</Button>
                    <Button type="primary">Тест</Button>
                    <Button type="primary">Тест</Button>
                    <Button type="primary">Тест</Button>


                </Col>
            </Row>
        </div>
    )
}

export default ProductMenu;

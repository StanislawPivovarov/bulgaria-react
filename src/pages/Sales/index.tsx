import React from "react";
import style from './SalesPage.module.scss'
import back from '../../assets/background/427d5d07b90ff63bded756568f027851.png'
import ProductCard from "../../components/Main/ProductCard";
import SalesCard from "../../components/Sales/SalesCard";
import { Row, Col } from "antd";

const SalesPage = () => {
    return (

        <div className={style.back}>
            <Row justify={'center'}>
                <Col xs={23} lg={20}>
                    <h2 className={style.header}>Акции</h2>
                    <div className={style.component_wrapper}>
                        <SalesCard />
                        <SalesCard />
                        <SalesCard />
                        <SalesCard />
                        <SalesCard />
                        <SalesCard />
                    </div>
                </Col>
            </Row>



            <img className={style.back_img} src={back} alt="" />
        </div>
    )
}

export default SalesPage;
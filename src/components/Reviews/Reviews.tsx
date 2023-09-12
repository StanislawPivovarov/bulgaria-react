import React from "react";
import style from './Reviews.module.scss'
import { Button, Carousel, Col, Row } from "antd";
import Review from "../Review/Review";

const Reviews = () => {
    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };
    return (
        <div className={style.back}>
            <Row justify={'center'}>
                <Col xs={23} lg={20}>
                    <h2 className={style.header}>Отзывы клиентов</h2>
                    <div className={style.container}>
                        <Button className={style.button}></Button>
                        <Carousel dots={false} afterChange={onChange}>
                            <Review />
                            <Review />
                            <Review />
                            <Review />
                            <Review />
                        </Carousel>
                        <Button className={style.button}></Button>
                    </div>


                </Col>
            </Row>
        </div>
    )
}

export default Reviews;
import React from "react";
import style from './Dicrections.module.scss'
import back from '../../assets/background/427d5d07b90ff63bded756568f027851.png'
import { Col, Row } from "antd";
import cover from '../../assets/directions/Frame 34189.png'
import tech from '../../assets/directions/Frame-Е.png'
import PrimaryHeader from "../../components/PrimaryHeader";
import ProductCard from "../../components/Main/ProductCard";
import PortfolioCarousel from "../../components/PortfolioCarousel";

const Directions = () => {
    return (
        <div className={style.back}>
            <Row justify={'center'} style={{paddingBottom: 50}}>
                <Col xs={24} lg={20}>
                    <div className={style.content}>
                        <h2 className={style.header}>печати и штампы</h2>
                        <div className={style.description_position}>
                            <img className={style.cover} src={cover} alt="" />
                            <div className={style.description}>
                                <p>
                                    Любой организации необходимы печати и штампы, которыми будет заверяться вся документации компании. В зависимости от активности работ, даннымы, юридически заверенными атрибутами, пользуются почти каждый день! Поэтому печать является обязательным элементом каждого предприятия.
                                    <br />
                                    <br />
                                    Среди печатей существуют гербовые, рельефные печати или штампы, печати с логотипами и реквизитами компаний и другими элементами для защиты документации. Кроме того, мы производим изготовление печатей, использующих особые чернила. Благодаря этому, печати можно ставить на таких материалах как пластик, стекло или металл. Также существуют чернила, видимые исключительно под ультрафиолетовыми лучами.
                                </p>
                            </div>
                        </div>

                        <PrimaryHeader className={style.tech} header="Используемые технологии" />
                        <div className={style.tech_position}>
                            <img src={tech} className={style.cover} alt="" />
                            <div className={style.description}>
                                <p>
                                    Любой организации необходимы печати и штампы, которыми будет заверяться вся документации компании. В зависимости от активности работ, даннымы, юридически заверенными атрибутами, пользуются почти каждый день! Поэтому печать является обязательным элементом каждого предприятия.
                                    <br />
                                    <br />
                                    Среди печатей существуют гербовые, рельефные печати или штампы, печати с логотипами и реквизитами компаний и другими элементами для защиты документации. Кроме того, мы производим изготовление печатей, использующих особые чернила. Благодаря этому, печати можно ставить на таких материалах как пластик, стекло или металл. Также существуют чернила, видимые исключительно под ультрафиолетовыми лучами.
                                    <br />
                                    <br />
                                    Для оформления заявки на изготовление и получение печати организации, Вам необходимо предоставить всю информацию, которая будет наноситься на печать и пакет документов. Для различных видов печатей существуют отдельные списки обязательных документов, которые будут подробно рассмотрены ниже. Кроме того, вы должны будете сообщить назначение изделия: штамп, факсимиле, печать, пломбиры. При желании, Вы также можете сделать заказ на изготовление экслибриса или декоративной печати лично для себя или в подарок.
                                    <br />
                                    <br />
                                    На тот случай, если Вы уже приняли решение изготовить печати и штампы, но не знаете, как они будет выглядеть, есть типография, специалисты которой помогут с разработкой макета. После утверждения заказ отправляется на производство.
                                </p>
                            </div>
                        </div>

                        <PrimaryHeader className={style.tech} header="Виды продукции" />

                        <div className={style.products}>
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />

                        </div>


                    </div>
                    <PrimaryHeader className={style.tech} header="Примеры наших работ" />
                </Col>

                <PortfolioCarousel className={style.carousel} />
            </Row>
            <img className={style.back_img} src={back} alt="" />
        </div>
    )
}

export default Directions;
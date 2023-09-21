import { Row, Col, Table, Button } from "antd";
import React from "react";
import style from './Product.module.scss'
import product from '../../assets/product/Frame 34189.png'
import PrimaryHeader from "../../components/PrimaryHeader";
import image from '../../assets/CardPic.jpeg'
import YouTube from 'react-youtube';
import todat from '../../assets/product/todat.png'
import ProductCard from "../../components/Main/ProductCard";
import back from '../../assets/background/427d5d07b90ff63bded756568f027851.png'
import ReactPlayer from 'react-player'


const Product = () => {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Товар 1',
            dataIndex: 'tov1',
            key: 'tov1',
        },
        {
            title: 'Товар 2',
            dataIndex: 'tov1',
            key: 'tov1',
        },
        {
            title: 'Товар 3',
            dataIndex: 'tov1',
            key: 'tov1',
        },
        {
            title: 'Товар 4',
            dataIndex: 'tov1',
            key: 'tov1',
        },
    ];

    return (
        <>
            <div className={style.back}>
                <img src={back} className={style.back_img} alt="" />
                <Row justify={'center'} style={{ paddingBottom: 50 }}>
                    <Col xs={24} lg={20}>
                        <div className={style.content}>
                            <h2 className={style.header}>печати и штампы</h2>
                            <div className={style.head_content}>
                                <img className={style.cover} src={product} alt="" />
                                <div className={style.description}>
                                    <p>Изготовление гербовой печати по ГОСТу</p>
                                    <p>– сложная и трудоемкая задача. Для получения печати юридическим или физическим лицом, необходимо собрать определенный объем документов, а также предоставить письменое заявление о необходимости изготовления гербовой печати.</p>
                                </div>
                            </div>


                            <PrimaryHeader className={style.blue_header} header="Примеры наших работ" />

                            <div className="images">
                                <div className={style.first_line} >
                                    <div className="big">
                                        <img src={image} className={style.img_big} alt="" />
                                    </div>
                                    <div className={style.mini}>
                                        <div className={style.first}>
                                            <img src={image} className={style.img_big} alt="" />
                                            <img src={image} className={style.img_big} alt="" />
                                        </div>
                                        <div className={style.first}>
                                            <img src={image} className={style.img_big} alt="" />
                                            <img src={image} className={style.img_big} alt="" />
                                        </div>
                                    </div>

                                </div>

                                <div className={style.all_left}>
                                    <img src={image} className={style.img_big} alt="" />
                                    <img src={image} className={style.img_big} alt="" />
                                    <img src={image} className={style.img_big} alt="" />
                                </div>
                            </div>

                            <PrimaryHeader className={style.blue_header} header="Ценовые ожидания" />
                            <Table className={style.table} pagination={false} dataSource={dataSource} columns={columns} />
                            <PrimaryHeader className={style.blue_header} header="Преимущества" />
                            <h2>Добавить преимущества и сделать вертску для них</h2>
                            <PrimaryHeader className={style.blue_header} header="Особенности производства" />
                            <div className={style.video_content}>
                                <div className={style.player}>

                                    <ReactPlayer
                                        url={"https://www.youtube.com/watch?v=KsqNi87VVrE"}
                                        width={"100%"}
                                        height={"100%"}
                                    />
                                </div>

                                <div className={style.video_description}>
                                    <p>Любой организации необходимы печати и штампы, которыми будет заверяться вся документации компании. В зависимости от активности работ, даннымы, юридически заверенными атрибутами, пользуются почти каждый день! Поэтому печать является обязательным элементом каждого предприятия.</p>
                                    <p>Среди печатей существуют гербовые, рельефные печати или штампы, печати с логотипами и реквизитами компаний и другими элементами для защиты документации. Кроме того, мы производим изготовление печатей, использующих особые чернила. Благодаря этому, печати можно ставить на таких материалах как пластик, стекло или металл. Также существуют чернила, видимые исключительно под ультрафиолетовыми лучами.</p>
                                    <p>Любой организации необходимы печати и штампы, которыми будет заверяться вся документации компании. В зависимости от активности работ, даннымы, юридически заверенными атрибутами, пользуются почти каждый день! Поэтому печать является обязательным элементом каждого предприятия.</p>
                                </div>
                            </div>

                            <PrimaryHeader className={style.blue_header} header="Модели товара" />
                            <div className={style.product_contents}>
                                <div className={style.product}>
                                    <img src={todat} alt="" />
                                    <p className={style.product_name}>Trodat Модель 1</p>
                                    <p className={style.product_description}>Краткое описание что это. Преимущества данной модели. Кейсы в каких случаях выбирать эту модель.</p>
                                </div>
                                <div className={style.product}>
                                    <img src={todat} alt="" />
                                    <p className={style.product_name}>Trodat Модель 1</p>
                                    <p className={style.product_description}>Краткое описание что это. Преимущества данной модели. Кейсы в каких случаях выбирать эту модель.</p>
                                </div>
                                <div className={style.product}>
                                    <img src={todat} alt="" />
                                    <p className={style.product_name}>Trodat Модель 1</p>
                                    <p className={style.product_description}>Краткое описание что это. Преимущества данной модели. Кейсы в каких случаях выбирать эту модель.</p>
                                </div>
                                <div className={style.product}>
                                    <img src={todat} alt="" />
                                    <p className={style.product_name}>Trodat Модель 1</p>
                                    <p className={style.product_description}>Краткое описание что это. Преимущества данной модели. Кейсы в каких случаях выбирать эту модель.</p>
                                </div>
                            </div>

                            <div className={style.feedback}>
                                <p>
                                    Заинтересовала наша продукция? Оставьте заявку
                                    и мы с вами свяжемся.
                                </p>
                                <Button type="primary">Заказать звонок</Button>
                            </div>

                            <h2 className={style.recommendations}>Возможно вас заинтересует</h2>
                            <div className={style.products}>
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />

                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Product;

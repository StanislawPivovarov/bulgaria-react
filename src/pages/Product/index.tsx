import { Row, Col, Table, Button } from "antd";
import React, { useEffect, useState } from "react";
import style from './Product.module.scss'
import product from '../../assets/product/Frame 34189.png'
import PrimaryHeader from "../../components/PrimaryHeader";
import image from '../../assets/CardPic.jpeg'
import YouTube from 'react-youtube';
import todat from '../../assets/product/todat.png'
import ProductCard from "../../components/Main/ProductCard";
import back from '../../assets/background/427d5d07b90ff63bded756568f027851.png'
import ReactPlayer from 'react-player'
import { useParams } from "react-router-dom";
import getCategoriesByLink from "../../api/getGategoriesByLink/getGategoriesByLink";
import getProductsByLink from "../../api/getProductsByLink/getProductsByLink";
import Markdown from "react-markdown";
import Advantages from "../../components/Advantages";


const Product = () => {
    const [loading, setLoading] = useState(true);
    const { id, slug }: any = useParams();
    console.log(id)
    console.log(slug)


    const [data, setData] = useState<any>(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getProductsByLink(slug);
                setData(response.attributes);

            } catch (error) {

            }
            finally {
                setLoading(false); // Устанавливаем статус загрузки в false независимо от результата
            }

        };

        fetchData();
    }, [slug]);
    console.log(data?.products)

    if (loading) {
        // Можете добавить здесь лоадер или другой компонент, который будет отображаться во время загрузки
        return <div>Loading...</div>;
    }
    return (

        <>
            <div className={style.back}>
                <img src={back} className={style.back_img} alt="" />
                <Row justify={'center'} style={{ paddingBottom: 50 }}>
                    <Col xs={24} lg={20}>
                        <div className={style.content}>
                            <h2 className={style.header}>{data.name}</h2>
                            <div className={style.head_content}>
                                <img className={style.cover} src={product} alt="" />
                                <div className={style.description}>
                                    <Markdown>
                                        {data.description}
                                    </Markdown>
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

                            </div>

                            <PrimaryHeader className={style.blue_header} header="Преимущества" />
                            <Advantages/>
                            <PrimaryHeader className={style.blue_header} header="Особенности производства" />
                            <div className={style.video_content}>
                                <div className={style.player}>

                                    <ReactPlayer
                                        url={data.video}
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

                                {
                                    data?.products.data.map((item: {
                                        attributes: any; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined;
                                    }) => (
                                        <div className={style.product}>
                                            <img src={todat} alt="" />
                                            <p className={style.product_name}>{item.attributes.name}</p>
                                            <p className={style.product_description}>{item.attributes.description}</p>

                                        </div>
                                    ))}


                            </div>

                            <div className={style.feedback}>
                                <p>
                                    Заинтересовала наша продукция? Оставьте заявку
                                    и мы с вами свяжемся.
                                </p>
                                <Button href="#callbackwidget" type="primary">Заказать звонок</Button>
                            </div>

                            {/* <h2 className={style.recommendations}>Возможно вас заинтересует</h2>
                            <div className={style.products}>
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />

                            </div> */}
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}


export default Product;
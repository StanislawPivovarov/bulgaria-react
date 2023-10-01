
import React, { useEffect, useState } from "react";
import style from './Dicrections.module.scss'
import back from '../../assets/background/427d5d07b90ff63bded756568f027851.png'
import { Col, Row } from "antd";
import cover from '../../assets/directions/Frame 34189.png'
import tech from '../../assets/directions/Frame-Е.png'
import PrimaryHeader from "../../components/PrimaryHeader";
import ProductCard from "../../components/Main/ProductCard";
import PortfolioCarousel from "../../components/PortfolioCarousel";
import { Outlet, useParams } from "react-router-dom";
import getCategoriesByLink from "../../api/getGategoriesByLink/getGategoriesByLink";
import Markdown from "react-markdown";

const Directions = () => {
    // const [loading, setLoading] = useState(true);
    const { id, slug }: any = useParams();
    console.log(id)
    console.log(slug)

    const [data, setData] = useState<any>(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getCategoriesByLink(id);
                setData(response.attributes);

            } catch (error) {

            }
        };

        fetchData();
    }, [id]);

    console.log("shit", data)

    return (
        <div className={style.back}>
            <Row justify={'center'} style={{ paddingBottom: 50 }}>
                <Col xs={24} lg={20}>
                    <div className={style.content}>
                        <h2 className={style.header}>{data?.name}</h2>
                        <div className={style.description_position}>
                            <img className={style.cover} src={cover} alt="" />
                            <div className={style.description}>
                                <p>
                                    <Markdown className={style.markdown}>
                                        {data?.description}
                                    </Markdown>
                                </p>
                            </div>
                        </div>

                        <PrimaryHeader className={style.tech} header="Используемые технологии" />
                        <div className={style.tech_position}>
                            <img src={tech} className={style.cover} alt="" />
                            <div className={style.description}>
                                <p>
                                    <Markdown>
                                        {data?.technologies}
                                    </Markdown>
                                </p>
                            </div>
                        </div>

                        <PrimaryHeader className={style.tech} header="Виды продукции" />

                        <div className={style.products}>

                            {
                                data?.product_categories?.data.map((item: { attributes: { name: any; description: any }; }): any => (
                                    <ProductCard
                                        name={item?.attributes?.name}
                                        description={item?.attributes?.description}
                                    />
                                ))
                            }

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
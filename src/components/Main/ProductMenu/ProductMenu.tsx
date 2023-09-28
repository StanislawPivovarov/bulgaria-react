import React, { useEffect, useState } from "react";
import style from './ProductMenu.module.scss'
import { Button, Col, Row, Spin } from "antd";
import ProductCard from "../ProductCard";
import getCategories from "../../../api/getCategories/getCategories";
import { useToggle } from "ahooks";

const ProductMenu = () => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState();
    const [isData, setIsData] = useState<any[]>([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCategories();
                setData(data);
                setLoading(false)
            } catch (error) {

            }
        };

        fetchData();
    }, [setData]);


    const showData = (buttonNumber: any) => {
        switch (buttonNumber) {
            case 1:
                //@ts-ignore
                setIsData(data[0].attributes.product_categories.data);
                break;
            case 2:
                //@ts-ignore
                setIsData(data[1].attributes.product_categories.data);
                break;
            case 3:
                //@ts-ignore
                setIsData(data[2].attributes.product_categories.data);
                break;
            case 4:
                //@ts-ignore
                setIsData(data[3].attributes.product_categories.data);
                break;
            default:
                //@ts-ignore
                setIsData(data[0].attributes.product_categories.data);
                break
        }

    };
    //@ts-ignore
    // console.log(data[1].attributes.product_categories.data)
    if(isLoading) {
        return(<Spin/>)
    }

    return (
        <div className={style.back}>
            <Row justify={'center'}>
                <Col xs={23} lg={20}>
                    <h2 className={style.header}>Наши услуги и продукция</h2>
                    <div className={style.button_group}>
                        <Button onClick={() => showData(1)} className={style.chip} type="default">Печати и штампы</Button>
                        <Button onClick={() => showData(2)} className={style.chip} type="default">Лазерная гравировка</Button>
                        <Button onClick={() => showData(3)} className={style.chip} type="default">Полиграфия</Button>
                        <Button onClick={() => showData(4)} className={style.chip} type="default">Собственное производство</Button>
                    </div>


                    <div className={style.cards}>
                        {
                            isData &&
                            isData.map((item: any) => (
                                <ProductCard key={item.id} name={item.attributes.name} description={item.attributes.description} />
                            )
                            )

                        }

                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProductMenu;

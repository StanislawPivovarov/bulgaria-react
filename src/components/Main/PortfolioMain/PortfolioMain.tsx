import React, { useEffect, useState } from "react";
import style from './PortfolioMain.module.scss'
import test from '../../../assets/test.jpeg'
import { RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Marquee from "react-fast-marquee";
import PopUp from "../../PopUp";
import getPortfolio from "../../../api/getPortfolio/getPortfolio";


const PortfolioMain = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [modalData, setModalData] = useState<any>(null);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    console.log(modalData)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPortfolio();
                setData(response);

            } catch (error) {

            } finally {
                setIsLoading(false)
            }

        };

        fetchData();
    }, []);
    console.log(data)
    if (isLoading) {
        return <p>Loading</p>
    }
    return (
        <div className={style.back}>
            <h2 className={style.header}>Портфолио</h2>
            <Marquee>
                {
                    data.map((item: { attributes: { image: string | undefined; }; }) => (
                        <>
                            <Button onClick={() => { setModalData(item); showModal(); }} className={style.image_button} type="link">
                                <div className={style.image_container}>
                                    <img className={style.image} alt="" src={item.attributes.image} />
                                </div>
                            </Button>
                        </>
                    ))
                }

            </Marquee>
            {modalData && (
                <PopUp
                    header={modalData.attributes.name}
                    image={modalData.attributes.image}
                    description={modalData.attributes.description}
                    slug={modalData.attributes.product_category.data.id}
                    category={modalData.attributes.product_category.data.attributes.name}
                    category_id={modalData.attributes.product_category.data.attributes.direction.data.id}
                    product_category_id={modalData.attributes.product_category.data.id}
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel} />

            )
            }
            <Button type="link" className={style.portfolio_link} href="/portfolio">Смотреть все работы <RightOutlined /></Button>
        </div>
    )
}

export default PortfolioMain;

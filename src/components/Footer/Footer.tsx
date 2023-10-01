import React, { useEffect, useState } from "react";
import style from './Footer.module.scss'
import { Row, Col, Divider } from "antd";
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa'
import axios from "axios";
import getCategories from "../../api/getCategories/getCategories";

const Footer = () => {
    const [menu, setMenu] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getCategories();
                setMenu(data);
            } catch (error) {

            }
        };

        fetchData();
    }, [setMenu]);



    // console.log(menu)
    if (!!menu.length) {

        return (
            <div className={style.footer}>
                <Row justify={'center'}>
                    <Col xs={23} lg={20}>
                        <div className={style.footer_menu}>
                            <div className={style.bottom_menu}>
                                {
                                    menu.map((item) => (
                                        <div className={style.col_content}>
                                            <a href={`/${item.id}`} className={style.directions}>{item.attributes.name}</a>
                                            <div className={style.menu_content}>
                                                {
                                                    item.attributes.product_categories.data.map((cat: any) => (
                                                        <a href={`/${item.id}/${cat.id}`} className={style.items}>{cat.attributes.name}</a>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    )
                                    )

                                }
                            </div>
                        </div>
                        <Divider className={style.divider} />
                        <div className={style.contact_info}>
                            <div className={style.contact_info_links} >
                                <a className={style.contact_link} href="tel:88432777633">
                                    <AiFillPhone style={{ marginRight: 10 }} />
                                    8 (843) 277-76-33
                                </a>
                                <a className={style.contact_link} href="mailto:1@gbkzn.ru">
                                    <MdEmail style={{ marginRight: 10 }} />
                                    1@gbkzn.ru
                                </a>
                                <a className={style.contact_link} href="/#">
                                    <FaMapMarkerAlt style={{ marginRight: 10 }} />
                                    г. Казань, Оренбургский тракт д.20
                                </a>
                            </div>

                            <p className={style.copyright}>Графика Булгария © 2010 - 2023</p>
                        </div>
                    </Col>
                </Row>

            </div>
        )
    }
    return (
        <></>
    )
}

export default Footer;

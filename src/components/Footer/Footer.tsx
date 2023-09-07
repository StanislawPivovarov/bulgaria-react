import React from "react";
import style from './Footer.module.scss'
import { Row, Col, Divider } from "antd";
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className={style.footer}>
            <Row justify={'center'}>
                <Col xs={23} lg={20}>
                    <div className={style.footer_menu}>
                        
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

export default Footer;

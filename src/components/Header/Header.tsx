import React from "react";
import style from './Header.module.scss'
import { Button, Col, Row } from "antd";
import logo from '../../assets/logo.svg'
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { MenuOutlined } from "@ant-design/icons";

const Header = () => {
    return (
        <div className={style.header}>
            <Row style={{ height: "100%" }} justify={'center'}>
                <Col xs={22} lg={20}>
                    <div className={style.header_content}>
                        <div className={style.logo_content}>
                            <img className={style.logo} src={logo} alt="logo" />
                            <Button type="link" className={style.menu_button}><MenuOutlined style={{fontSize: 20}}/></Button>
                        </div>

                        <div>
                            <ul className={style.contact_ul}>
                                <li className={style.contact_li}>
                                    <a className={style.contact_link} href="tel:88432777633">
                                        <AiFillPhone style={{ marginRight: 10 }} />
                                        8 (843) 277-76-33
                                    </a>
                                </li>
                                <li className={style.contact_li}>
                                    <a className={style.contact_link} href="mailto:1@gbkzn.ru">
                                        <MdEmail style={{ marginRight: 10 }} />
                                        1@gbkzn.ru
                                    </a>
                                </li>
                                <li className={style.contact_li}>
                                    <a className={style.contact_link} href="/#">
                                        <FaMapMarkerAlt style={{ marginRight: 10 }} />
                                        г. Казань, Оренбургский тракт д.20
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Header;

import React from "react";
import style from './Menu.module.scss'
import { Button, Col, Dropdown, MenuProps, Row } from "antd";
import { MenuOutlined, SearchOutlined, SmileOutlined } from "@ant-design/icons";

const Menu = () => {
    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item (disabled)
            </a>
          ),
          icon: <SmileOutlined />,
          disabled: true,
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item (disabled)
            </a>
          ),
          disabled: true,
        },
        {
          key: '4',
          danger: true,
          label: 'a danger item',
        },
      ];
    return (
        <div className={style.menu}>
            <Row style={{ height: "100%" }} justify={'center'}>
                <Col xs={23} lg={20}>
                    <div className={style.button_container}>
                    <Dropdown overlayStyle={{borderRadius:0}} menu={{ items }}>
                    <Button className={style.button} type="link">
                            <MenuOutlined /> Меню
                        </Button>
                    </Dropdown>
                    <Dropdown menu={{ items }}>
                    <Button className={style.button} type="link">Печати и штампы</Button>
                    </Dropdown>
                    <Dropdown menu={{ items }}>
                    <Button className={style.button} type="link">Лазерная гравировка</Button>
                    </Dropdown>
                    <Dropdown menu={{ items }}>
                    <Button className={style.button} type="link">Полиграфия</Button>
                    </Dropdown>
                    <Dropdown menu={{ items }}>
                    <Button className={style.button} type="link">Собственное призводство</Button>
                    </Dropdown>
                        <Button className={style.button} type="link">
                            <SearchOutlined />
                            Поиск</Button>
                    </div>

                </Col>
            </Row>

        </div>
    )
}

export default Menu;

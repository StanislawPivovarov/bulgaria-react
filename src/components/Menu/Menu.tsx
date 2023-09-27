import React from "react";
import style from './Menu.module.scss'
import { Button, Col, Dropdown, Input, MenuProps, Row } from "antd";
import { CloseOutlined, MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { useToggle } from "ahooks";

const Menu = () => {
  const [state, { toggle }] = useToggle();
  console.log(state)
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a className={style.links} href="/">
          Главная
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a className={style.links} href="/about">
          О нас
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a className={style.links} href="/reviews">
          Отзывы
        </a>
      ),
    },
    {
      key: '4',
      label: (
        <a className={style.links} href="/contacts">
          Контакты
        </a>
      ),
    },
    {
      key: '5',
      label: (
        <a className={style.links} href="/sales">
          Скидки
        </a>
      ),
    },
    {
      key: '6',
      label: (
        <a className={style.links} href="/portfolio">
          Портфолио
        </a>
      ),
    },
    {
      key: '7',
      label: (
        <a className={style.links} href="/direction">
          Направление
        </a>
      ),
    },
    {
      key: '8',
      label: (
        <a className={style.links} href="/product">
          Продукт
        </a>
      ),
    },
  ];

  if (state === true) {
    return (
      <div className={style.menu}>
        <Row style={{ height: "100%" }} justify={'center'}>
          <Col xs={23} lg={20}>
            <div className={style.button_container}>
            <Input className={style.searchBar} placeholder="Что хотите напечатать?" prefix={<SearchOutlined className={style.prefix} />} suffix={<Button type="link" onClick={toggle}><CloseOutlined className={style.suffix} /></Button>} />

            </div>
          </Col>
        </Row>
      </div>
    )
  }



  return (
    <div className={style.menu}>
      <Row style={{ height: "100%" }} justify={'center'}>
        <Col xs={23} lg={20}>
          <div className={style.button_container}>
            <Dropdown overlayStyle={{ borderRadius: 0 }} menu={{ items }}>
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
            <Button onClick={toggle} className={style.button} type="link">
              <SearchOutlined />
              Поиск</Button>
          </div>

        </Col>
      </Row>

    </div>
  )
}

export default Menu;

import React, { useEffect, useState } from "react";
import style from './Menu.module.scss'
import { Button, Col, Dropdown, Input, MenuProps, Row, Menu as Menue } from "antd";
import { CloseOutlined, MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { useToggle } from "ahooks";
import Fuse from "fuse.js";
import { useNavigate } from "react-router-dom";
import getCategories from "../../api/getCategories/getCategories";

const Menu = () => {
  const [state, { toggle }] = useToggle();
  const navigate = useNavigate();

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


  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a className={style.links} href="/sales">
          Акции
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a className={style.links} href="/portfolio">
          Портфолио
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
        <a className={style.links} href="/about">
          О нас
        </a>
      ),
    },
    {
      key: '5',
      label: (
        <a className={style.links} href="/contacts">
          Контакты
        </a>
      ),
    },
    {
      key: '6',
      label: (
        <a className={style.links} href="/glossary">
          Словарь
        </a>
      ),
    },
    {
      key: '7',
      label: (
        <a className={style.links} href="/glossary">
          Словарь
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
              <Input onClick={() => (navigate('/search'), { toggle })} className={style.searchBar} placeholder="Что хотите напечатать?" prefix={<SearchOutlined className={style.prefix} />} suffix={<Button type="link" onClick={toggle}><CloseOutlined className={style.suffix} /></Button>} />

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

            {
              menu.map((items) => {
                console.log(items)
                const menuItems: MenuProps['items'] = items.attributes.product_categories.data.map((item: any) => {
                  return {
                    key: item.id,
                    label: (
                      <a href={`/${items.id}/${item.id}`} className={style.links}>
                        {item.attributes.name}
                      </a>
                    ),
                  }

                }


                )
                return (
                  <Dropdown menu={{ items: menuItems }}>
                    <Button href={`/${items.id}`} className={style.button} type="link">{items.attributes.name}</Button>
                  </Dropdown>
                )
              }
              )

            }
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

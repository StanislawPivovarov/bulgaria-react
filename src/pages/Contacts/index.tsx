import React from "react";
import style from './Contacts.module.scss'
import { MdLocationOn } from "react-icons/md";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { RiWhatsappFill } from 'react-icons/ri'
import instagram from '../../assets/contacts/instagram.svg'
import vk from '../../assets/contacts/vk.svg'
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const Contacts = () => {
    const width = window.innerWidth;
    let dynamiccenter = []
    if (width >= 992) {
        dynamiccenter=[55.760454, 49.144943]
    } else {
        dynamiccenter = [55.760347, 49.147934]
    }
    return (
        <div className={style.contacts}>
            <div className={style.contacts_content}>
                <h2 className={style.contacts_content_header}>Контактная информация</h2>
                <div className={style.contacts_content_info}>
                    <a href="#" target="_blank">
                        <MdLocationOn className={style.icon} />
                        <p className={style.contacts_content_link}>Республика Татарстан, г. Казань,
                            ул Оренбургский тракт, 20</p>
                    </a>
                    <a href="tel:88432777633">
                        <AiFillPhone className={style.icon} />
                        <p className={style.contacts_content_link}>8 (843) 277-76-33</p>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=88432777633" target="_blank">
                        <RiWhatsappFill className={style.icon} />
                        <p className={style.contacts_content_link}>8 (843) 277-76-33</p>
                    </a>
                    <a href="mailto:1@gbkzn.ru" target="_blank">
                        <AiFillMail className={style.icon} />
                        <p className={style.contacts_content_link}>1@gbkzn.ru</p>
                    </a>
                    <a>
                        <img className={style.icon} src={instagram} alt="" />
                        <p className={style.contacts_content_link}>grafika.bulgaria</p>
                    </a>
                    <a href="https://vk.com/grafika_bulgaria" target="_blank">
                        <img className={style.icon} src={vk} alt="" />
                        <p className={style.contacts_content_link}>vk.com/grafika_bulgaria</p>
                    </a>
                </div>
            </div>
            <YMaps>
                <Map className={style.map} defaultState={{ center: dynamiccenter, zoom: 17 }}>
                    <Placemark geometry={[55.760347, 49.147934]} />
                </Map>

            </YMaps>

        </div>
    )
}

export default Contacts;

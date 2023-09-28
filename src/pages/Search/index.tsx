import React, { useEffect, useState } from "react";
import getCategories from "../../api/getCategories/getCategories";
import SearchComponent from "../../components/SearchComponent";
import style from './Search.module.scss'
import { Row, Col } from "antd";

const Search = () => {
  const [data, setData] = useState<any[]>([]);
    
  useEffect(() => {
      const fetchData = async () => {
          try {
              const data = await getCategories();
              setData(data);
          } catch (error) {

          }
      };

      fetchData();
  }, [setData]);

  return(
    <div className={style.back}>
      <Row justify={"center"}>
        <Col xs={23} lg={20}>
        <h2>Результаты поиска</h2>
    <SearchComponent dataFromApi={data}/>
        </Col>
      </Row>
   
    </div>
  )
}

export default Search;


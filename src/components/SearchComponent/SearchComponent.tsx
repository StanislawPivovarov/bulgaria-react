import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
import style from './SearchComponent.module.scss'

const SearchComponent = ({ dataFromApi }:any) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const fuse = new Fuse(dataFromApi, {
    keys: [
      'attributes.name',
      'attributes.description',
      'attributes.productCategories.data.category',
    ],
    includeScore: true,
  });

  const getSuggestions = (value:any) => {
    const results = fuse.search(value);
    return results.map(result => result.item);
  };

  const handleInputChange = (e:any) => {
    const value = e.target.value;
    setSearchTerm(value);
    setShowResults(value !== '');
  };

  useEffect(() => {
    const results:any = fuse.search(searchTerm);
    setSearchResults(results.map((result: { item: any; }) => result.item));
  }, [searchTerm, dataFromApi]);

  const getResultLabel = () => {
    const count = searchResults.length;
    if (count === 1) {
      return 'результат';
    } else if (count > 1 && count < 5) {
      return 'результата';
    } else {
      return 'результатов';
    }
  };

  const Results = () => {
    if(searchResults.length === 0) {
        return <p>По вашему запросу ничего не найдено. Попробуйте ввести похожие по смыслу слова, чтобы получить лучший результат.</p>
    }
    else {
        
        return <p>Найдено: {searchResults.length} {getResultLabel()}</p>
    }
  }
  return (
    <div>
        
      <Input type='text' value={searchTerm} onChange={handleInputChange} className={style.searchBar} placeholder="Что хотите напечатать?" prefix={<SearchOutlined className={style.prefix} />} suffix={<Button type="link" ><CloseOutlined className={style.suffix} /></Button>} />
      <p>{Results()}</p>
      {showResults && (
        <ul>
          {searchResults.map((result:any, index) => (
            <li key={index}>
              <strong>Title:</strong> {result.attributes.name}
              <strong>Description:</strong> {result.attributes.description}
              {/* <strong>Category:</strong> {result?.attributes.productCategories.data.category} */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchComponent;

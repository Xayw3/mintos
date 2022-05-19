import { useState } from 'react';
import './currencies-list.scss';
import currencies from '../../data/currencies';
import { Currencie } from '../../model/modelCurrencies';
import CurrenciesCheckbox from '../CurrenciesCheckbox/CurrenciesCheckbox';
import CurrenciesItem from '../CurrenciesItem/CurrenciesItem';

const CurrenciesList = () => {
  const [data, setData] = useState<Currencie[]>([...currencies]);

  return (
    <div className="currencies-wrapper">
      <div className="checked-items">
        {
          data.map((el) => (el.checked ? (
            <CurrenciesItem
              title={el.name}
              clickHandle={() => {
                setData(data.map((item) => (el.id === item.id ? { ...item, checked: !item.checked } : item)));
              }}
            />
          ) : null))
        }
      </div>
      <ul className="currencies-list">
        {
          data.map((el) => (
            <CurrenciesCheckbox
              title={el.name}
              label={el.name}
              className={el.checked ? 'bg-white' : ''}
              checked={el.checked}
              clickHandler={() => {
                setData(data.map((item) => (el.id === item.id ? { ...item, checked: !item.checked } : item)));
              }}
            />
          ))
      }
      </ul>
    </div>
  );
};

export default CurrenciesList;

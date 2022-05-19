import './currencies-item.scss';
import { FC } from 'react';

type CurrenciesItemProps = {
    title: string,
    clickHandle: () => void,
}

const CurrenciesItem:FC<CurrenciesItemProps> = ({ title, clickHandle }) => (
  <div className="item">
    {title}
    <button onClick={clickHandle} className="btn">x</button>
  </div>
);

export default CurrenciesItem;

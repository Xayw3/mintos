import { FC } from 'react';
import './currencies-checkbox.scss';

type CurrenciesCheckboxProps = {
    title: string,
    label: string,
    clickHandler: () => void,
    checked: boolean,
    className: string,
}

const CurrenciesCheckbox: FC<CurrenciesCheckboxProps> = ({
  title, label, clickHandler, checked, className,
}) => (
  <li className="currencies-item">
    <label className={`currencies-label ${className}`} htmlFor={`checkbox-${label}`}>
      <input checked={checked} id={`checkbox-${label}`} className="checkbox" type="checkbox" onClick={clickHandler} />
      <span>{title}</span>
      <span className="checkmark" />
    </label>
  </li>
);

export default CurrenciesCheckbox;

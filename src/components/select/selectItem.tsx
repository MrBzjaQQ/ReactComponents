import React from 'react';
import { SelectItemProps } from './selectTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './select.css';

export const SelectItem: React.FC<SelectItemProps> = ({ id, imgSrc, text, isSelected, onClick }) => {
  const itemClass = isSelected ? 'selected' : '';

  return (
    <div className={`select__item ${itemClass}`} onClick={() => onClick(id)}>
      <img className="select__picture" src={imgSrc} alt="select" />
      <span className="select__item-text">{text}</span>
      <div className="select__icon select__item-checkmark">
        <FontAwesomeIcon icon={faCheck} />
      </div>
    </div>
  );
};

export default SelectItem;
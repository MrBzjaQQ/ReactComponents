import React from 'react';
import { SelectItemProps } from './selectTypes';
import './select.css';

export const SelectItem: React.FC<SelectItemProps> = ({ id, imgSrc, text, isSelected, onClick }) => {
  const itemClass = isSelected ? 'selected' : '';
  return (
    <div className={`select__item ${itemClass}`} onClick={() => onClick(id)}>
      <img className="select__picture" src={imgSrc} alt="select" />
      <span className="select__item-text">{text}</span>
    </div>
  );
};

export default SelectItem;
import { FC } from 'react';
import { Select } from '../select/select';
import { SelectItemData } from '../select/selectTypes';
import data from './data';
import './selectDisplay.css';

export const SelectDisplay: FC = () => {
  const onSelect = (item ?: SelectItemData) => {
    console.log('Item Selected', item);
  };
  return <div className="select-display">
    <Select
      disabled={false}
      placeholder={"Sample placeholder"}
      imagePlaceholder={"logo192.png"}
      items={data}
      onSelect={onSelect}
    />
  </div>
};

export default SelectDisplay;
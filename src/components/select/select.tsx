import { FC, Fragment, ReactFragment, useState } from 'react';
import SelectItem from './selectItem';
import { SelectData, SelectItemData } from './selectTypes';
import './select.css';

export const Select: FC<SelectData> = ({ items, onSelect }) => {
  const [selectedItem, setSelectedItem] = useState<SelectItemData>();
  const [isOpen, setOpen] = useState<boolean>();

  const itemsMap = items.reduce((map: Record<number, SelectItemData>, item) => {
    map[item.id] = item;
    return map;
  }, {});

  const onItemSelected = (id: number) => {
    const item = itemsMap[id];
    setSelectedItem(item);
    onSelect(item);
    setOpen(false);
  };

  const onSelectClick = () => {
    setOpen(!isOpen);
  };

  const childNodes: ReactFragment[] = items.map((item) => <SelectItem
    key={item.id}
    id={item.id}
    imgSrc={item.imgSrc}
    text={item.text}
    isSelected={selectedItem?.id === item.id}
    onClick={onItemSelected}
  />);

  const selectedItemDisplay = selectedItem ? <Fragment>
    <img className="select__picture" src={selectedItem.imgSrc} alt="select"/>
    <span className="select__item-text">{selectedItem.text}</span>
  </Fragment> : null;

  const dropdownClass = isOpen ? 'open' : '';

  return (
    <div className="select" onClick={onSelectClick}>
      {selectedItemDisplay}

      <div className={`select__dropdown ${dropdownClass}`}>
        {childNodes}
      </div>
    </div>
  );
}
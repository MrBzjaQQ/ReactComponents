import { FC, Fragment, ReactFragment, useState } from 'react';
import SelectItem from './selectItem';
import { SelectProps, SelectItemData } from './selectTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './select.css';

// TODO: Click elsewhere to close
// TODO: Container
export const Select: FC<SelectProps> = ({ items, onSelect, placeholder, imagePlaceholder, disabled }) => {
  const [selectedItem, setSelectedItem] = useState<SelectItemData | null>();
  const [isOpen, setOpen] = useState<boolean>();

  const itemsMap = items.reduce((map: Record<number, SelectItemData>, item) => {
    map[item.id] = item;
    return map;
  }, {});

  const onItemSelected = (id: number) => {
    const item = id === selectedItem?.id ? undefined : itemsMap[id];
    setSelectedItem(item);
    onSelect(item);
    setOpen(false);
  };

  const onSelectClick = () => {
    if (disabled) {
      setOpen(false);
      return;
    }
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
    <img className="select__picture" src={selectedItem.imgSrc} alt="select" />
    <span className="select__item-text">{selectedItem.text}</span>
  </Fragment> : <Fragment>
      <img className="select__picture" src={imagePlaceholder} alt="select" />
      <span className="select__item-text placeholder">{placeholder}</span>
    </Fragment>;

  const dropdownClass = isOpen ? 'open' : '';
  const selectClass = disabled ? 'disabled' : '';

  return (
    <div className={`select ${selectClass}`} onClick={onSelectClick}>
      {selectedItemDisplay}
      <div className="select__icon select__down-icon">
        <FontAwesomeIcon icon={faChevronDown} />
      </div>

      <div className={`select__dropdown ${dropdownClass}`}>
        {childNodes}
      </div>
    </div>
  );
};

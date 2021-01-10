export interface SelectItemData {
  id: number,
  imgSrc: string,
  text: string,
};

export interface SelectItemProps extends SelectItemData {
  isSelected: boolean,
  onClick: (id: number) => void,
};

export interface SelectProps {
  items: SelectItemData[],
  placeholder: string,
  imagePlaceholder: string,
  disabled: boolean,
  onSelect: (item ?: SelectItemData) => void,
};

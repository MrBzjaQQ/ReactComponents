export interface SelectItemData {
  id: number,
  imgSrc: string,
  text: string,
};

export interface SelectItemProps extends SelectItemData {
  isSelected: boolean,
  onClick: (id: number) => void,
};

export interface SelectData {
  items: SelectItemData[],
  onSelect: (item: SelectItemData) => void
};

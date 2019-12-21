import * as React from 'react';
import Downshift from 'downshift';
import { Container, Menu, Button, Item } from './DropdownComponents';

type Color = {
  color?: string;
};

interface IDropdownProps {
  colors?: Color[];
  onChange?: (color: string) => void;
  itemToSting?: (color: string) => void;
  currentColor: string;
  setColor: (color: string) => void;
}

export const Dropdown: React.FC<IDropdownProps> = ({
  colors = [],
  setColor
}) => {
  return (
    <Downshift
      onChange={selected => (selected ? setColor(selected) : undefined)}
    >
      {({
        getRootProps,
        getMenuProps,
        getItemProps,
        getToggleButtonProps,
        isOpen,
        selectedItem,
        highlightedIndex
      }) => {
        return (
          <Container {...getRootProps()} isOpen={isOpen}>
            <Button {...getToggleButtonProps()}>
              {selectedItem || 'Colors'}
            </Button>
            <Menu {...getMenuProps()}>
              {colors.map(
                (color: any, index: number) =>
                  isOpen && (
                    <Item
                      {...getItemProps({
                        item: color,
                        index,
                        key: index,
                        style: {
                          background:
                            index === highlightedIndex ? color : 'white'
                        }
                      })}
                    >
                      <button type="button">{color}</button>
                    </Item>
                  )
              )}
            </Menu>
          </Container>
        );
      }}
    </Downshift>
  );
};

import * as React from 'react';
import Downshift from 'downshift';
import {
  Container,
  Menu,
  ButtonContainer,
  Button,
  Item,
  Input
} from './DropdownComponents';

// type Color = {
//   color?: string;
// };

interface IDropdownProps {
  colors: string[];
  onChange?: (color: string) => void;
  itemToSting?: (color: string) => string;
  currentColor: string;
  setColor: (color: string) => void;
}

export const Dropdown: React.FC<IDropdownProps> = ({
  colors = [],
  setColor
}) => {
  return (
    <Downshift onChange={color => (color ? setColor(color) : undefined)}>
      {({
        getRootProps,
        getMenuProps,
        getItemProps,
        getInputProps,
        getToggleButtonProps,
        isOpen,
        selectedItem,
        highlightedIndex,
        inputValue,
        reset
      }) => {
        return (
          <Container {...getRootProps()} isOpen={isOpen}>
            <ButtonContainer isOpen={isOpen}>
              <Button {...getToggleButtonProps()}>
                {selectedItem || 'Colors'}
              </Button>
              <button
                className="clear-search"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  reset({
                    inputValue: '',
                    isOpen: true
                  })
                }
              >
                &times;
              </button>
            </ButtonContainer>
            <Menu {...getMenuProps()}>
              {isOpen && (
                <Input
                  {...getInputProps()}
                  placeholder="Search color"
                  autoFocus
                />
              )}
              {// On search
              isOpen &&
              inputValue &&
              inputValue.length > 0 &&
              inputValue !== selectedItem
                ? colors
                    .filter(
                      color =>
                        !inputValue || color.includes(inputValue.toLowerCase())
                    )
                    .map(
                      (color: string, index: number) =>
                        inputValue &&
                        inputValue.length > 1 && (
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
                    )
                : // Otherwise
                  colors.map(
                    (color: string, index: number) =>
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

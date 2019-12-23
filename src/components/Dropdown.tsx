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

interface DropdownProps {
  colors: string[];
  currentColor: string;
  placeholder?: string;
  setColor: (color: string) => void;
  // onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface ClearSearchProps {
  options: {
    inputValue: string | null;
    isOpen: boolean;
  };
  reset: (options: {}) => void;
}

const ClearSearch = ({ reset, options }: ClearSearchProps) => (
  <button className="clear-search" onClick={() => reset(options)}>
    &times;
  </button>
);

export const Dropdown = ({ colors = [], setColor }: DropdownProps) => {
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
      }) => (
        <Container {...getRootProps()} isOpen={isOpen}>
          <ButtonContainer isOpen={isOpen}>
            <Button {...getToggleButtonProps()}>
              {selectedItem || 'Colors'}
            </Button>
            <ClearSearch
              reset={reset}
              options={{ inputValue: '', isOpen: true }}
            />
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
      )}
    </Downshift>
  );
};

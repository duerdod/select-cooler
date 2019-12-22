import styled from 'styled-components';

export const Container = styled.div<ContainerProps>`
  width: 25%;
  position: relative;
  background-color: #ffffff;
  margin-bottom: 16px;
  font-family: ${p => p.theme.fontStyle};
  border-radius: ${p => (p.isOpen ? '4px 4px 0 0' : '4px')};
  button {
    color: #383838;
    text-transform: capitalize;
  }

  @media screen and (max-width: 40em) {
    width: 50%;
  }
`;

export const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  max-height: 280px;
  position: absolute;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 0 0 4px 4px;
`;

export const ButtonContainer = styled.div<ContainerProps>`
  position: relative;
  border-radius: ${p => (p.isOpen ? '4px 4px 0 0' : '4px')};
  .clear-search {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
    opacity: 0.3;
    font-weight: ${p => p.theme.fontWeight[0]};
    font-family: ${p => p.theme.fontStyle};
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 2.6rem;
  font-size: 1rem;
  padding: 0.8rem 0.5rem;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border: none;
  border-radius: inherit;
  font-family: inherit;
  font-weight: ${p => p.theme.fontWeight[0]};
`;

export const Input = styled.input`
  width: 100%;
  height: 2.6rem;
  font-size: 1rem;
  border-radius: 0;
  box-shadow: none;
  padding: 0.8rem 0.5rem;
  text-transform: capitalize;
  border: 0;
  outline: none;
  font-family: ${p => p.theme.fontStyle};
  font-weight: ${p => p.theme.fontWeight[1]};
  &::placeholder {
    font-weight: ${p => p.theme.fontWeight[0]};
    opacity: 0.4;
  }
  &:focus {
    outline: none;
  }
`;

export const Item = styled.li`
  margin: 0;
  padding: 0.8rem 0.5rem;
  width: 100%;
  font-size: 1rem;

  display: flex;
  justify-content: space-between;
  width: 100%;
  height: inherit;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 1px solid #f9f9f9;
  position: relative;
  cursor: pointer;
  font-family: inherit;
  font-weight: inherit;
`;

export type ContainerProps = {
  isOpen: boolean;
};

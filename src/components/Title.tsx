import * as React from 'react';
import styled from 'styled-components';

interface StyledProps {
  color: string;
  large?: boolean;
}

interface TitleProps {
  title?: string;
  color: string;
  large?: boolean;
}

const StyledTitle = styled.h1<StyledProps>`
  color: ${p => (p.color.includes('white') ? '#383838' : '#FFFFFF')};
  font-size: ${p => (p.large ? '3rem' : '1.2rem')};
  text-transform: uppercase;
  font-weight: 800;
  font-family: 'Arial Black', sans-serif;
  margin-bottom: 1rem;
  width: 100%;
  text-align: center;
  @media screen and (max-width: 40em) {
    font-size: ${p => (p.large ? '2rem' : '1.2rem')};
  }
`;

export const Title = ({ color, large = false }: TitleProps) => {
  return (
    <StyledTitle color={color} large={large}>
      {color}
    </StyledTitle>
  );
};

import * as React from 'react';
import styled from 'styled-components';

interface StyledProps {
  title?: string;
  color?: string;
  large?: boolean;
}

interface TitleProps {
  title: string;
  color?: string;
  large?: boolean;
}

const StyledTitle = styled.h1<StyledProps>`
  font-size: ${p => (p.large ? '3rem' : '1.2rem')};
  text-transform: uppercase;
  font-family: ${p => p.theme.fontStyle};
  font-weight: ${p => p.theme.fontWeight[1]};
  margin-bottom: 1rem;
  width: 100%;
  text-align: center;
  mix-blend-mode: difference;
  transition: all 0.2s ease;
  @media screen and (max-width: 40em) {
    font-size: ${p => (p.large ? '2.5rem' : '1.8rem')};
  }
`;

export const Title = ({ title, large = false }: TitleProps) => {
  return <StyledTitle large={large}>{title}</StyledTitle>;
};

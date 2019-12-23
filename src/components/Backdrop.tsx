import React, { useContext } from 'react';
import { AppContext } from '../context/app-context';
import styled from 'styled-components';

interface BackdropProps {
  backdropColor?: string;
  children: React.ReactNode;
}

const BackdropContainer = styled.div<BackdropProps>`
  background: ${p => p.backdropColor && p.backdropColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  overflow: hidden;
  transition: background 0.2s ease;
`;

export const Backdrop = ({ children }: BackdropProps) => {
  const { currentColor } = useContext(AppContext);
  return (
    <BackdropContainer backdropColor={currentColor}>
      {children}
    </BackdropContainer>
  );
};

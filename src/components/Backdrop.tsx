import * as React from 'react';
import styled from 'styled-components';

interface BackdropProps {
  backdropColor: string;
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

export const Backdrop = ({ backdropColor, children }: BackdropProps) => {
  return (
    <BackdropContainer backdropColor={backdropColor}>
      {children}
    </BackdropContainer>
  );
};

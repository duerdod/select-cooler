import React, { useContext, MouseEvent } from 'react';
import { AppContext } from '../context/app-context';
import styled from 'styled-components';
import { randomizer } from '../utils/randomizer';

const ShuffleContainer = styled.div`
  margin-bottom: 6rem;
`;

interface IShuffe {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Shuffle: React.FC<IShuffe> = () => {
  const { setColor, colors } = useContext(AppContext);
  const randomizeColor = () => setColor(colors[randomizer(0, colors)]);

  return (
    <ShuffleContainer>
      <button onClick={randomizeColor}>
        <span role="img" aria-label="Shuffle color">
          🤷
        </span>
      </button>
    </ShuffleContainer>
  );
};

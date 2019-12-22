import React, { useContext, MouseEvent } from 'react';
import { ReactComponent as ShuffleIcon } from '../svg/shuffle-arrows.svg';
import { AppContext } from '../context/app-context';
import styled from 'styled-components';
import { randomizer } from '../utils/randomizer';

type IconProps = {
  color: string;
};

const IconContainer = styled.div`
  margin-bottom: 6rem;

  button {
      background: white;
  }
`;

const StyledShuffleIcon = styled(ShuffleIcon)<IconProps>`
  width: 25px;
  /* fill: ${p => p.color};
  color: ${p => p.color};
  stroke: ${p => p.color};
  mix-blend-mode: color-dodge; */
`;

export const Shuffle = () => {
  const { setColor, colors, currentColor } = useContext(AppContext);
  const randomizeColor = () => setColor(colors[randomizer(0, colors)]);

  return (
    <IconContainer>
      <button onClick={(e: MouseEvent<HTMLButtonElement>) => randomizeColor()}>
        <StyledShuffleIcon color={currentColor} />
      </button>
    </IconContainer>
  );
};

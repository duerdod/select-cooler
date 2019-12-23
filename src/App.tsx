import React, { useContext } from 'react';
import { AppContext } from './context/app-context';
import { Title } from './components/Title';
import { Dropdown } from './components/Dropdown';
import { Backdrop } from './components/Backdrop';
import { Shuffle } from './components/Shuffle';

const App: React.FC = () => {
  const { colors, setColor, currentColor } = useContext(AppContext);
  const currentColorProps = { colors, setColor, currentColor };

  return (
    <Backdrop backdropColor={currentColor}>
      <Title large title={currentColor} />
      <Dropdown {...currentColorProps} />
      <Shuffle />
    </Backdrop>
  );
};

export default App;

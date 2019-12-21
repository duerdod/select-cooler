import React, { useContext } from 'react';
import { AppContext } from './context/app-context';
import { Title } from './components/Title';
import { Dropdown } from './components/Dropdown';
import { Backdrop } from './components/Backdrop';

const App: React.FC = () => {
  const { colors, setColor, currentColor } = useContext(AppContext);
  const currentColorProps = { setColor, currentColor };

  return (
    <Backdrop backdropColor={currentColor}>
      <Title large color={currentColor} title="Hei " />
      <Dropdown colors={colors} {...currentColorProps} />
    </Backdrop>
  );
};

export default App;

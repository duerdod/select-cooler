import * as React from 'react';
import { Title } from './components/Title';
import { Dropdown } from './components/Dropdown';
import { Backdrop } from './components/Backdrop';
import { Shuffle } from './components/Shuffle';

const App: React.FC = () => {
  return (
    <Backdrop>
      <Title large />
      <Dropdown />
      <Shuffle />
    </Backdrop>
  );
};

export default App;

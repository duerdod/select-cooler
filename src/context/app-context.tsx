import * as React from 'react';
import { getColors } from '../constants/constants';

type Color = {
  color?: string;
};

type ProviderProps = {
  children: React.ReactNode;
};

interface IAppContext {
  currentColor: string;
  setColor: (color: string) => void; // Why not string?
  colors: Color[];
}

export const AppContext = React.createContext<IAppContext>({
  currentColor: 'seagreen',
  setColor: color => color,
  colors: []
});

export function AppProvider({ children }: ProviderProps) {
  const [currentColor, setColor] = React.useState('seagreen');
  const colors = getColors();

  return (
    <AppContext.Provider value={{ currentColor, setColor, colors }}>
      {children}
    </AppContext.Provider>
  );
}

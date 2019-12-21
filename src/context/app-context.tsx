import * as React from 'react';
import { getColors } from '../utils/colors';
import { randomizer } from '../utils/randomizer';

type Color = {
  color?: string;
};

type ProviderProps = {
  children: React.ReactNode;
};

interface IAppContext {
  currentColor: string;
  setColor: (color: string) => void; // Why not string?
  colors: string[];
}

export const AppContext = React.createContext<IAppContext>({
  currentColor: 'seagreen',
  setColor: color => color,
  colors: []
});

export function AppProvider({ children }: ProviderProps) {
  const colors = getColors();
  const randomIndex = randomizer(0, colors);
  const [currentColor, setColor] = React.useState(colors[randomIndex]);

  return (
    <AppContext.Provider value={{ currentColor, setColor, colors }}>
      {children}
    </AppContext.Provider>
  );
}

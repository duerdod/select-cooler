import * as React from 'react';
import { getColors } from '../utils/colors';
import { randomizer } from '../utils/randomizer';

type ProviderProps = {
  children: React.ReactNode;
};

interface IAppContext {
  currentColor: string;
  setColor: (color: string) => void; // Why not string? Because it does not return "anything"!
  colors: string[];
}

export const AppContext = React.createContext<IAppContext>({
  currentColor: 'seagreen',
  setColor: color => color,
  colors: []
});

export function AppProvider({ children }: ProviderProps) {
  const colors = React.useMemo(() => getColors(), []);
  const randomIndex = React.useMemo(() => randomizer(0, colors), [colors]);
  const randomColor = React.useMemo(() => colors[randomIndex], [
    colors,
    randomIndex
  ]);
  const [currentColor, setColor] = React.useState<string>(randomColor);

  return (
    <AppContext.Provider value={{ currentColor, setColor, colors }}>
      {children}
    </AppContext.Provider>
  );
}

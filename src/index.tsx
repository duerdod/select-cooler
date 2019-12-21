import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'reset-css';
import { ThemeProvider } from 'styled-components';
import { AppProvider } from './context/app-context';
import * as Themeing from './Theme';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider theme={Themeing.theme}>
    <Themeing.GlobalStyle />
    <AppProvider>
      <App />
    </AppProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

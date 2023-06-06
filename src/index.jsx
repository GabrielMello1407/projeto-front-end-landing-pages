import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import ReactDOM from 'react-dom/client';

import Home from './templates/Home';
import { GlobalStyles } from './templates/Styles/global-styles';
import { theme } from './templates/Styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);

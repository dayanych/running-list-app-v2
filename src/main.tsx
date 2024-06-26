import 'src/assets/styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'src/app';
import { ThemeProvider } from 'src/assets/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);

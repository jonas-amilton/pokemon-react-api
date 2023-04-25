import React from 'react';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from '@mui/material';
import defaultTheme from './config/theme/defaultTheme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;

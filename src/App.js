import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif'
    ].join(','),
    color: '#1C2C2E'
  }
});
const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HeaderTmp />} />
        </Routes>
      </BrowserRouter>
  )
}

const HeaderTmp = () => {
  return(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  )
}

export default App;

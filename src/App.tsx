import React, { FC } from 'react';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme';
import MainContainer from './components/MainContainer';
import Header from './components/Header';
import Footer from './components/Footer';

const App: FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Header />
      <MainContainer />
      <Footer />
    </ThemeProvider>
  );
};

export default App;

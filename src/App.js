// Package imports
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

// Context/hook imports
import { ThemeProvider } from 'styled-components';
import {
  GlobalStyle,
  globalTheme,
  darkTheme,
  lightTheme,
} from './globalStyles/Global.styles';
import { Context } from './context/context';
import { UseColorMode } from './hooks/useColorMode';

// Page imports
import Home from './ui/pages/Home';
import About from './ui/pages/About';
import Experience from './ui/pages/Experience';
import Contact from './ui/pages/Contact';

// Component imports
import {
  OuterContainer,
  MainContentContainer,
} from './ui/atoms/Containers/Containers';
import Sidebar from './ui/organisms/Sidebar/Sidebar';
import Header from './ui/organisms/Header/Header';

const App = () => {
  // manage light/dark mode
  const { isLightMode, toggleLightMode } = UseColorMode();

  // manage window height
  let windowHeight;

  useEffect(() => {
    if (window.innerHeight) {
      windowHeight = window.innerHeight + 'px';
    } else windowHeight = '100vh';
  }, [windowHeight, window.innerHeight]);

  // Define routes
  const routes = (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/experience">
        <Experience />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Context.Provider
      value={{
        isLightMode,
        toggleLightMode,
      }}
    >
      <ThemeProvider theme={globalTheme}>
        <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
          <GlobalStyle />
          <Router>
            <Header />
            <Sidebar />
            <OuterContainer>
              <MainContentContainer>{routes}</MainContentContainer>
            </OuterContainer>
          </Router>
        </ThemeProvider>
      </ThemeProvider>
    </Context.Provider>
  );
};

export default App;
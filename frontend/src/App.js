// Package imports
import React from 'react';
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
import { UseActiveExperienceSection } from './hooks/useActiveExperienceSection';

// Page imports
import Home from './ui/pages/Home';
import About from './ui/pages/About';
import Experience from './ui/pages/Experience';
import Contact from './ui/pages/Contact';

// Component imports
import { MainContentContainer } from './ui/atoms/Containers/Containers';
import Sidebar from './ui/organisms/Sidebar/Sidebar';
import Header from './ui/organisms/Header/Header';

const App = () => {
  // manage light/dark mode
  const { isLightMode, toggleLightMode } = UseColorMode();
  const {
    activeExperienceSection,
    setExperienceSection,
  } = UseActiveExperienceSection();

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
        activeExperienceSection,
        setExperienceSection,
      }}
    >
      <ThemeProvider theme={globalTheme}>
        <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
          <GlobalStyle />
          <Router>
            <Header />
            <Sidebar />
            <MainContentContainer>{routes}</MainContentContainer>
          </Router>
        </ThemeProvider>
      </ThemeProvider>
    </Context.Provider>
  );
};

export default App;

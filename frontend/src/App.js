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
import { UseSplashScreen } from './hooks/useSplashScreen';
import { UseActiveExperienceSection } from './hooks/useActiveExperienceSection';
import {
  UsePrefetchPage,
  UsePrefetchFooter,
  UsePrefetchNavigation,
} from './hooks/usePrefetch';

// Page imports
import Home from './ui/pages/Home';
import About from './ui/pages/About';
import Experience from './ui/pages/Experience';
import Contact from './ui/pages/Contact';

// Component imports
import { MainContentContainer } from './ui/atoms/Containers/Containers';
import Sidebar from './ui/organisms/Sidebar/Sidebar';
import Header from './ui/organisms/Header/Header';
import SplashScreen from './ui/organisms/SplashScreen/SplashScreen';

const App = () => {
  // manage light/dark mode
  const { isLightMode, toggleLightMode } = UseColorMode();

  // manage Splash Screen
  const {
    splashScreenIsShowing,
    handleSplashScreenIsShowing,
  } = UseSplashScreen();

  // manage active experience section
  const {
    activeExperienceSection,
    setExperienceSection,
  } = UseActiveExperienceSection();

  // PREFETCH DATA
  // Nav:
  const { apolloObj: navData } = UsePrefetchNavigation();

  // Footer:
  const { apolloObj: footerData } = UsePrefetchFooter();

  // Home Page:
  const { apolloObj: homeData } = UsePrefetchPage('5NDUJLUkiLqJOqlNFjzOrn');

  // About Page:
  const { apolloObj: aboutData } = UsePrefetchPage('31UVHLfeMnD3IkrxYABve8');

  // Experience Page:
  const { apolloObj: experienceData } = UsePrefetchPage(
    '2P5KuyZJQy7UKZdYg9xwi1'
  );

  // Contact Page:
  const { apolloObj: contactData } = UsePrefetchPage('5pHtLLMocmpLzkBT8O2HHP');

  // Define routes
  const routes = (
    <Switch>
      <Route path="/" exact>
        <Home data={homeData} />
      </Route>
      <Route path="/about">
        <About data={aboutData} />
      </Route>
      <Route path="/experience">
        <Experience data={experienceData} />
      </Route>
      <Route path="/contact">
        <Contact data={contactData} />
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
        splashScreenIsShowing,
        handleSplashScreenIsShowing,
      }}
    >
      <ThemeProvider theme={globalTheme}>
        <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
          <GlobalStyle />
          <Router>
            <SplashScreen />

            <Header navData={navData} />
            <Sidebar navData={navData} footerData={footerData} />

            <MainContentContainer splashScreenIsShowing={splashScreenIsShowing}>
              {routes}
            </MainContentContainer>
          </Router>
        </ThemeProvider>
      </ThemeProvider>
    </Context.Provider>
  );
};

export default App;

// Package imports
import React, { useState } from 'react';
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
import { UseResponsive } from './hooks/useResponsive';
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
import Footer from './ui/organisms/Footer/Footer';
import SplashScreen from './ui/organisms/SplashScreen/SplashScreen';

const App = () => {
  // hooks
  const [splashScreenIsShowing, setSplashScreenIsShowing] = useState(true);

  // manage light/dark mode
  const { isLightMode, toggleLightMode } = UseColorMode();

  // define mobile/desktop
  const { windowWidth } = UseResponsive();
  const isDesktop = windowWidth >= 992;

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
      }}
    >
      <ThemeProvider theme={globalTheme}>
        <ThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
          <GlobalStyle />
          <Router>
            <SplashScreen
              splashScreenIsShowing={splashScreenIsShowing}
              setSplashScreenIsShowing={setSplashScreenIsShowing}
            />

            <Header navData={navData} />
            <Sidebar navData={navData} footerData={footerData} />

            <MainContentContainer splashScreenIsShowing={splashScreenIsShowing}>
              {routes}
              {!isDesktop && <Footer data={footerData} />}
            </MainContentContainer>
          </Router>
        </ThemeProvider>
      </ThemeProvider>
    </Context.Provider>
  );
};

export default App;

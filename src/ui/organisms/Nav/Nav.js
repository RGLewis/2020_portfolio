import React, {useState, useEffect} from 'react';
import GET_NAVIGATION from '../../../apollo/get_navigation';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {StyledNav, CtaContainer} from './Nav.styles';
import NavLinks from '../../molecules/RichText/NavLinks/NavLinks';
import Cta from '../../atoms/Cta/Cta';
import Body from '../../atoms/Typography/Body'

const Nav = () => {
  // Hooks
  const [navData, setNavData] = useState()
  const [linksToRender, setLinksToRender] = useState()
  const [showMainNav, setShowMainNav] = useState(true)

  // Apollo query
  const { error, loading } = useQuery
  (GET_NAVIGATION, {
    onCompleted: (data) => setNavData(data)
  });

  // get pathname
  const location = useLocation();
  const pathname = location.pathname

  // set up watcher for pathname --> If the user goes right to experience, show the experience nav
  useEffect(() => {
    if(pathname.includes('/experience')){
      handleShowExperienceNav()
    }
    // disable esLint as we only want to do this check on pageLoad (for if user goes directly to experience page)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // functions to set which nav is showing
  const handleShowMainNav = () => {
    setShowMainNav(true)
  }

  const handleShowExperienceNav = () => {
    setShowMainNav(false)
  }

  // VARIABLES:
  // set up nav links variables
  let mainNavLinks;
  let experienceNavLinks;

  // set up cta variables
  let backCta;
  let forwardCta;

  // define CTAs:
  const defineCtas = () => {
    const ctas = navData.navigation.ctAsCollection.items

    const backCtaArray = ctas.filter((cta) => (
      cta.sys.id === "20GbFYwt866lSj4i58DV0C"
    ))

    const forwardCtaArray = ctas.filter((cta) => (
      cta.sys.id === "1RzUfpJ1ATaHT1byUyfIHp"
    ))

    // There will be only 1 array index for both variables, so we can grab the first index
    backCta = backCtaArray[0]
    forwardCta = forwardCtaArray[0]
  }

  // define nav links
  const defineNavLinks = () => {
    // define our two navLinks
    const mainNavLinksArray = navData.navigation.navigationItemsCollection.items.filter((nav) => (
      nav.sys.id === "6yIDuM1mAqoF7VnhTIV5Eo"
    ))

    const experienceNavLinksArray = navData.navigation.navigationItemsCollection.items.filter((nav) => (
      nav.sys.id === "5CGjIyepTYX9K6MDwBOpR"
    ))

    // There will only ever be one object returned, so we can just grab the first index
    mainNavLinks = mainNavLinksArray[0].linksList.json
    experienceNavLinks = experienceNavLinksArray[0].linksList.json
  }

  // once there is navData, filter which nav links we need
  if (navData) {
    defineNavLinks()
    defineCtas()
    console.log(navData)
  }

  // if the main nav is showing, render main nav links, if not, render experience nav links
  useEffect(() => {
    if(showMainNav){
      setLinksToRender(mainNavLinks)
    }
     else {
      setLinksToRender(experienceNavLinks)
    }
  }, [showMainNav, mainNavLinks, experienceNavLinks])

  // TO DO - replace with loader
  if(loading){
    return (
      <StyledNav>
      <p>Loading</p>
    </StyledNav>
    )
  }

  // TO DO - replace with error
  if(error){
    return (
      <StyledNav>
      <p>Error</p>
    </StyledNav>
    )
  }

  if(!navData){
    return ""
  }

  if(navData){
    return (
      <StyledNav>
        {/* CTAs */}
        <CtaContainer showMainNav={showMainNav}>
          {/* Back CTA */}
          {!showMainNav && <Cta 
            isButton
            onClick={handleShowMainNav}
            hasCaret
            ariaLabel={backCta.prompt}
            // must be string for Font Awesome icon
            iconLeads={backCta.iconLeads ? 'true' : 'false'}
            variant={"menuFontColor"}
          >
            <Body variant="menuFontColor">{backCta.prompt}</Body>
          </Cta>}
          

          {/* Forward CTA -- show if in main nav */}
          {showMainNav && <Cta 
            isButton
            onClick={handleShowExperienceNav}
            hasCaret
            ariaLabel={forwardCta.prompt}
            // must be string for Font Awesome icon
            iconLeads={forwardCta.iconLeads ? 'true' : 'false'}
            variant={"menuFontColor"}
          >
            <Body variant="menuFontColor">{forwardCta.prompt}</Body>
          </Cta>}
          
        </CtaContainer>

        {/* Nav Links */}
        <NavLinks 
          data={linksToRender} 
          isExperienceLink={showMainNav ? false : true}
          handleShowMainNav={handleShowMainNav}
          handleShowExperienceNav={handleShowExperienceNav}
          />
      </StyledNav>
    )
  }
}

export default Nav
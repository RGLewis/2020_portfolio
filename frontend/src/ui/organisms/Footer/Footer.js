import React, {useState, useEffect} from 'react';
import GET_FOOTER from '../../../apollo/get_footer';
import { useQuery } from '@apollo/client';
import {StyledFooter} from './Footer.styles'
import Body from '../../atoms/Typography/Body'
import FooterLinks from '../../molecules/RichText/FooterLinks/FooterLinks';

const Footer = () => {
  // hooks
  const [footerData, setFooterData] = useState()

  // Apollo query
  const { error, loading } = useQuery
  (GET_FOOTER, {
    onCompleted: (data) => setFooterData(data)
  });

  if(footerData){
    console.log(footerData.footer.footerItemsCollection.items[0].linksList.json)
  }



  // TO DO - replace with loader
  if(loading){
    return (
      <StyledFooter>
      <p>Loading</p>
    </StyledFooter>
    )
  }

  // TO DO - replace with error
  if(error){
    return (
      <StyledFooter>
      <p>Error</p>
    </StyledFooter>
    )
  }

  if(!footerData){
    return ""
  }

  if(footerData){
    return (
      <StyledFooter>
        <FooterLinks data={footerData.footer.footerItemsCollection.items[0].linksList.json}/>
        <Body variant="menuFontColor" isSmall>{footerData.footer.techStack}</Body>
        <Body variant="menuFontColor" isSmall>{footerData.footer.copyright}</Body>
      </StyledFooter>
    )
  }

}

export default Footer
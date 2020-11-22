import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { StyledFooter } from './Footer.styles';
import Body from '../../atoms/Typography/Body';
import FooterLinks from '../../molecules/RichText/FooterLinks/FooterLinks';
import Loader from '../../molecules/Loader/Loader';

const Footer = ({ data }) => {
  // hooks
  const [footerData, setFooterData] = useState();
  const [isHomepage, setIsHomepage] = useState(false);

  // Set Data
  useEffect(() => {
    if (data.fetchedData) {
      setFooterData(data.fetchedData);
    }
  }, [data]);

  // get pathname (mobile footer render)
  const location = useLocation();
  const pathname = location.pathname;

  // set up watcher for pathname --> If the user goes right to experience, show the experience nav
  useEffect(() => {
    if (pathname === '/') {
      setIsHomepage(true);
    } else {
      setIsHomepage(false);
    }
  }, [pathname]);

  if (data.loading) {
    return (
      <StyledFooter>
        <Loader variant="menuFontColor" />
      </StyledFooter>
    );
  }

  if (data.error) {
    return <StyledFooter />;
  }

  if (!footerData) {
    return '';
  }

  if (footerData) {
    return (
      <StyledFooter isHomepage={isHomepage}>
        <FooterLinks
          data={footerData.footer.footerItemsCollection.items[0].linksList.json}
        />
        <Body variant="menuFontColor" isSmall>
          {footerData.footer.techStack}
        </Body>
        <Body variant="menuFontColor" isSmall>
          {footerData.footer.copyright}
        </Body>
      </StyledFooter>
    );
  }
};

export default Footer;

Footer.propTypes = {
  data: PropTypes.shape({
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    fetchedData: PropTypes.shape({
      footer: PropTypes.shape({
        copyright: PropTypes.string,
        footerItemsCollection: PropTypes.shape({
          items: PropTypes.array,
        }),
        techStack: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};

Footer.defaultProps = {
  data: { error: undefined, fetchedData: undefined },
};

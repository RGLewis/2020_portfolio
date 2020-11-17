import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StyledFooter } from './Footer.styles';
import Body from '../../atoms/Typography/Body';
import FooterLinks from '../../molecules/RichText/FooterLinks/FooterLinks';

const Footer = ({ data }) => {
  // hooks
  const [footerData, setFooterData] = useState();

  // Set Data
  useEffect(() => {
    if (data.fetchedData) {
      setFooterData(data.fetchedData);
    }
  }, [data]);

  // TO DO - replace with loader
  if (data.loading) {
    return (
      <StyledFooter>
        <p>Loading</p>
      </StyledFooter>
    );
  }

  // TO DO - replace with error
  if (data.error) {
    return (
      <StyledFooter>
        <p>Error</p>
      </StyledFooter>
    );
  }

  if (!footerData) {
    return '';
  }

  if (footerData) {
    return (
      <StyledFooter>
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

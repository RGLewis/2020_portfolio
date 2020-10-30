import styled from 'styled-components/macro';
import { pxToRem } from '../../../globalStyles/Utils';
import {device} from '../../../globalStyles/Breakpoints'
import {transition} from '../../../globalStyles/Mixins'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme, variant }) => theme[variant]};
  pointer-events: none;
  font-size: ${pxToRem(20)};
  padding-right: ${props => props.iconleads === "true" && pxToRem(5)};
  padding-left: ${props => props.iconleads === "false" && pxToRem(5)};
`;

export const CtaButton = styled.button`
  border: ${pxToRem(2)} solid transparent;
  background: transparent;
  padding: ${pxToRem(5)};
  cursor: pointer;
  display: flex;
  align-items: center;
  ${transition('all', '200ms', 'ease', '0s')};

  &:active,
  &:focus {
    border-bottom-color: ${({ theme, variant }) => theme[variant]};
  }

  &:hover {
      letter-spacing: ${pxToRem(0.2)}
  }
`;

export const CtaLink = styled(Link)`
  border-bottom: ${pxToRem(1)} solid transparent;
  background: transparent;
  padding: ${pxToRem(5)};
  margin-bottom: 0;
  font-size: ${pxToRem(18)};


  @media ${device.large} {
    margin-bottom: 0;
    font-size: ${pxToRem(20)};
  }

  &:hover {
    padding: ${pxToRem(5)} ${pxToRem(10)};
  }

  &:active,
  &:focus {
    border-bottom-color: ${({ theme, variant }) => theme[variant]};
  }
`;

export const CtaContainer = styled.div`
  padding-bottom: ${(props) => props.paddingBottom && pxToRem(20)};
`;
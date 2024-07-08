import React from 'react';
import {
  HeaderContainer,
  Nav,
  NavContainerLogo,
  NavLogo,
  NavLogoName,
  NavLogoName2,
  NavList,
  NavItem,
  NavLink,
} from './HeaderStyled';

import logo from '../../img/logo.png';
import symbolDefs from '../../img/svg/symbol-defs.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavContainerLogo>
          <NavLogo src={logo} width="60" height="56" />
          <NavLogoName width="48" height="16">
            <use xlinkHref={`${symbolDefs}#icon-Slim`} />
          </NavLogoName>
          <NavLogoName2 width="52" height="16">
            <use xlinkHref={`${symbolDefs}#icon-Mom`} />
          </NavLogoName2>
        </NavContainerLogo>
        <NavList>
          <NavItem>
            <NavLink to="/goit-project-react/login">Log in</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/goit-project-react/registration">
              Registration
            </NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

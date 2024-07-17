import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { logoutThunk } from '../../redux/operators/authOperator';
import {
  selectIsLogged,
  selectName,
} from '../../redux/selectors/authSelectors';
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
  const dispatch = useDispatch();
  const isLogged = useSelector(selectIsLogged);
  const name = useSelector(selectName);

  const handleLogout = () => {
    dispatch(logoutThunk());
    dispatch(logout());
  };

  return (
    <HeaderContainer>
      <Nav>
        <NavLink to={'/goit-project-react'}>
          <NavContainerLogo>
            <NavLogo src={logo} width="60" height="56" />
            <NavLogoName width="48" height="16">
              <use xlinkHref={`${symbolDefs}#icon-Slim`} />
            </NavLogoName>
            <NavLogoName2 width="52" height="16">
              <use xlinkHref={`${symbolDefs}#icon-Mom`} />
            </NavLogoName2>
          </NavContainerLogo>
        </NavLink>
        <NavList>
          {isLogged ? (
            <>
              <NavItem>
                <NavLink to="/goit-project-react/user-diary">Diary</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/goit-project-react/user-calculator">
                  Calculator
                </NavLink>
              </NavItem>
              <NavItem>
                <span>{name}</span>
              </NavItem>
              <NavItem>
                <NavLink onClick={handleLogout}>
                  <button>Logout</button>
                </NavLink>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <NavLink to="/goit-project-react/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/goit-project-react/registration">
                  Registration
                </NavLink>
              </NavItem>
            </>
          )}
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

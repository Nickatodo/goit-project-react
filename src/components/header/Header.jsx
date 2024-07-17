import React, { useState } from 'react';
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
  NavUserList,
  NavItem,
  NavLink,
  UserName,
  LogOutBtn,
  MenuToggleBtn,
} from './HeaderStyled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';

import logo from '../../img/logo.png';
import symbolDefs from '../../img/svg/symbol-defs.svg';

const Header = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectIsLogged);
  const name = useSelector(selectName);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logoutThunk());
    dispatch(logout());
  };

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer>
      <Nav>
        <NavLink to={'/goit-project-react'}>
          <NavContainerLogo>
            <NavLogo src={logo} />
            <NavLogoName>
              <use xlinkHref={`${symbolDefs}#icon-Slim`} />
            </NavLogoName>
            <NavLogoName2>
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
        {isLogged && (
          <>
            <NavUserList>
              <NavItem>
                <UserName>{name}</UserName>
              </NavItem>
              <NavItem className="logout">
                <NavLink onClick={handleLogout}>
                  <LogOutBtn>Logout</LogOutBtn>
                </NavLink>
              </NavItem>
            </NavUserList>
            <MenuToggleBtn onClick={handleToggleMenu}>
              {menuOpen ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </MenuToggleBtn>
          </>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

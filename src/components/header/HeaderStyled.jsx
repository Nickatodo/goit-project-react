import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 60px 20px 20px 20px;
  border-bottom: 2px solid rgba(224, 224, 224, 1);

  @media screen and (min-width: 800px) {
    padding: 60px 20px 20px 20px;
    border-bottom: none;
  }

  @media screen and (max-width: 600px) {
    padding: 20px 20px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-content: center;
  justify-content: space-between;

  @media screen and (min-width: 800px) {
    justify-content: flex-start;
    gap: 30px;
  }
`;

export const NavContainerLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const NavLogo = styled.img`
  padding: 0 10px 0 0;

  @media screen and (min-width: 800px) {
    position: relative;
    bottom: 16px;
    left: 16px;
  }
`;

export const NavLogoName = styled.svg`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const NavLogoName2 = styled.svg`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 800px) {
    &::before {
      content: '';
      height: 32px;
      border: solid 1px;
      border-radius: 2px;
      color: rgba(224, 224, 224, 1);
    }
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled(Link)`
  font-weight: 700;
  font-size: 17px;
  letter-spacing: 0.04em;
  line-height: 1.2;
  align-content: center;
  text-transform: uppercase;
  color: rgba(155, 159, 170, 1);

  &:hover,
  &:focus {
    color: rgba(252, 132, 45, 1);
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

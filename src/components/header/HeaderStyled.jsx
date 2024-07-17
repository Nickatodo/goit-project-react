import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 80px;
  width: 100%;
  height: 80px;

  @media screen and (max-width: 768px) {
    top: 0;
    border-bottom: 2px solid #e0e0e0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 20px 16px 16px 16px;

  @media screen and (max-width: 768px) {
    padding: 20px 32px 16px 32px;
  }

  @media screen and (max-width: 320px) {
    padding: 20px 20px 16px 20px;
  }
`;

export const NavContainerLogo = styled.div`
  max-height: 66px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const NavLogo = styled.img`
  width: 66px;
  position: relative;
  bottom: 16px;
  left: 16px;

  @media screen and (max-width: 768px) {
    width: 44px;
    position: relative;
    bottom: 0px;
    left: 0px;
  }
`;

export const NavLogoName = styled.svg`
  width: 50px;
  height: 20px;
  @media screen and (max-width: 320px) {
    display: none;
  }
`;

export const NavLogoName2 = styled.svg`
  width: 55px;
  height: 20px;
  @media screen and (max-width: 320px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 20px;
  gap: 20px;

  @media screen and (min-width: 768px) {
    &::before {
      content: '';
      height: 32px;
      border: solid 1px;
      border-radius: 2px;
      color: #e0e0e0;
    }
  }

  @media screen and (max-width: 768px) {
    margin-left: auto;
  }

  @media screen and (max-width: 320px) {
    display: none;
  }
`;

export const NavUserList = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: auto;
`;

export const NavItem = styled.li`
  display: inline-flex;

  &.logout {
    &::before {
      content: '';
      height: 32px;
      border: solid 1px;
      border-radius: 2px;
      color: #e0e0e0;
      margin-right: 20px;
    }
  }
`;

export const NavLink = styled(Link)`
  font-weight: 700;
  font-size: 17px;
  letter-spacing: 0.04em;
  line-height: 1.2;
  align-content: center;
  text-transform: uppercase;
  color: #9b9faa;

  &:hover,
  &:focus,
  &:focus-visible,
  &:focus-within {
    color: #fc842d;
  }

  @media screen and (max-width: 320px) {
    font-size: 14px;
  }
`;

export const UserName = styled.span`
  font-family: Verdana;
  font-size: 14px;
  font-weight: 700;
  line-height: 17.01px;
  letter-spacing: 0.04em;
  text-align: right;
  color: #212121;
`;

export const LogOutBtn = styled.button`
  font-family: Verdana;
  font-size: 14px;
  font-weight: 700;
  line-height: 17.01px;
  letter-spacing: 0.04em;
  text-align: left;
  border: none;
  outline: none;
  background-color: transparent;
  color: #9b9faa;
  padding: 0;

  &:hover,
  &:focus,
  &:focus-visible,
  &:focus-within {
    color: #212121;
  }
`;

export const MenuToggleBtn = styled.button`
  display: none;
  background: none;
  width: 24px;
  height: 24px;
  color: #212121;
  border: none;
  padding: 0;
  margin-left: 48px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #fc842d;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

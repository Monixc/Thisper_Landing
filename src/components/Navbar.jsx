import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";

import styled, { css } from "styled-components";
import {
  Box,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { HiOutlineBars3 } from "react-icons/hi2";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";

/*스타일*/

const sizes = {
  desktop: 1000,
  tablet: 800,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 5rem;
  border-bottom: solid 2px #b5b5b5;
`;

const NavLogoContainer = styled.div`
  width: 21rem;
  ${media.desktop`
  width: 12rem;
  margin-left: 0.5rem;`}

  ${media.tablet`
  width: 8rem;
  `}
`;
const NavMenuContainer = styled.div`
  display: none;

  ${media.tablet`
  display: flex;
  `}
`;
const NavLinkContainer = styled.div`
  margin-right: 3rem;
  text-decoration: none;
  color: black;
  font-size: 1.1rem;
  font-weight: 700;

  ${media.tablet`
  display: none;
  `}
`;
const NavLink = styled.a`
  margin-right: 3rem;
  text-decoration: none;
  color: black;
  font-size: 1.1rem;
  font-weight: 600;

  ${media.desktop`
  margin-right:1rem;
  font-size:1rem;`}
`;
const PrimaryButton = styled.button`
  padding: 0.9rem 1.75rem;
  background-color: #323949;
  color: white;
  outline: none;
  border: none;
  border-radius: 5rem;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 700;
  transition: 0.2s;

  ${media.desktop`
  font-size: 0.8rem;
  padding: 0.5rem 1.1rem;`}

  &:hover{
    background-color: rgb(234, 234, 234);}
  }
`;

/**/
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOption = [
    { text: "Home", icon: <HomeIcon /> },
    {
      text: "About",
      icon: <InfoIcon />,
    },
  ];
  return (
    <Nav>
      <NavLogoContainer>
        <img src={Logo} alt="" />
      </NavLogoContainer>
      <NavLinkContainer>
        <NavLink href="">Home</NavLink>
        <NavLink href="">About</NavLink>
        <PrimaryButton className="primary-button">Install Now</PrimaryButton>
      </NavLinkContainer>
      <NavMenuContainer>
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </NavMenuContainer>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}></Box>
      </Drawer>
    </Nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { Box, Drawer } from "@mui/material";

import { HiOutlineBars3 } from "react-icons/hi2";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
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
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About</a>
        <button className="primary-button">Install Now</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
    </nav>
  );
};

export default Navbar;

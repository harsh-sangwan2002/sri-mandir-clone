// Navbar.jsx
import { useState } from 'react';
import styled from 'styled-components';
import { Menu, MenuItem, IconButton, Button, Avatar } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import sriMandirLogo from '../assets/logo.svg';

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 5px;
  background-color: #fff;
  color: #000;
  height: 60px;
`;

const Logo = styled.img`
  height: 48px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  &:hover {
    color: #ff5722;
  }
`;

const NavLinkWithIcon = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const LangButton = styled(Button)`
  border: 1px solid grey;
  color: #000;
  &:hover {
    border-color: #ff5722;
  }
`;

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [langAnchorEl, setLangAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLangMenuOpen = (event) => {
    setLangAnchorEl(event.currentTarget);
  };

  const handleLangMenuClose = () => {
    setLangAnchorEl(null);
  };

  return (
    <NavbarContainer>
      <Logo src={sriMandirLogo} alt="Sri Mandir" />
      <NavLinks>
        <NavLink component={Link} to="/">Home</NavLink>
        <NavLink endIcon={<ArrowDropDown />} onClick={handleMenuOpen}>
          Puja
        </NavLink>
        <NavLink component={Link} to="/panchang">Panchang</NavLink>
        <NavLink component={Link} to="/temples">Temples</NavLink>
        <NavLinkWithIcon onClick={handleMenuOpen}>
          Library <ArrowDropDown />
        </NavLinkWithIcon>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Sanatan Sahitya</MenuItem>
          <MenuItem onClick={handleMenuClose}>Aarti</MenuItem>
          <MenuItem onClick={handleMenuClose}>Chalisa</MenuItem>
          <MenuItem onClick={handleMenuClose}>Mantra</MenuItem>
          <MenuItem onClick={handleMenuClose}>Incarnations of gods and goddesses</MenuItem>
          <MenuItem onClick={handleMenuClose}>Shrimad Bhagwat</MenuItem>
          <MenuItem onClick={handleMenuClose}>Ayurvedic and Home Remedies</MenuItem>
        </Menu>
      </NavLinks>
      <div>
        <LangButton
          variant="outlined"
          endIcon={<ArrowDropDown />}
          onClick={handleLangMenuOpen}
        >
          English
        </LangButton>
        <Menu
          anchorEl={langAnchorEl}
          open={Boolean(langAnchorEl)}
          onClose={handleLangMenuClose}
        >
          <MenuItem onClick={handleLangMenuClose}>English</MenuItem>
          <MenuItem onClick={handleLangMenuClose}>Hindi</MenuItem>
        </Menu>
        <IconButton color="inherit">
          <Avatar />
        </IconButton>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;

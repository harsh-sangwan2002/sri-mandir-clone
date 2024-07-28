import React, { useState } from 'react';
import styled from 'styled-components';
import { Menu, MenuItem, IconButton, Button, Avatar, ListItemText, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import sriMandirLogo from '../assets/logo.svg';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 7rem;
  background-color: #fff;
  color: #000;
  height: 60px;
`;

const Logo = styled.img`
  height: 46px;
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
  const [avatarAnchorEl, setAvatarAnchorEl] = useState(null);

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

  const handleAvatarMenuOpen = (event) => {
    setAvatarAnchorEl(event.currentTarget);
  };

  const handleAvatarMenuClose = () => {
    setAvatarAnchorEl(null);
  };

  return (
    <NavbarContainer>
      <Logo src={sriMandirLogo} alt="Sri Mandir" />
      <NavLinks>
        <NavLink component={Link} to="/">Home</NavLink>
        <NavLink onClick={handleMenuOpen}>
          Puja
        </NavLink>
        <NavLink component={Link} to="/panchang">Panchang</NavLink>
        <NavLink component={Link} to="/temples">Temples</NavLink>
        <NavLink onClick={handleMenuOpen}>
          Library
        </NavLink>
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
        <IconButton color="inherit" onClick={handleAvatarMenuOpen}>
          <Avatar />
        </IconButton>
        <Menu
          anchorEl={avatarAnchorEl}
          open={Boolean(avatarAnchorEl)}
          onClose={handleAvatarMenuClose}
        >
          <MenuItem disabled>
            <ListItemText primary="Hello, Sri Mandir Bhakt" secondary="Welcome to Sri Mandir Puja Seva" />
          </MenuItem>
          <Divider />
          <MenuItem component={Link} to="/profile">My Profile</MenuItem>
          <MenuItem component={Link} to="/epuja">My Puja Bookings</MenuItem>
          <MenuItem component={Link} to="/ramotsav-bookings">My Ramotsav Bookings</MenuItem>
          <MenuItem component={Link} to="/book-puja">Book a Puja</MenuItem>
        </Menu>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;

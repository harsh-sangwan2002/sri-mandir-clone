import React, { useState } from 'react';
import styled from 'styled-components';
import { Menu, MenuItem, IconButton, Button, Avatar, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import sriMandirLogo from '../assets/logo.svg';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  color: #000;
  margin-top:1rem;

  @media (min-width: 768px) {
    padding: 10px 7rem;
  }
`;

const Logo = styled.img`
  height: 46px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 767px) {
    display: none;
  }
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

const LangButton = styled(Button)`
  border: 1px solid grey;
  color: #000;
  &:hover {
    border-color: #ff5722;
  }
`;

const MenuButton = styled(IconButton)`
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`;

const MobileMenu = styled(Menu)`
  .MuiPaper-root {
    width: 100%;
    max-width: 300px;
  }
`;

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [langAnchorEl, setLangAnchorEl] = useState(null);
  const [avatarAnchorEl, setAvatarAnchorEl] = useState(null);
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState(null);

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

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  return (
    <NavbarContainer>
      <Link to="/">
        <Logo src={sriMandirLogo} alt="Sri Mandir" />
      </Link>
      <NavLinks>
        <NavLink component={Link} to="/">Home</NavLink>
        <NavLink onClick={handleMenuOpen}>Puja</NavLink>
        <NavLink component={Link} to="/panchang">Panchang</NavLink>
        <NavLink component={Link} to="/temples">Temples</NavLink>
        <NavLink onClick={handleMenuOpen}>Library</NavLink>
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
          <MenuItem component={Link} to="/profile" onClick={handleAvatarMenuClose}>My Profile</MenuItem>
          <MenuItem component={Link} to="/epuja/history" onClick={handleAvatarMenuClose}>My Puja Bookings</MenuItem>
          <MenuItem component={Link} to="/ramotsav-bookings" onClick={handleAvatarMenuClose}>My Ramotsav Bookings</MenuItem>
          <MenuItem component={Link} to="/book-puja" onClick={handleAvatarMenuClose}>Book a Puja</MenuItem>
        </Menu>
        <MenuButton onClick={handleMobileMenuOpen}>
          <MenuIcon />
        </MenuButton>
        <MobileMenu
          anchorEl={mobileMenuAnchorEl}
          open={Boolean(mobileMenuAnchorEl)}
          onClose={handleMobileMenuClose}
        >
          <MenuItem component={Link} to="/" onClick={handleMobileMenuClose}>Home</MenuItem>
          <MenuItem onClick={handleMobileMenuOpen}>Puja</MenuItem>
          <MenuItem component={Link} to="/panchang" onClick={handleMobileMenuClose}>Panchang</MenuItem>
          <MenuItem component={Link} to="/temples" onClick={handleMobileMenuClose}>Temples</MenuItem>
          <MenuItem onClick={handleMenuOpen}>Library</MenuItem>
          <Divider />
          <MenuItem component={Link} to="/profile" onClick={handleAvatarMenuClose}>My Profile</MenuItem>
          <MenuItem component={Link} to="/epuja/history" onClick={handleAvatarMenuClose}>My Puja Bookings</MenuItem>
          <MenuItem component={Link} to="/ramotsav-bookings" onClick={handleAvatarMenuClose}>My Ramotsav Bookings</MenuItem>
          <MenuItem component={Link} to="/book-puja" onClick={handleAvatarMenuClose}>Book a Puja</MenuItem>
        </MobileMenu>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;

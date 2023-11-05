import "../NavBar/NavBar.css";
import React, { useState } from 'react';
import {Button, Menu, MenuItem} from '@mui/material';
import { Link } from 'react-router-dom';

const NavBarCategories = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="brand"
      >
        PRODUCTOS
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
            <Link to="product-category/Pijamas" style={{ textDecoration: "none", color: "rgb(52, 52, 52)"}}>
                Pijamas
            </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link to="product-category/Pantuflas" style={{ textDecoration: "none", color: "rgb(52, 52, 52)"}}>
                Pantuflas
            </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Link to="product-category/Ropa deportiva" style={{ textDecoration: "none", color: "rgb(52, 52, 52)"}}>
                Ropa deportiva
            </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default NavBarCategories;
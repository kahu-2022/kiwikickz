import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import FilterListIcon from '@mui/icons-material/FilterList';


<Typography variant="h3" color="common.white">
        This text should be white
      </Typography>


function Header() {

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="right">
              <Link to='/' style={{ color: '#FFF' }}><HomeIcon></HomeIcon> Home</Link>
            </Typography>
            <Typography variant="h6" component="div"  sx={{ flexGrow: 1 }} align="right">
              <Link to='/product' style={{ color: '#FFF' }}><FilterListIcon></FilterListIcon>Product</Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="right">
              <Link to='/cart' style={{ color: '#FFF' }}><ShoppingCartIcon></ShoppingCartIcon>  Cart </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

    </>
  )
}

export default Header
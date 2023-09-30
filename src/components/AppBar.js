import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'


function AppBarMenu() {
  
  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: 'salmon' }}>
            
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr:3}}
            
          >
           <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , fontWeight: 'bold' }}>
            Menüü
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppBarMenu;

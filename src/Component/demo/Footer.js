import React from 'react'
import { AppBar, IconButton, Typography, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

export default function Footer() {
  return (
        <AppBar position="static" color="primary">
           <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                {/* <MenuIcon /> */}
                </IconButton>
                <Typography variant="p" color="inherit" component="div">
                Copyright @ 2022
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

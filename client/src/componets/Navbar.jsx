import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { yellow } from '@mui/material/colors';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Company Portal
          </Typography>
          <Button onClick={(e) => window.location = "/user-form"} style={{ color: "black", fontFamily: "Monoton,cursive", border: '2px solid black' }}>Login</Button>
        </Toolbar>

      </AppBar>
    </Box>
  )
}


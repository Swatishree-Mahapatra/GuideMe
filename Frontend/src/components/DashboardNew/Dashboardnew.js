import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from 'react-router';
import DropDown from './DropDown';


import { useAuth } from "../firebase/AuthContext";


export default function DashboardNew() {

  
const history = useHistory()

//firebase 
const { currentUser, logout } = useAuth()
async function handleLogout() {
   try {
    await logout()
    history.push("/")
  } catch {
    console.log("fail to logout")
  }
}
  return (
    
      <AppBar position="static" className="dashboard">
        <Toolbar>
           <DropDown/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GuideMe
          </Typography>
          <Button color="inherit" sx={{pr:2,pl:2}} >About Us</Button>
          <Button color="inherit" sx={{pr:2,pl:2}}>Contact Us</Button>
          <Button color="inherit" onClick={handleLogout} >Logout</Button>
        </Toolbar>
      </AppBar>

  );
}

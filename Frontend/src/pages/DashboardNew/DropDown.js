import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';

export default function DropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'down',
        }}
      >
        <Box>  
        <Link to="/dashboard"><Button >Dashboard </Button></Link>
        </Box> 
       <Box>
        <Link to="/chat"><Button >Discussion Forum </Button></Link>
        </Box>
        <Box>
        <Link to="/my"><Button >Inside my bag</Button></Link>
        </Box>
        <Box>
        <Link to="/add"><Button >Create a course </Button></Link>
        </Box>
      </Popover>
    </div>
  );
}
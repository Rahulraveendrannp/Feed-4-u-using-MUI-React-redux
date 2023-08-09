import { InputBase, Typography, styled, Badge, Avatar, Menu, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import StreamIcon from '@mui/icons-material/Stream';
import { Box } from '@mui/system';

import { Mail, Notifications } from "@mui/icons-material";
import { useState } from 'react';


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});
const Search = styled('div')(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));
const Icons = styled(Box)(({ theme }) => ({
    display: "none", gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
    display: "flex"
}
}));
const UserBox = styled(Box)(({ theme }) => ({
    display: "flex", gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
    display: "none"
}
}));




const Navbar = () => {
    const [open,setOpen]=useState(false)
    return (
        <AppBar position="sticky" sx={{width:"100%"}} >

            <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
                    FEEDS 4 U
                </Typography>
                <StreamIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search> <InputBase placeholder='search...' sx={{color:"black"}} /> </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar src='https://randomuser.me/api/portraits/men/46.jpg'
                        sx={{ width: 30, height: 30 }}  onClick={e=>setOpen(true)} />
                </Icons>
                <UserBox onClick={e=>setOpen(true)}>
                    <Avatar src='https://randomuser.me/api/portraits/men/46.jpg'
                        sx={{ width: 30, height: 30 }} />
                    <Typography variant="span">
                        Ajay
                    </Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

        </AppBar>
    )
}

export default Navbar
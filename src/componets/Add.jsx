import { Fab, Tooltip, Typography,Modal,Box, Avatar, TextField, Stack, ButtonGroup, Button} from '@mui/material'
import React from 'react';
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material"
import { useState } from 'react';
import { styled } from '@mui/system';

const StyledModal=styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
});
const UserBox=styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"

})

 
const Add = () => {
    const [open,setOpen]=useState(false)
    return (
        <>
            <Tooltip title="Delete" sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25)",md:30}}}
            onClick={e=>setOpen(true)}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280}  p={3} borderRadius={5}  bgcolor={"background.default"} color={"text.primary"}>
    <Typography variant='h6' color={"grey"} textAlign={"center"}>
        Add New Post
    </Typography>
    <UserBox>
        <Avatar src='https://randomuser.me/api/portraits/men/46.jpg'  sx={{width:30,height:30}}/>
        <Typography fontWeight={500} variant='span'>
            Ajay Dev
        </Typography>
    </UserBox>
    <TextField
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your Mind"
          variant="standard"
          sx={{width:"100%"}}
        />
        <Stack direction={"row"} gap={1} mt={2} mb={3}>
            <EmojiEmotions color='primary'/>
            <Image color='secondary'/>
            <VideoCameraBack color='success'/>
            <PersonAdd color='error'/>
            
        </Stack>
        <ButtonGroup 
        fullWidth variant='contained' aria-label="outlined primary button group"
        >
            <Button>Post</Button>
            <Button sx={{width:"100px"}}><DateRange/></Button>
        </ButtonGroup>
  </Box>
</StyledModal>
        </>
    )
}

export default Add
import { Avatar, AvatarGroup, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import { Box } from "@mui/system";
import "../style/index.css"


const Rightbar = () => {
    return (
        <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }} >
            <Box width={350} mt={2} mb={2} position="fixed" className="right-bar" >
                <Typography variant="h6" fontWeight={100}>
                    Online
                </Typography>
                <AvatarGroup max={7} >
                    <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/46.jpg" />
                    <Avatar alt="Travis Howard" src="https://randomuser.me/api/portraits/men/48.jpg" />
                    <Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/men/40.jpg" />
                    <Avatar alt="Agnes Walker" src="https://randomuser.me/api/portraits/men/45.jpg" />
                    <Avatar alt="Agnes Walker" src="https://randomuser.me/api/portraits/men/49.jpg" />
                    <Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/men/30.jpg" />
                    <Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/men/50.jpg" />
                    <Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/men/10.jpg" />
                    <Avatar alt="Agnes Walker" src="https://randomuser.me/api/portraits/men/49.jpg" />
                    <Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/men/30.jpg" />
                    <Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/men/50.jpg" />
                    <Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/men/10.jpg" />

                </AvatarGroup>
                <Typography variant="h6" fontWeight={100}>
                    Recent Pics
                </Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1533827432537-70133748f5c8" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1533827432537-70133748f5c8" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" />
                    </ImageListItem>
                </ImageList>
                <Typography variant="h6" fontWeight={100} marginTop={5}>
                    Latest Comments
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/26.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="https://randomuser.me/api/portraits/men/46.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="https://randomuser.me/api/portraits/men/36.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Rightbar
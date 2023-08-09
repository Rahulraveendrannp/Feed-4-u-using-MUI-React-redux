import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material"
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { like, dislike } from "../store";
import { useDispatch } from "react-redux";
import CommentIcon from '@mui/icons-material/Comment';

const Post = ({ post, index }) => {
    const handleClick = (i, status) => {
        if (status) {
            dispatch(dislike(i))
        } else {
            dispatch(like(i))
        }
    }
    const dispatch = useDispatch()
    return (
        <Card sx={{ margin: 5, borderRadius: 2 }} >
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        {post.name[0]}
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={post.name}
                subheader="September 14, 2022"
            />
            <CardMedia
                component="img"
                height="20%"
                image={post.url}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={() => handleClick(index, post.status)}  >
                    <Checkbox icon={<FavoriteBorder />}
                        checkedIcon={<Favorite sx={{ color: "red" }} />} />
                </IconButton>
                <Typography variant="p">
                    {post.likes} likes
                </Typography>
                <IconButton aria-label="comment" sx={{ marginLeft: "10px" }}>
                    <CommentIcon />
                </IconButton>
                <Typography variant="p">
                    {post.comments} comments
                </Typography>
                <IconButton aria-label="share" sx={{ marginLeft: "10px" }}>
                    <ShareIcon />
                </IconButton>


            </CardActions>
        </Card>
    )
}

export default Post
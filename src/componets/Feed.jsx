
import { Box } from "@mui/system";
import Post from "./Post";
import {  useSelector } from "react-redux";
import Stories from "./Stories";






const Feed = () => {

 const postDetail=useSelector(state=> state.posts.data);

    return (
       
        
        <Box flex={4} p={2} >
            <Stories/>
         {
             postDetail.map((post,index)=>{
                 
                 return (   <Post key={post.url} post={post} index={index} />)
                })
            }
        </Box>
          
    )
}

export default Feed
import "./post.scss";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Link } from "react-router-dom";
import Comment from "../comments/Comment";
import moment from "moment/moment";
import {useQuery, useMutation,useQueryClient } from '@tanstack/react-query';
import {makeRequest} from '../../axios';
import { useContext,useState } from "react";
import { AuthContext } from "../Context/authContext";


const Post = ({post}) => {

const [commentOpen,setCommentOpen] = useState (false);
const [menuOpen,setMenuOpen] = useState (false);


const {currentUser} = useContext(AuthContext)

const { isLoading, error, data} = useQuery (["likes", post.id], () =>
makeRequest.get("/likes?postId=" + post.id).then((res)=>{
  return res.data;
})

);


const queryClient = useQueryClient();

const mutation = useMutation((liked)=>{
  if(liked) return makeRequest.delete("/likes?postId=" + post.id);
   return makeRequest.post("/likes", {postId:post.id});
},

{
  onSuccess: () => {
    // Invalidate and refetch
    queryClient.invalidateQueries( ["likes"] );
  },
});



const deleteMutation = useMutation((postId)=>{
   return makeRequest.delete("/posts/" + postId);
},

{
  onSuccess: () => {
    // Invalidate and refetch
    queryClient.invalidateQueries( ["posts"] );
  },
});



const handleDelete = () => {
  deleteMutation.mutate(post.id);
}

const handleLike = () =>{
  mutation.mutate(data.includes(currentUser.id))
};

  return (
    <div className="post">
       <div className="container">
      <div className="user">
        <div className="userInfo">
            <img src={"/upload/"+post.profilePic} alt="" />

            <div className="details">
                <Link to={`/profile/${post.userId}`} style={{textDecoration:"none"}}>
                    <span className="name">{post.name}</span>
                
                </Link>
                <span className="date">{moment(post.createdAt).fromNow()}</span>
            </div>
        </div>
        <MoreVertOutlinedIcon onClick={()=> setMenuOpen(!menuOpen)}/>
        {menuOpen && post.userId === currentUser.id && (<button onClick={handleDelete}>delete</button>)}
      </div>
      
   
        <div className="content">
            <p>{post.desc}</p>
            <img src={"/upload/" + post.img} alt="" />
        </div>
        <div className="info">
            <div className="item">
            { isLoading ? "Loading" : data.includes(currentUser.id) 
            ? (<FavoriteOutlinedIcon style={{color:"red"}} onClick={handleLike}/>) 
            : (<FavoriteBorderOutlinedIcon onClick={handleLike}/>
             )}
            {data?.length} likes
            </div>
            
        <div className="item" onClick={()=>setCommentOpen(!commentOpen) }>
            <TextsmsOutlinedIcon/> 
            Comments
        </div>
        <div className="item">
             <ShareOutlinedIcon/>
             Shares
        </div>
        </div>
        {commentOpen && <Comment postId={post.id}/>}
      </div> 
    </div>
  );
};

export default Post
























































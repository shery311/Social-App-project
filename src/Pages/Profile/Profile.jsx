import "./profile.scss"
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Posts from "../../Components/Posts/Posts";
import {useQuery, useMutation,useQueryClient } from '@tanstack/react-query';
import {makeRequest} from '../../axios';
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Components/Context/authContext";
import Update from "../../Components/update/Update";
import Share from "../../Components/share/Share";


const Profile = () => {

//Open Close Update User Info
const [openUpdate,setOpenUpdate] = useState(false);


  const {currentUser} = useContext(AuthContext);

  const userId = parseInt(useLocation().pathname.split("/")[2]);


  const { isLoading, error, data} = useQuery (["user"] , () =>
  makeRequest.get("/users/find/" + userId).then((res)=>{
    return res.data;
  })
  
  );


  const {isLoading: rIsLoading, data:relationshipData} = useQuery (["relationship"] , () =>
  makeRequest.get("/relationships?followedUserId=" + userId).then((res)=>{
    return res.data;
  })
  );



  const queryClient = useQueryClient();

 const mutation = useMutation(
    (following) => {
      if (following)
        return makeRequest.delete("/relationships?userId=" + userId);
      return makeRequest.post("/relationships", { userId });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["relationship"]);
      },
    }
  );
  

const handleFollow = () =>{

  mutation.mutate(relationshipData.includes(currentUser.id));
};


  return (
    <div className="profile">
       {isLoading ? (
        "loading"
      ) : (<>
      <div className="images">
        <img src={"/upload/"+data.coverPic} className="cover" alt="" />
        <img src={"/upload/"+data.profilePic} className="profilePic" alt="" />
      </div>
      <div className="profile-container">
        <div className="U-info">
          <div className="left">
            <a href="https://facebook.com"><FacebookTwoToneIcon fontSize="medium"/></a>
            <a href="https://Instagram.com"><InstagramIcon fontSize="medium"/></a>
            <a href="https://LinkedIn.com"><LinkedInIcon fontSize="medium"/></a>
            <a href="https://Pinterest.com"><PinterestIcon fontSize="medium"/></a>
            <a href="https://Twitter.com"><TwitterIcon fontSize="medium"/></a>
          </div>
          <div className="center">
            <span>{data.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon/>
                <span>{data.city}</span>
              </div>
              <div className="item">
                <LanguageIcon/>
                <span>{data.website}</span>
              </div>
            </div>
              {rIsLoading ? "loading" : userId === currentUser.id ? (<button onClick={()=>setOpenUpdate(true)}>update</button>) : (
              
              <button onClick={handleFollow}>{ relationshipData.includes(currentUser.id) ? "Following" : "Follow"}</button>
              )}
          </div>
          <div className="right">
            <EmailOutlinedIcon/>
            <MoreVertOutlinedIcon/>
          </div>
        </div>
        <Share/>
        <Posts userId={userId}/>
      </div>
      </>
      )}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data}/>}
    </div>
  );
}

export default Profile

import "./leftbar.scss";
import pexels1 from '../../images/pexels1.jpg';
import friends from '../../images/friends.png';
import marketplace from '../../images/marketplace.png';
import stopwatch from '../../images/stopwatch.png';
import team from '../../images/team.png';
import calendar from '../../images/calendar.png';
import gallery from '../../images/gallery.png';
import videocamera from '../../images/videocamera.png';
import gaming from '../../images/gaming.png';
import message from '../../images/message.png';
import multimedia from '../../images/multimedia.png';
import fund from '../../images/fund.png';
import tutorial from '../../images/tutorial.png';
import course from '../../images/course.png';
import { AuthContext } from "../Context/authContext";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";




const Leftbar = () => {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={"/upload/"+currentUser.profilePic} alt=""/>

            <Link to={`/profile/${currentUser?.id}`} style={{textDecoration:"none", color:"inherit"}}>
            <span>{currentUser.name}</span>
            </Link>
            
          </div>
          <div className="item">
            <img src={friends} style={{width:"30px",height:"30px"}}alt />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={marketplace} style={{width:"30px",height:"30px"}}alt />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={stopwatch} style={{width:"30px",height:"30px"}}alt />
            <span>Stopwatch</span>
          </div>
          <div className="item">
            <img src={team} style={{width:"30px",height:"30px"}}alt />
            <span>Team</span>
          </div>
          <div className="item">
            <img src={multimedia} style={{width:"30px",height:"30px"}}alt />
            <span>Watch</span>
          </div>
        </div>
        {/* Menu 1 ends here */}
        <hr/>
        <div className="menu">
          <span>your shortcuts</span>
          <div className="item">
            <img src={calendar} style={{width:"30px",height:"30px"}}alt />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={gaming} style={{width:"30px",height:"30px"}}alt />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={gallery} style={{width:"30px",height:"30px"}}alt />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={videocamera} style={{width:"30px",height:"30px"}}alt />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={message} style={{width:"30px",height:"30px",objectFit:"cover", margin:"0"}}alt />
            <span>Message</span>
          </div>
        </div>
        {/* 2nd menu ends here */}
        <hr/>
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={fund} style={{width:"30px",height:"30px"}}alt />
            <span>Fund</span>
          </div>
          <div className="item">
            <img src={course} style={{width:"30px",height:"30px"}}alt />
            <span>Course</span>
          </div>
          <div className="item">
            <img src={tutorial} style={{width:"30px",height:"30px"}}alt />
            <span>Tutorial</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leftbar

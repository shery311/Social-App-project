import "./rightbar.scss";
import pexels1 from '../../images/pexels1.jpg';
import { useContext } from "react";
import { AuthContext } from "../Context/authContext";

const Rightbar = () => {


  const {currentUser} = useContext(AuthContext);
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="userInfo">
              <img src={"/upload/" +currentUser.profilePic} alt="" />
              <span>{currentUser.name}</span>
            </div>
            <div className="buttons">
            <button>follow</button>
            <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={pexels1} alt="" />
              <span>John Doe</span>
            </div>
            <div className="buttons">
            <button>follow</button>
            <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src={pexels1} alt="" />
              <p> 
              <span>John Doe</span> Changed their cover picture
              </p>   
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={pexels1} alt="" />
              <p>
              <span>John Doe</span>Changed their cover picture
              </p>
              
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={pexels1} alt="" />
              <p>
              <span>John Doe</span>Changed their cover picture
              </p>
              
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src={pexels1} alt="" />
              <div className="online"/>
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={pexels1} alt="" />
              <div className="online"/>
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={pexels1} alt="" />
              <div className="online"/>
              <span>John Doe</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={pexels1} alt="" />
              <div className="online"/>
              <span>John Doe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar

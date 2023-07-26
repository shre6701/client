import NotificationsIcon from "@mui/icons-material/Notifications";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import {logoutStart} from "../../authContext/AuthAction"

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false)
  const {dispatch} = useContext(AuthContext);

  window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0? false : true )
      return () => (window.onscroll = null)
  }
  
  return (
    <div className={isScrolled? "navbar scrolled ": "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=456"
            alt=""
          />

          <Link to="/" className="link">
          <span>Home</span>
          </Link>
          <Link to="/series" className="link">
          <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
          <span>Movies</span>
          </Link>    
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchIcon className="icon"/>
          <span>KIDS</span>
          <NotificationsIcon className="icon"/>
          <img
            src="https://images.pexels.com/photos/16013682/pexels-photo-16013682/free-photo-of-shopla.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
          <div className="profile">
          <ArrowDropDownIcon className="icon"/>
          <div className="options">
            <span>
              Settings
            </span>
            <span onClick={() => dispatch(logoutStart())}>Logout</span>
          </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;

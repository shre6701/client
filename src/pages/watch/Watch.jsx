import { Link, useLocation } from "react-router-dom";
import "./watch.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const Watch = () => {
  const location = useLocation();
    console.log(location, " useLocation Hook");

    const data = location.state.movie;
  return (
    <div className="watch">
    <Link to="/">
      <div className="back">
        <ArrowBackOutlinedIcon />
        Home
      </div>
      </Link>
      <video
        src={data ? data.video : "No Video"}
        className="video"
        autoPlay
        progress="true"
        controls
      />
    </div>
  );
};

export default Watch;

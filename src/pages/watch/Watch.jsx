import { Link, useLocation } from "react-router-dom";
import "./watch.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const Watch = () => {
  const location = useLocation();
  console.log(location);
  const movie = location;
  return (
    <div className="watch">
    <Link to="/">
      <div className="back">
        <ArrowBackOutlinedIcon />
        Home
      </div>
      </Link>
      <video
        src={movie.video}
        className="video"
        autoPlay
        progress="true"
        controls
      />
    </div>
  );
};

export default Watch;

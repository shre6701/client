import "./listitem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState(null); // Initialize movie state with null

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/movies/find/${item}`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTU3ODgxZGQ3Y2Y0YWY0MjMyOTk4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDI4ODk4MSwiZXhwIjoxNjkyNDQ4OTgxfQ.p97iM7kcfxs8ySZQSTr8NWtJM4BF87CIcuVxga_G8wQ",
            },
          }
        );
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getMovie();
  }, [item]);

  // Check if movie is still loading
  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Link to="/watch" state={{ movie: movie }} key={item}>
      <div
        className="listItem"
        style={{
          left:
            isHovered && typeof index === "number"
              ? index * 225 - 50 + index * 2.5
              : undefined,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Check if movie.img is available */}
        {movie.img ? <img src={movie.img} alt="" /> : <div>No Image Available</div>}
        {isHovered && movie.trailer && (
          <>
            <video src={movie.trailer} autoPlay loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrowIcon className="icon" />
                <AddIcon className="icon" />
                <ThumbUpOutlinedIcon className="icon" />
                <ThumbDownOffAltOutlinedIcon className="icon" />
              </div>
              <div className="itemInfoTop">
                <span>{movie.duration}</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>
              <div className="desc">{movie.desc}</div>
              <div className="genre">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;

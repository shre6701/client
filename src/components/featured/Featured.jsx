import "./featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Featured({type}) {
  return (
    <div className="featured">
    {type && (
        
        <div className="category">
            <span>{type === "movies"? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
            <option>Genre</option>
                <option value="adventure">Adventure</option>
                <option value="comedy">Comedy</option>
                <option value="crime">Crime</option>
                <option value="fantasy">Fantasy</option>
                <option value="historical">Historical</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
                <option value="sci-fi">Sci-Fi</option>
                <option value="thriller">Thriller</option>
                <option value="western">Western</option>
                <option value="animation">Animation</option>
                <option value="drama">Drama</option>
                <option value="documentary">Documentary</option>
            </select>
        </div>

    )}
      <img
        src="https://images.pexels.com/photos/16013682/pexels-photo-16013682/free-photo-of-shopla.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
      />
      <div className="info">
        <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgmYKZ3T26ixp91WXxdpJAfxgYeD12Y4D8tH7_6za&s" 
        alt="" 
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          molestias eaque quis cumque, dicta mollitia cupiditate maiores velit
          vel doloribus impedit molestiae quidem libero exercitationem qui amet
          unde accusantium soluta.
        </span>
        <div className="buttons">
            <button className="play">
                <PlayArrowIcon/>
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlinedIcon/>
                <span>Info</span>
            </button>
        </div>
      </div>
    </div>
  );
}

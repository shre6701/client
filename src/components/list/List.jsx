import "./list.scss";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ListItem from "../listItem/ListItem";
import { useRef, useState } from "react";

const List = ({ list }) => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);

    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      let newLeft = 230 + distance;
      listRef.current.style.transform = `translateX(${newLeft}px)`;
    }

    if (direction === "right" && slideNumber < 10 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      let newLeft = -230 + distance;
      listRef.current.style.transform = `translateX(${newLeft}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle"> {list.title}</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlinedIcon
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {list.content.map((item) => (
            <ListItem key={item._id} index={item._id} item={item} />
          ))}
        </div>
        <ArrowForwardIosOutlinedIcon
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;

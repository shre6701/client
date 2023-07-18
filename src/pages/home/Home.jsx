import "./home.scss";
import Navbar from "../../components/navabar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTU3ODgxZGQ3Y2Y0YWY0MjMyOTk4NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4Nzc2NzYyMiwiZXhwIjoxNjg5OTI3NjIyfQ.YQvb6kUzId3zWyYgVv2mJCDu_Sz8HHPoqUOZWzB9qXM",
            },
          }
        );
       
        setLists(res.data)
        
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list}/>
      ))}
      
      
    </div>
  );
};

export default Home;

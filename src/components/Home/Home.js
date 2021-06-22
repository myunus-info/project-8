import React, { useEffect, useState } from "react";
import sportsData from "../../sportsData/sportsData";
import Sports from "../Sports/Sports";
import "./Home.css";

const Home = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    setSports(sportsData);
  }, []);

  return (
    <div className="home-background">
      <div className="container px-lg-0">
        <div className="row">
          {sports.map((sport) => (
            <Sports sport={sport} key={sport.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

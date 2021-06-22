import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SportDescription from "../SportDescription/SportDescription";
import "./SportsDets.css";

const SportsDets = () => {
  const [sport, setSport] = useState({});
  const { sportId } = useParams();

  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${sportId}`
    )
      .then((res) => res.json())
      .then((data) => setSport(data.leagues[0]));
  }, [sportId]);

  return (
    <>
      <SportDescription sport={sport} />
    </>
  );
};

export default SportsDets;

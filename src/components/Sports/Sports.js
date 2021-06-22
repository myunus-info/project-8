import React from "react";
import "./Sports.css";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const Sports = (props) => {
  const { id, type, name, img } = props.sport;
  const history = useHistory();

  const handleClick = (sportId) => {
    history.push(`/sport/${sportId}`);
  };

  return (
    <div className="col-lg-4">
      <div className="sports-ninja text-center">
        <div className="logo-box">
          <img src={img} alt="" />
        </div>
        <h2>{name}</h2>
        <p>Sports Type: {type}</p>
        <br />
        <button onClick={() => handleClick(id)} className="btn btn-primary">
          Explore &nbsp;
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </button>
      </div>
    </div>
  );
};

export default Sports;

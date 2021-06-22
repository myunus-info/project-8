import React from "react";
import "./SportDescription.css";
import male from "../../img/male.png";
import female from "../../img/female.png";
import twitter from "../../img/Twitter.png";
import facebook from "../../img/Facebook.png";
import youtube from "../../img/YouTube.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faFlag,
  faFutbol,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const SportDescription = (props) => {
  const {
    strLeague,
    intFormedYear,
    strCountry,
    strSport,
    strGender,
    strDescriptionEN,
  } = props.sport;

  return (
    <div className="sport-description">
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center responsive-class background-inner">
            <div className="left-side col-lg-7 col-md-12">
              <h2>{strLeague}</h2>
              <p>
                <FontAwesomeIcon icon={faBuilding} /> &nbsp; Founded:{" "}
                {intFormedYear}
              </p>
              <p>
                <FontAwesomeIcon icon={faFlag} /> &nbsp; Country: {strCountry}
              </p>
              <p>
                <FontAwesomeIcon icon={faFutbol} /> &nbsp; Sport Type:{" "}
                {strSport}
              </p>
              <p>
                <FontAwesomeIcon icon={faUser} /> &nbsp; Gender: {strGender}
              </p>
            </div>
            <div className="right-side col-lg-5 col-md-12">
              <img src={strGender === "Male" ? male : female} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container paragraph-style">
        <div className="row">
          <div className="col-lg-12">
            <p>{strDescriptionEN}</p>
            <br />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              nam consequuntur possimus molestias perspiciatis quasi quibusdam
              ad expedita, delectus consequatur hic ullam ex ipsa officiis ipsam
              velit repudiandae cum unde voluptas repellat sint? Voluptates
              earum ea numquam, placeat accusamus sit iure quis molestiae
              facilis. Delectus, dolorem! Dolore error amet quae, laborum hic
              ratione id quaerat libero aut recusandae similique blanditiis
              vitae nesciunt! Unde animi illo ipsam ipsum dolore corrupti
              repellendus minima suscipit in et quibusdam at a est ratione,
              illum asperiores? Delectus, doloremque harum accusantium sed
              perferendis molestiae tempore nisi fugiat quo aspernatur voluptas.
              Veniam ullam nam pariatur! Enim, repellat.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="social-icons">
              <a href="https://twitter.com/">
                <img src={twitter} alt="" />
              </a>
              <a href="https://facebook.com/">
                <img src={facebook} alt="" />
              </a>
              <a href="https://youtube.com/">
                <img src={youtube} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportDescription;

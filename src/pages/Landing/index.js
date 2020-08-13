import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import landing from "../../assets/landing.svg";
import studyIcon from "../../assets/icons/study.svg";
import giveIcon from "../../assets/icons/give-classes.svg";
import purpleHeart from "../../assets/icons/purple-heart.svg";
import api from "../../services/api";
import "./styles.css";

function Landing() {
  const [connections, setConecctions] = useState(0);

  useEffect(() => {
    api.get("connections").then((res) => {
      console.log(res.data);
      const { total } = res.data;
      setConecctions(total);
    });
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logo} alt={logo} />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landing} alt={landing} className="hero-image" />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt={studyIcon} />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveIcon} alt={giveIcon} />
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {connections} conexões já realizadas{" "}
          <img src={purpleHeart} alt={purpleHeart} />
        </span>
      </div>
    </div>
  );
}

export default Landing;

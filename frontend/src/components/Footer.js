import React from "react";
import { Container } from "react-bootstrap";
import { homeData } from "../App";

const Footer =(props) => {
  return (
    <footer>
      <Container className="foot">
      <div className="bot">
        <img className="cooltees-logo" src={homeData.coolteesLogo} alt="bot"/>
            <div className="foot">
            <p className="drink">{homeData.drink}</p>
        <div className="cont">
            <div className="place">{homeData.place}</div>
            <p className="e-mail">{homeData.eMail}</p>
        </div>
            <div className="rect"></div>
            <p className="design">{homeData.design}</p>
        </div>
      </div>
      </Container>
    </footer>
  );
};

export default Footer;

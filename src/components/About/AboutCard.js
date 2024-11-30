import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Čus, jsem<span className="purple"> Venca </span>
            z <span className="purple"> Boršic.</span>
            <br />
            Jsem vášnivý folklorista a tanečník
            <br />
            Mám rád hezké holky, matcha tea a Rainbow 6.
            <br />
            <br />
            Krom tance mám rád:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hraní her
            </li>
            <li className="about-activity">
              <ImPointRight /> Spánek
            </li>
            <li className="about-activity">
              <ImPointRight /> Kalby 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {" "}
          </p>
          <footer className="blockquote-footer">Vasik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

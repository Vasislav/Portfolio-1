import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Dovolte mi <span className="purple">  </span> se představit
            </h1>
            <p className="home-about-body">
              Jsem milovník folkloru a webů
              <br />
              <br />Jsem mistr
              <i>
                <b className="purple"> C++, Javascript, SQL, HTML </b>
              </i>
              <br />
              <br />
              Zajímá mě tvorba nových &nbsp;
              <i>
                <b className="purple">Web technologií </b> 
                {" "}
                <b className="purple">
                  
                </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;

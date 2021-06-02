import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";

import CarouselOpinions from "../../components/CarouselOpinions/CarouselOpinions";
import Footer from "../../components/Footer/Footer";

import "./Home.css";
import "aos/dist/aos.css";

import AlphaBLogo from "./assets/alphab_logo.png";
import GirlImage from "./assets/girl.svg";
import HomeCenterLeft from "./assets/home_center_left.svg";
import HomCenterLeft2 from "./assets/home_center_left2.svg";
import HomCenterRight from "./assets/home_center_right.svg";
import HomCenterRight2 from "./assets/home_center_right2.svg";
import HomeDesign from "./assets/home_top.png";
import HomeTop from "./assets/home_top.svg";
import QuoteLeft from "./assets/quoteLeft.svg";
import QuoteRight from "./assets/quoteRight.svg";

function Home() {
  return (
    <>
      <Container fluid>
        <Row className="align-items-center" id="home-section1">
          <Col xs={12} sm={12} md={12} lg={6}>
            <div className="home-container">
              <div className="home-container-title">
                <h1 className="home-title">ALPHA</h1>
                <img className="home-logo" src={AlphaBLogo} alt="logo AlphaB" />
              </div>
              <h2 className="home-sub-title">
                la lecture accessible pour tous
              </h2>
              <button className="home-button-begin">
                <a href="/texte" id="button-link">
                  Commencer
                </a>
              </button>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <img
              className="home-section1-image"
              src={HomeDesign}
              alt="design home page"
            />
          </Col>
        </Row>
        <Row>
          <div className="home-main-container-quote">
            <div className="home-container-quote">
              <img
                className="home-quotes-left"
                src={QuoteLeft}
                alt="quote left"
              />
              <p className="home-quotes">
                {
                  " En France, 6 à 8% de la population est concernée par des troubles appelés 'Dys': dyslexies, dyspraxie, dysphasie. "
                }
              </p>
              <img
                className="home-quotes-right "
                src={QuoteRight}
                alt="quotes right"
              />
            </div>
            <div className="home-quote">
              <p id="quote">Inserm</p>
            </div>
          </div>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <img src={HomeTop} alt="home design" id="home-design-top" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={2}>
            <img src={HomeCenterLeft} alt="img2" id="home-design-left-center" />
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            {" "}
            <p className="home-text1" data-aos="fade-up">
              La lecture est omniprésente dans notre quotiden. <br></br>Pour
              AlphaB, il est essentiel d’apporter une aide concrète à toutes
              personnes en difficulté.
            </p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <img
              src={HomCenterRight}
              alt="img3"
              id="home-design-right-center"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={0} sm={0} md={6} lg={6}>
            <img src={HomCenterLeft2} alt="imgleft2" id="home-design-left2" />
          </Col>

          <Col xs={12} sm={12} md={12} lg={4}>
            <p className="home-text2" data-aos="fade-up">
              AlphaB a créé une solution adaptée et efficace pour toutes les
              personnes nécessitant une assistance lors de la lecture.
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <img src={HomCenterRight2} alt="img4" id="home-design-right2" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={2}></Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            <p className="home-text3" data-aos="fade-up">
              Découvrez des outils simples et pratiques qui vous redonneront
              confiance en vous.<br></br> La lecture de vos textes adaptés à vos
              besoins n’aura jamais été aussi facile !!!<br></br> Une aide
              précieuse à destination de toutes les personnes atteintes de
              troubles de la lecture (dyslexie, dyspraxie, dysphasie...).
            </p>
          </Col>

          <div className="conteneur4">
            <p className="textHome4" data-aos="fade-up"></p>
          </div>
          <div className="conteneur5">
            <p className="textHome5" data-aos="fade-up"></p>
          </div>
          <Col xs={12} sm={12} md={12} lg={6}>
            <div className="conteneur6">
              <img id="home-image-girl" src={GirlImage} alt="img" />
            </div>
          </Col>
        </Row>

        <Row>
          <div className="home-main-container-quote">
            <div className="home-container-quote">
              <img
                className="home-quotes-left"
                src={QuoteLeft}
                alt="quote left"
              />
              <p className="home-quotes">
                Depuis tout petit, je confonds certaines lettres entrainant des
                difficultés de lecture.<br></br> Grâce à AlphaB, j'ai trouvé
                l'outil qui atténue mes gênes au quotidien.
              </p>
              <img
                className="home-quotes-right"
                src={QuoteRight}
                alt="quotes right"
              />
            </div>
            <div className="home-quote">
              <p id="quote">Abdou K.</p>
            </div>
          </div>
        </Row>
        <Row>
          <CarouselOpinions />
        </Row>
      </Container>
      <Footer />
    </>
  );
}

AOS.init();
export default Home;

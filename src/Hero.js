import copybuddylogo from './images/copybuddy.svg';
import orangeElement from './images/Element-Orange.png';
import grayElement from './images/Element-Gray.png';

import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Row, Col, Button } from 'reactstrap';

import './App.css';
import "animate.css/animate.min.css";


function Hero() {
  return (
    <div>
      <Container>
        <Row className="headerCustom">
          <div>
            <img src={copybuddylogo} alt="Copy Buddy Logo"></img>
          </div>
          <div className="menuLinks">
            <a href="https://twitter.com/peterondesign">Pricing</a>
            <a href="https://twitter.com/peterondesign">Login</a>
            <a href="https://twitter.com/peterondesign" className="primary button">Sign up</a>
          </div>
        </Row>
        <Row className="hero">
          <Col md={2}>
            <ScrollAnimation animateIn='zoomIn' delay={250} animateOut='fadeOut'>
              <img src={orangeElement} alt="Orange Element" className='element'></img>
            </ScrollAnimation>
          </Col>
          <Col md={5}>
            <ScrollAnimation animateIn='fadeIn'>
              <p className="heroText">
                Copywriting that fits.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn='animate__fadeInUp' delay={250}>
              <p>
                A tool that gives you the right text for every scenario.
              </p>
            </ScrollAnimation>
            <ScrollAnimation animateIn='animate__fadeInUp' delay={250}>
              <div className="buttonGroup">
                <Button className="secondary button">Watch how it works</Button>
                <Button className="primary button">Sign up for free to get  access</Button>
              </div>
            </ScrollAnimation>
          </Col>
          <Col md={2}>
            <ScrollAnimation animateIn='zoomIn' delay={400} animateOut='fadeOut'>
              <img src={grayElement} alt="Gray Element" className='element'></img>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
      <hr className="spacerMedium gray"></hr>
    </div>
    );
  }

  export default Hero;

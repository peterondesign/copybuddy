import illustrationSmartVariables from './images/SmartVariables.svg';
import illustrationSearch from './images/Search.svg';

import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Row, Col, Button } from 'reactstrap';

import './App.css';
import "animate.css/animate.min.css";

import Hero from './Hero';
import Copies from './Copies';


function App() {
  return (
    <div>
      <Hero/>
      <div className="sectionDark">
      <Copies/>
        <Container>
          <Row>
            Test
          </Row>
          <hr className="spacerLarge"></hr>
          <Row>
            <Col md={5}>
              <h1 className="title_dark h1">Smart variables for smarter copy</h1>
              <hr className="spacerSmall"></hr>
              <p className="title_dark">We’ve built a repository of words and phrases used in the most successful applications. Set a custom variable to better suit your product
              </p>
            </Col>
            <div className="title dark col-md-7 illustrationSmartVariables">
              <ScrollAnimation animateIn='animate__fadeInUp' delay={250}>
                <img src={illustrationSmartVariables} alt="Illustration showing smart variables"></img>
              </ScrollAnimation>
            </div>
          </Row>
          <hr className="spacerLarge"></hr>
          <Row>
            <div className="title dark col-md-7 illustrationSearch">
              <ScrollAnimation animateIn='animate__fadeInUp'>
                <img src={illustrationSearch} alt="Illustration showing search"></img>
              </ScrollAnimation>
            </div>
            <Col md={5}>
              <h1 className="title_dark h1">Sign up to unlock more features</h1>
              <hr className="spacerSmall"></hr>
              <Button className="secondary button">Sign up to get full access</Button>
            </Col>
          </Row>
        </Container>
        <hr className="spacerSmall"></hr>
        <div className="sectionDark text-center footer">
          <Container>
            <Row>
              <p>Built by
                <a href="https://twitter.com/peterondesign" target="_blank" rel="noreferrer">@peterondesign</a>
              </p>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;

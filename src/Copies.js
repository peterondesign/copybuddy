import copyIcon from './images/copy_icon.svg';
import iconCheck from './images/IconCheck.svg'

import { Container, Row } from 'reactstrap';

import './App.css';
import "animate.css/animate.min.css";


function Copies() {
  function copyAlert1() {
    var x = document.getElementById("copyAlert");
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
    navigator.clipboard.writeText('Check your messages. Instructions to recover your password have been sent to your email or phone.');
  }
  function copyAlert2() {
    var x = document.getElementById("copyAlert");
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
    navigator.clipboard.writeText('Connection failure. Something has gone wrong with the internet connection. Let us give it another shot.');
  }
  function copyAlert3() {
    var x = document.getElementById("copyAlert");
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
    navigator.clipboard.writeText('Uh oh, we cannot find the page you are looking for. Try going to the previous page or homepage or Help Center for more information.');
  }
  function copyAlert4() {
    var x = document.getElementById("copyAlert");
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
    navigator.clipboard.writeText('To fight spam and abuse, kindly verify you are human. Takes only one click and we all enjoy a better experience in the end.');
  }
  function copyAlert5() {
    var x = document.getElementById("copyAlert");
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
    navigator.clipboard.writeText('This is a tough one. We cannot find results for that criteria. Want to try a different one?');
  }
  function copyAlert6() {
    var x = document.getElementById("copyAlert");
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
    navigator.clipboard.writeText('Looks like the connection to our server is having a "moment". Check yours, we will check ours and meet back here. Deal?');
  }
  function copyAlert7() {
    var x = document.getElementById("copyAlert");
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
    navigator.clipboard.writeText('There is a billing issue. Update your payment information for uninterrupted service.');
  }
  function copyAlert8() {
    var x = document.getElementById("copyAlert");
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
    navigator.clipboard.writeText('Your account activation link will expire soon!');
  }
  function copyAlert9() {
    var x = document.getElementById("copyAlert");
    // Add the "show" class to DIV
    x.className = "show";
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
    navigator.clipboard.writeText('Looks like we could not find a user with that email address. Try a different email?');
  }
  return (
    <div>
      <Row>
        <div id="copyAlert">
          <div><img src={iconCheck} alt="Illustration of Checked Icon"></img></div>
          <div>Copied!</div>
        </div>
      </Row>
      <Container>
        <Row className="copyCardRow">
          <div className="copyCard">
            <div className="textSection">
              Check your messages. Instructions to recover your password have been sent to your email or phone.
              <div className="copyIcon" onClick={() => copyAlert1()}>
                <img src={copyIcon} alt="Copy Icon"></img>
              </div>
            </div>
            <hr className="divider"></hr>
            <div className="badges">
              <div className="badge">Authentication</div>
              <div className="badge">Forgot Password</div>
              <div className="badge">Straightforward</div>
            </div>
          </div>

          <div className="copyCard">
            <div className="textSection">
            Connection failure. Something has gone wrong with the internet connection. Let's give it another shot.
              <div className="copyIcon" onClick={() => copyAlert2()}>
                <img src={copyIcon} alt="Copy Icon"></img>
              </div>
            </div>
            <hr className="divider"></hr>
            <div className="badges">
              <div className="badge">Errors</div>
              <div className="badge">Connectivity</div>
              <div className="badge">Friendly</div>
            </div>
          </div>
          
          <div className="copyCard">
            <div className="textSection">
            Uh oh, we cannot find the page you are looking for. Try going to the previous page or homepage or Help Center for more information.
              <div className="copyIcon" onClick={() => copyAlert3()}>
                <img src={copyIcon} alt="Copy Icon"></img>
              </div>
            </div>
            <hr className="divider"></hr>
            <div className="badges">
              <div className="badge">Error</div>
              <div className="badge">404 Page</div>
              <div className="badge">Straightforward</div>
            </div>
          </div>
        </Row>
        <Row className="copyCardRow">
          <div className="copyCard">
            <div className="textSection">
            To fight spam and abuse, kindly verify you are human. Takes only one click and we all enjoy a better experience in the end.
              <div className="copyIcon" onClick={() => copyAlert4()}>
                <img src={copyIcon} alt="Copy Icon"></img>
              </div>
            </div>
            <hr className="divider"></hr>
            <div className="badges">
              <div className="badge">Captcha</div>
              <div className="badge">Straightforward</div>
            </div>
          </div>
          <div className="copyCard">
            <div className="textSection">
            This is a tough one. We cannot find results for that criteria. Want to try a different one?
              <div className="copyIcon" onClick={() => copyAlert5()}>
                <img src={copyIcon} alt="Copy Icon"></img>
              </div>
            </div>
            <hr className="divider"></hr>
            <div className="badges">
              <div className="badge">Empty State</div>
              <div className="badge">No results after search</div>
              <div className="badge">Quirky</div>
            </div>
          </div>
          <div className="copyCard">
            <div className="textSection">
            Looks like the connection to our server is having a "moment". Check yours, we will check ours and meet back here. Deal?
              <div className="copyIcon" onClick={() => copyAlert6()}>
                <img src={copyIcon} alt="Copy Icon"></img>
              </div>
            </div>
            <hr className="divider"></hr>
            <div className="badges">
              <div className="badge">Errors</div>
              <div className="badge">Connectivity</div>
              <div className="badge">Quirky</div>
            </div>
          </div>
        </Row>
        <Row className="copyCardRow">
          <div className="copyCard">
            <div className="textSection">
            There's a billing issue. Update your payment information for uninterrupted service.
              <div className="copyIcon" onClick={() => copyAlert7()}>
                <img src={copyIcon} alt="Copy Icon"></img>
              </div>
            </div>
            <hr className="divider"></hr>
            <div className="badges">
              <div className="badge">Alerts</div>
              <div className="badge">Payment</div>
              <div className="badge">Straightforward</div>
            </div>
          </div>
          <div className="copyCard">
            <div className="textSection">
            Your account activation link will expire soon!
              <div className="copyIcon" onClick={() => copyAlert8()}>
                <img src={copyIcon} alt="Copy Icon"></img>
              </div>
            </div>
            <hr className="divider"></hr>
            <div className="badges">
              <div className="badge">Authentication</div>
              <div className="badge">Account Activation</div>
              <div className="badge">Straightforward</div>
            </div>
          </div>
          <div className="copyCard">
            <div className="textSection">
            Looks like we could not find a user with that email address. Try a different email?
              <div className="copyIcon">
                <img src={copyIcon} alt="Copy Icon" onClick={() => copyAlert9()}></img>
              </div>
            </div>
            <hr className="divider"></hr>
            <div className="badges">
              <div className="badge">Authentication</div>
              <div className="badge">On logout</div>
              <div className="badge">Straightforward</div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Copies;

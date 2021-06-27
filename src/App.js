import React from "react";
import logo from "./copybuddy_logo_white.svg";
import search_icon from "./search_icon_white.svg";
import right_panel from "./hero_section_art_secondpanel.png";
import floating_box from "./hero_section_art_floating_box.svg";
import "./copybuddy.scss";

function App() {
  return (
    <div className="hero_section">
      <div className="header_section">
        <img src={logo} className="" alt=""></img>
      </div>
      <div className="hero_section_art">
        <div className="hero_section_art_firstpanel">
          <p className="hero_section_art_firstpanel_largetext">
            Go further than placeholder text
          </p>
          <div className="hero_section_art_firstpanel_searchbox">
            <input
              className="hero_section_art_firstpanel_searchbox_input"
              placeholder="What are you working on?"
              style={{border:"none"}}
            ></input>
            <div className="hero_section_art_firstpanel_searchbox_button">
              <a href="test">
                <img
                  src={search_icon}
                  className="hero_section_art_firstpanel_searchbox_button_search_icon"
                  alt="search_icon"
                ></img>{" "}
              </a>
            </div>
            <div className="hero_section_art_firstpanel_designelement">
                    <img src={floating_box} alt="floating_box"></img>
              
            </div>
          </div>
        </div>
        <div className="hero_section_art_secondpanel">
          <img
            src={right_panel}
            className="right_panel"
            alt="right_panel"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default App;

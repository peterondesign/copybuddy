import React from "react";
import logo from "./copybuddy_logo_white.svg";
import search_icon from "./search_icon_white.svg";
import right_panel from "./hero_section_art_secondpanel.png";
import floating_box from "./hero_section_art_floating_box.svg";
import arrow_right from "./categories_section_inner_copy_categories_category_arrow_right_black.svg";
import long_arrow_right from "./arrow_white.svg";

import copy_icon from "./copy_icon.svg";

import "./copybuddy.scss";

function App() {
  return (
    <div className="">
      <div className="hero_section">
        <div className="">
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
                  style={{ border: "none" }}
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
      </div>

      <div className="categories_section">
        <div className="categories_section_inner">
          <h4>Explore Copy Categories</h4>
          <p>
            Copy categories? Basically places where you might need good UX copy
          </p>
          <div className="categories_section_inner_copy_categories">
            <div className="categories_section_inner_copy_categories_category">
              <div className="categories_section_inner_copy_categories_category_title">
                <p>Copy for</p>
                <p>Onboarding</p>
              </div>
              <div className="categories_section_inner_copy_categories_category_arrow">
                <img
                  src={arrow_right}
                  className="arrow_right"
                  alt="arrow_right"
                ></img>
              </div>
            </div>
            <div className="categories_section_inner_copy_categories_category">
              <div className="categories_section_inner_copy_categories_category_title">
                <p>Copy for</p>
                <p>Onboarding</p>
              </div>
              <div className="categories_section_inner_copy_categories_category_arrow">
                <img
                  src={arrow_right}
                  className="arrow_right"
                  alt="arrow_right"
                ></img>
              </div>
            </div>
            <div className="categories_section_inner_copy_categories_category">
              <div className="categories_section_inner_copy_categories_category_title">
                <p>Copy for</p>
                <p>Onboarding</p>
              </div>
              <div className="categories_section_inner_copy_categories_category_arrow">
                <img
                  src={arrow_right}
                  className="arrow_right"
                  alt="arrow_right"
                ></img>
              </div>
            </div>
            <div className="categories_section_inner_copy_categories_category">
              <div className="categories_section_inner_copy_categories_category_title">
                <p>Copy for</p>
                <p>Onboarding</p>
              </div>
              <div className="categories_section_inner_copy_categories_category_arrow">
                <img
                  src={arrow_right}
                  className="arrow_right"
                  alt="arrow_right"
                ></img>
              </div>
            </div>
          </div>
          <div className="categories_section_inner_button_box">
            <a
              href="/test"
              className="categories_section_inner_button_box_button"
            >
              View all
            </a>
          </div>
        </div>
      </div>

      <div className="customisation_section">
        <div className="customisation_section_inner">
          <div className="customisation_section_inner_introductiontext">
            <p>Customise to your product</p>
            <input
              className="hero_section_art_firstpanel_searchbox_input customise_input"
              placeholder="Insert item name here"
              style={{ border: "none" }}
            ></input>
          </div>
          <div className="customisation_section_inner_copycards">
            <div className="customisation_section_inner_copycards_card">
              <div className="">There are no XYZs yet</div>
              <div className="">
                <img
                  src={copy_icon}
                  className="copy_icon"
                  alt="copy_icon"
                ></img>
              </div>
              <div className="">Empty state: On first launch</div>
              <div className="">Straightforward</div>
            </div>

            <div className="customisation_section_inner_copycards_card">
              <div className="">Ready to add your first XYZ?</div>
              <div className="">
                <img
                  src={copy_icon}
                  className="copy_icon"
                  alt="copy_icon"
                ></img>
              </div>
              <div className="">Empty state: On first launch</div>
              <div className="">Friendly</div>
            </div>
          </div>
        </div>
      </div>

      <div className="support_section">
        <div className="support_section_innerbox">
          <a
            class="link"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/intent/tweet?text=Hi%20%40peterondesign%2C%20I%27d%20like%20to%20contribute%20to%20the%20CopyBuddy%20project"
          >
            
            <div className="support_section_innerbox_card">
              <div>
                <span>
                  Tweet me (@peterondesign) if you’d like to contribute to this
                  project
                </span>
              </div>
              <div>
                <img
                  src={long_arrow_right}
                  className="long_arrow_right"
                  alt="long_arrow_right"
                ></img>
              </div>
            </div>
          </a>
          <a
            className="link"
            target="_blank"
            rel="noreferrer"
            href="https://barter.me/peterondesign"
          >
            <div className="support_section_innerbox_card primary_card">
              <div>
                <span>
                  Donate{" "}
                  <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://barter.me/peterondesign"
                  >
                    here{" "}
                  </a>{" "}
                  to show your support
                </span>
              </div>
              <div>
                <img
                  src={long_arrow_right}
                  className="long_arrow_right"
                  alt="long_arrow_right"
                ></img>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;

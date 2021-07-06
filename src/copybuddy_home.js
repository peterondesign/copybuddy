// Packages
import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";
import { ToastContainer, toast } from "react-toastify";

// Styling
import "react-toastify/dist/ReactToastify.css";
import "./copybuddy.scss";
// Images
import logo from "./copybuddy_logo_white.svg";
import search_icon from "./search_icon_white.svg";
import right_panel from "./hero_section_art_secondpanel.png";
import floating_box from "./hero_section_art_floating_box.svg";
import arrow_right from "./categories_section_inner_copy_categories_category_arrow_right_black.svg";
import long_arrow_right from "./arrow_white.svg";
import dropdown_button from "./dropdown_button.svg";

import copy_icon from "./copy_icon.svg";
import copybuddy_spinner from "./copybuddy_spinner2.gif";

function App() {
  const [custom_input, setInput] = useState("XYZ");
  let [loading_copies, setCopies] = useState(false);
  const [search_input_initial, setSearchInput] = useState("");
  let search_input_final = search_input_initial.toLowerCase();
  const [loadMore, setloadMore] = useState("2");

  const notify = () =>
    toast.success("Copied to clipboard", {
      pauseOnHover: false,
      autoClose: 3000,
    });

  const [data, setData] = useState({});

  useEffect(() => {
    Tabletop.init({
      key: "1I2oOEzY3Anpra-QAdlWpkcCciZi8XE4q_cponlal8PQ",
      simpleSheet: true,
    }).then(function (data) {
      setData(data);
      setCopies(true);
    });
  }, []);

  const copy = Array.from(data);

  function handleChange_oncustomiseinput(e) {
    setInput(e.target.value);
  }

  function handleChange_onsearch(s) {
    setSearchInput(s.target.value);
  }

  function handleChange_onsearch_initial(s) {
    setSearchInput(s.target.value);
  }

  function handleClick_onsearch(s) {
    setSearchInput(s);
    document.getElementById("copy_area").scrollIntoView("copy_area");
  }

  function handle_loadMore() {
    setloadMore(loadMore + 1);
    let dropdown_button = document.getElementById("dropdown_button");
    dropdown_button.classList.toggle("rotate_180");
    console.log("Got it");
  }

  const copies = copy
    .filter((el) => {
      if (search_input_final === null) {
        return copy;
      } else if (
        el.copy.toLowerCase().includes(search_input_final) ||
        el.scenario.toLowerCase().includes(search_input_final) ||
        el.tone_of_voice.toLowerCase().includes(search_input_final)
      ) {
        return copy;
      }
      return false;
    })
    .slice(0, loadMore)
    .map((el) => {
      return (
        <div className="customisation_section_inner_copycards_card" key={el.id}>
          <div className="">
            {el.copy
              .replace("XYZ", custom_input)
              .replace("XYZ", custom_input)
              .replace("XYZ", custom_input)}
          </div>
          <div
            className=""
            onClick={() => {
              navigator.clipboard.writeText(
                el.copy
                  .replace("XYZ", custom_input)
                  .replace("XYZ", custom_input)
                  .replace("XYZ", custom_input)
              );
              notify();
            }}
          >
            <img src={copy_icon} className="copy_icon" alt="copy_icon"></img>
          </div>
          <div className="">{el.scenario}</div>
          <div className="">{el.tone_of_voice}</div>
        </div>
      );
    });

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
              {/* <a href="/all" rel="noreferrer"> */}
              <div className="hero_section_art_firstpanel_searchbox">
                <input
                  className="hero_section_art_firstpanel_searchbox_input"
                  placeholder="What are you working on?"
                  style={{ border: "none" }}
                  onChange={(e) => handleChange_onsearch_initial(e)}
                  name="search_input"
                ></input>
                <a href="#copy_area">
                  <div className="hero_section_art_firstpanel_searchbox_button">
                    <img
                      src={search_icon}
                      className="hero_section_art_firstpanel_searchbox_button_search_icon"
                      alt="search_icon"
                    ></img>
                  </div>
                </a>
                <div className="hero_section_art_firstpanel_designelement">
                  <img src={floating_box} alt="floating_box"></img>
                </div>
              </div>
              {/* </a> */}
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

      <div id="categories" className="categories_section">
        <div className="categories_section_inner">
          <h4>Explore Copy Categories</h4>
          <p>
            Copy categories? Basically places where you might need good UX copy
          </p>
          <div className="categories_section_inner_copy_categories">
            <div
              className="categories_section_inner_copy_categories_category"
              onClick={() => {
                handleClick_onsearch("Onboarding");
              }}
            >
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
            <div
              className="categories_section_inner_copy_categories_category"
              onClick={() => {
                handleClick_onsearch("Authentication");
              }}
            >
              <div className="categories_section_inner_copy_categories_category_title">
                <p>Copy for</p>
                <p>Authentication</p>
              </div>
              <div className="categories_section_inner_copy_categories_category_arrow">
                <img
                  src={arrow_right}
                  className="arrow_right"
                  alt="arrow_right"
                ></img>
              </div>
            </div>
            <div
              className="categories_section_inner_copy_categories_category"
              onClick={() => {
                handleClick_onsearch("Empty state");
              }}
            >
              <div className="categories_section_inner_copy_categories_category_title">
                <p>Copy for</p>
                <p>Empty States</p>
              </div>
              <div className="categories_section_inner_copy_categories_category_arrow">
                <img
                  src={arrow_right}
                  className="arrow_right"
                  alt="arrow_right"
                ></img>
              </div>
            </div>
            <div
              className="categories_section_inner_copy_categories_category"
              onClick={() => {
                handleClick_onsearch("Errors");
              }}
            >
              <div className="categories_section_inner_copy_categories_category_title">
                <p>Copy for</p>
                <p>Errors and Warnings</p>
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
              href="#copy_area"
              className="categories_section_inner_button_box_button"
            >
              View all
            </a>
          </div>
        </div>
      </div>

      <div className="">
        {/* <div className="navbar_alt">
        <div className="">
          <a href="/" rel="noreferrer">
            <div className="">
              <img src={logo} className="" alt=""></img>
            </div>
          </a>
        </div>
      </div> */}

        <div id="copy_area" className="customisation_section">
          <div className="customisation_section_inner make_sticky">
            <div className="customisation_section_inner_introductiontext">
              <p>Search for any copy you need</p>
              <input
                className="hero_section_art_firstpanel_searchbox_input customise_input primary_bar"
                placeholder="Search copy/scenario"
                style={{ border: "none" }}
                name="search_input"
                onChange={(e) => handleChange_onsearch(e)}
                value={search_input_initial}
              ></input>
              <p style={{ marginBottom: "10px" }}>...then make it custom </p>
              <input
                className="custom-pt-5 hero_section_art_firstpanel_searchbox_input customise_input"
                placeholder="Insert product/module name here"
                style={{ border: "none" }}
                name="customise_input"
                onChange={handleChange_oncustomiseinput}
              ></input>
              <div></div>
            </div>

            <ToastContainer />

            <div className="customisation_section_inner_copycards">
              {loading_copies === false ? (
                <div className="center_image">
                  <div>
                    <p>Your list of copies should appear here. Loading...</p>
                  </div>
                  <div>
                    <img
                      src={copybuddy_spinner}
                      alt="copybuddy_spinner"
                      className="copybuddy_spinner"
                    ></img>
                  </div>
                </div>
              ) : (
                <div>
                  {copies}
                  <div className="categories_section_inner_button_box">
                    <a
                      href="#copy_area"
                      className="categories_section_inner_button_box_button no_borders"
                      onClick={handle_loadMore}
                    >
                      <img
                        className="dropdown_button"
                        alt="dropdown_button"
                        id="dropdown_button"
                        src={dropdown_button}
                      ></img>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="support_section">
          <div className="support_section_innerbox">
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/intent/tweet?text=Hi%20%40peterondesign%2C%20I%27d%20like%20to%20contribute%20to%20the%20CopyBuddy%20project"
            >
              <div className="support_section_innerbox_card">
                <div>
                  <span>
                    Tweet me
                    <a
                      href="https://twitter.com/intent/tweet?text=Hi%20%40peterondesign%2C%20I%27d%20like%20to%20contribute%20to%20the%20CopyBuddy%20project"
                      className="link custom"
                    >
                      (@peterondesign){" "}
                    </a>
                    if you’d like to contribute to this project
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
                    </a>
                    to show your support{" "}
                  </span>
                  <a
                    className="link custom"
                    href="https://www.buymeacoffee.com/peterdesign"
                  >
                    Buy me a coffee{" "}
                  </a>
                  <a
                    className="link custom"
                    href="https://barter.me/peterondesign"
                  >
                    Barter
                  </a>
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
        <div className="email_section">
          <p>Stay up to date with our little tool</p>
          <div>
            <form id="sib-form" method="POST" action="https://f386e063.sibforms.com/serve/MUIEABqokMK_klYLK_Zv3esLQUfeaA_I20g5-zPg-MRQd8Lp5OwCoRxUUhVzYwCCiy0XoD52108k60fnMZwECdlx0_evAyx1a9ksgoo3qopMr3UOdJPSnHi1qfswlTszRG791Y7kOvKZbm1MYLRqOlospmpj9ibTPk9ovjyjUCGsdw-LnQuLuvDg5Vso4Iylrg1hya6DKskkOSj_" data-type="subscription" style={{textAlign: "center"}}>
              <input
                className="hero_section_art_firstpanel_searchbox_input"
                placeholder="Enter email address"
                style={{ border: "none" }} type="text" id="EMAIL" name="EMAIL" autocomplete="off" data-required="true" required
              ></input>
              <input type="submit" class="submit_button" form="sib-form" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";

// import all_copies from "./copybuddy_allcopies.js";
// import logo from "./copybuddy_logo_white.svg";
import long_arrow_right from "./arrow_white.svg";
import copy_icon from "./copy_icon.svg";
import copybuddy_spinner from "./copybuddy_spinner2.gif";
import "./copybuddy.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [custom_input, setInput] = useState("XYZ");
  let [loading_copies, setCopies] = useState(false);
  const [search_input_initial, setSearchInput] = useState("");
  let search_input_final = search_input_initial.toLowerCase();


  const notify = () =>
    toast.success("Copied to clipboard", {
      pauseOnHover: false,
      autoClose: 3000,
    });

  // const [only10, show10] = useState("show1")

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

  const copies = copy
    .filter((el) => {
      if (search_input_final === null) {
        return copy;
      } else if (
        el.copy.toLowerCase().includes(search_input_final) ||
        el.scenario.toLowerCase().includes(search_input_final)
      ) {
        return copy;
      }
      return "";
    })
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
      {/* <div className="navbar_alt">
        <div className="">
          <a href="/" rel="noreferrer">
            <div className="">
              <img src={logo} className="" alt=""></img>
            </div>
          </a>
        </div>
      </div> */}

      
      <div className="customisation_section">
        <div className="customisation_section_inner make_sticky">
          <div className="customisation_section_inner_introductiontext">
            <p>Search for any copy you need</p>
            <input
              className="hero_section_art_firstpanel_searchbox_input customise_input primary_bar"
              placeholder="Search copy/scenario"
              style={{ border: "none" }}
              name="search_input"
              onChange={(e) => handleChange_onsearch(e)}
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
              <div>{copies}</div>
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
            href="https://twitter.com/intent/tweet?text=Hi%20%40peterondesign%2C%20I%20have%20an%20idea%20for%20CopyBuddy.%0A%0AHere%20it%20is%3A%20"
          >
            <div className="support_section_innerbox_card">
              <div>
                <span>Can’t find the copy you are looking for?</span>
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

      <div className="customisation_section">
        <div className="customisation_section_inner">
          <div className="customisation_section_inner_introductiontext">
            <p>Search, then make it custom</p>
            <input
              className="hero_section_art_firstpanel_searchbox_input customise_input primary_bar"
              placeholder="Search copy/scenario"
              style={{ border: "none" }}
              name="search_input"
              onChange={handleChange_onsearch}
            ></input>
            <div>
              <input
                className="custom-pt-5 hero_section_art_firstpanel_searchbox_input customise_input"
                placeholder="Insert product/module name here"
                style={{ border: "none" }}
                name="customise_input"
                onChange={handleChange_oncustomiseinput}
              ></input>
            </div>
          </div>

          <ToastContainer />

          <div className="customisation_section_inner_copycards">
            {copy.map((el) => (
              <div
                className="customisation_section_inner_copycards_card"
                key={el.id}
              >
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
                  <img
                    src={copy_icon}
                    className="copy_icon"
                    alt="copy_icon"
                  ></img>
                </div>
                <div className="">{el.scenario}</div>
                <div className="">{el.tone_of_voice}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Tabletop from "tabletop";

// import all_copies from "./copybuddy_allcopies.js";
// import logo from "./copybuddy_logo_white.svg";
import long_arrow_right from "./arrow_white.svg";
import copy_icon from "./copy_icon.svg";
import "./copybuddy.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [custom_input, setInput] = useState("XYZ");
  const [search_input, setSearchInput] = useState("");

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
    });
  }, []);
  const copy = Array.from(data);

  function handleChange_oncustomiseinput(e) {
    setInput(e.target.value);
  }

  function handleChange_onsearch(s) {
    setSearchInput(s.target.value);
  }

  // if (search_input.length > 0) {
  //   // copy.map(function (el) {
  //   //   let matched_copy = el.copy.includes(search_input)
  //   //   let test = matched_copy;
  //   //   return console.log(test);
  //   // });
  //   const arr = [{ a: "b" }];
  //   console.log(arr.some((item) => item.a === "b"))
  // }

  // if (search_input.length > 0) {
  //   data.map(function (el) {
  //     return console.log(el.data)
  //   });
  // }

  // if (search_input.length > 0) {
  //   // the code you're looking for
  //   var needle = search_input.toLowerCase();
  //   // iterate over each element in the array
  //   for (var i = 0; i < copy.length; i++) {
  //     // look for the entry with a matching `code` value
  //     let matched_output = copy[i].copy.toLowerCase().includes(needle);
  //     if (matched_output ===   true) {
  //       return copy;
  //       // console.log("Got it!");
  //       // obj[i].name is the matched result
  //     }
  //   }
  // }

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
        <div className="customisation_section_inner">
          <div className="customisation_section_inner_introductiontext">
            <p>Search for any copy you need</p>
            <p id="demo">Test</p>
            <input
              className="hero_section_art_firstpanel_searchbox_input customise_input primary_bar"
              placeholder="Search copy/scenario"
              style={{ border: "none" }}
              name="search_input"
              onChange={handleChange_onsearch}
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

import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import "./HomeComponent.css";
import meLight from "../../assests/images/me-light.webp";

function Home(props) {
  return (
    <div>
      <div className="icon_maker">
        <div className="toasty-character">
          <div className="fade_in">
            <picture style={{ display: "contents" }}>
              <source srcSet={meLight} type="image/webp" />
              <img src={meLight} alt="Flowers" className="image_value" />
            </picture>
          </div>
        </div>
      </div>
      <div className="main_context" style={{ pointerEvents: "auto" }}>
        <div
          className="sub_main_context"
          style={{ opacity: 1, transform: "scaleX(1) translateX(0px)" }}
        >
          <div
            className="sub_title"
            style={{ width: "175px", minHeight: "87px" }}
          >
            <div className="sub_title_2" style={{ top: "-10px" }}>
              <svg
                width="65"
                height="78"
                viewBox="0 0 95 95"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 0C0 0 24.8936 38.9937 47 58C57.5966 67.1106 73.8292 77.0249 84.1762 83C90.03 86.3804 94 95 94 95L94.5 36C94.5 36 88.5727 43.1045 81 41.4825C70.8874 39.3165 56.9488 35.8549 47 31.5C26.7586 22.6397 0 0 0 0Z"
                  fill="white"
                />
              </svg>
            </div>
            <div
              className="sub_title_3"
              style={{ opacity: 1, transform: "scaleX(1) translateX(0px)" }}
            >
              <div className="sub_title_4">
                <button
                  className="sub_title_5 sub_title_6"
                  style={{ color: "rgb(230, 0, 103)" }}
                >
                  Hello! Thanks for stopping by!
                </button>
              </div>
            </div>
          </div>
          <div className="sub_title_7">
            <div className="sub_title_8">
              <svg
                width="85"
                height="78"
                viewBox="0 0 95 95"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 0C0 0 24.8936 38.9937 47 58C57.5966 67.1106 73.8292 77.0249 84.1762 83C90.03 86.3804 94 95 94 95L94.5 36C94.5 36 88.5727 43.1045 81 41.4825C70.8874 39.3165 56.9488 35.8549 47 31.5C26.7586 22.6397 0 0 0 0Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;

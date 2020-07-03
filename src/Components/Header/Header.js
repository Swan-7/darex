import React from "react";
import Navbar from "../NavBar/Navbar";
import "./Header.css";
// import "pure-react-carousel/dist/react-carousel.es.css";

import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
  DotGroup,
  Dot,
} from "pure-react-carousel";
export default function Header() {
  const dotValue = [
    {
      key: 1,
    },
    {
      key: 2,
    },
    {
      key: 2,
    },
  ];
  return (
    <header style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div id="carousel-container">
        <CarouselProvider
          // isPlaying
          lockOnWindowScroll
          naturalSlideWidth={400}
          naturalSlideHeight={800}
          totalSlides={3}
          infinite
          className="carousel-container"
        >
          <Slider style={{}} className="carousel-provider">
            <Slide
              style={{ height: "auto" }}
              className="carousel-slide "
              innerClassName="slideInner___2mfX9"
              index={0}
            >
              {/* <img src={require("../../assets/doctor_patient.png")} /> */}
              <img
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "100%",
                  height: "auto",
                  position: "relative",
                  borderRadius: 10,
                  borderWidth: 0,
                }}
                className="slider-image"
                src={require("../../assets/doctor_patient.png")}
              />
              {/* <div className="img-overlay"></div> */}
              <div
                className="welcome-darex-holder"
                // style={{
                //   position: "absolute",
                //   color: "#00afef",
                //   marginTop: "25%",
                //   marginLeft: "25%",
                //   top: "0%",
                // }}
              >
                <span className="welcome-text">Welcome to</span>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className="darex-text">Dare X</span>
                  <span className="moto-text">One Person One Clinic</span>
                </div>
              </div>
            </Slide>
            <Slide style={{}} className="carousel-slide" index={0}>
              {/* <img src={require("../../assets/doctor_patient.png")} /> */}
              <Image
                isBgImage
                style={{
                  // display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "100%",
                  height: "auto",
                }}
                className="slider-image"
                src={require("../../assets/doctor_patient.png")}
              />
              <div style={{ position: "absolute" }}>
                <span>Welcome to</span>
                <div>
                  <span>Dare X</span>
                  <span>One Person One Clinic 2</span>
                </div>
              </div>
            </Slide>
            <Slide style={{}} className="carousel-slide" index={0}>
              {/* <img src={require("../../assets/doctor_patient.png")} /> */}
              <Image
                isBgImage
                style={{
                  // display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "100%",
                  height: "auto",
                }}
                className="slider-image"
                src={require("../../assets/doctor_patient.png")}
              />
              <div style={{ position: "absolute" }}>
                <span>Welcome to</span>
                <div>
                  <span>Dare X</span>
                  <span>One Person One Clinic 3</span>
                </div>
              </div>
            </Slide>
          </Slider>
          <div className="dot-group">
            <DotGroup
              className="dot-group"
              renderDots={() =>
                dotValue.map((value, index) => {
                  return (
                    // <div style={{ display: "flex", flexDirection: "row" }}>
                    <Dot className="dot-style" slide={index} />
                  );
                })
              }
            />
          </div>

          <div className="button_container">
            <ButtonBack disabled={false} className="back-button button-style">
              <ChevronLeft
                style={{ fontSize: 20 }}
                color="#005194"
                className=".MuiIcon-root chevron-style"
              />
            </ButtonBack>
            <ButtonNext disabled={false} className=" next-button button-style">
              <ChevronRight
                style={{ fontSize: 20 }}
                color="#005194"
                className="chevron-style"
              />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </header>
  );
}

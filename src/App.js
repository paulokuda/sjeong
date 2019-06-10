import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './App.css';

function App() {
  return (
    <>
      <ParallaxProvider>
        <Parallax>
          <div className="landing-page">
            <div className="landing-content-container">
              <div className="nav-container">
                <div>[INFO]</div>
                <div>Email: [email@email.com]</div>
                <div>2019</div>
              </div>
              <div className="name-banner banner-text">
                <div>FULL NAME</div>
                <div>DESIGNER</div>
              </div>
              <div className="location-banner banner-text">
                <div>BK, NY</div>
                <div>c 2019</div>
              </div>
            </div>
            <div className="banner-text"><div>LET'S COLLAB</div><div>[SAY HELLO]</div></div>
          </div>
        </Parallax>
        <Parallax y={["550px", "-1850px"]} styleOuter={{ width: "50%", position: "absolute", top: "450px" }}>
          <div className="about-me-panel">
            <div className="about-me__headers">
              <div>[ABOUT]</div>
              <div>2019</div>
            </div>
            <div className="about-me__picture" />
            <div className="about-me__text-section">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div className="about-me__text-section">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <div className="about-me__text-section">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          </div>
        </Parallax>
      </ParallaxProvider>
      <div style={{ color: "white", position: "fixed", backgroundColor: "black", height: "100%", width: "100%", top: 0, zIndex: -1, }}>
        <div>FACEBOOK</div>
        <div>SAMSUNG</div>
        <div>GLOBO</div>
        <div>REUTERS</div>
        <div>FACEBOOK</div>
        <div>SAMSUNG</div>
        <div>GLOBO</div>
        <div>REUTERS</div>
        <div>FACEBOOK</div>
        <div>SAMSUNG</div>
        <div>GLOBO</div>
        <div>REUTERS</div>
        <div>FACEBOOK</div>
        <div>SAMSUNG</div>
        <div>GLOBO</div>
        <div>REUTERS</div>
        <div>FACEBOOK</div>
        <div>SAMSUNG</div>
        <div>GLOBO</div>
        <div>REUTERS</div>
        <div>FACEBOOK</div>
        <div>SAMSUNG</div>
        <div>GLOBO</div>
        <div>REUTERS</div>
        <div>FACEBOOK</div>
        <div>SAMSUNG</div>
        <div>GLOBO</div>
        <div>REUTERS</div>
      </div>
    </>
  );
}

export default App;

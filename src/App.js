import React, { useEffect, useRef, useState } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './App.css';

function App() {
  const [isLandingInView, setLandingInView] = useState(true);
  const landingWrapperRef = useRef(null);
  const clientLanding = useRef(null);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (isElementOutOfViewport(landingWrapperRef.current) && isLandingInView) {
        setLandingInView(false);
      } else if (!isElementOutOfViewport(landingWrapperRef.current) && !isLandingInView) {
        setLandingInView(true);
      }
    })
  });
  
  const isElementOutOfViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return ((rect.x + rect.width) < 0 
             || (rect.y + rect.height) < 0
             || (rect.x > window.innerWidth || rect.y > window.innerHeight)
    );
  }
  
  return (
    <>
      <ParallaxProvider>
        <Parallax>
          <div ref={landingWrapperRef} className="landing-wrapper">
            <div className="landing-page">
              <div className="landing-content-container">
                <div className="nav-container">
                  <div>INFO</div>
                  <div className="nav-center-block">
                    <div>STEPH JEONG PORTFOLIO</div>
                    <div>&#169;2019 ALL RIGHTS RESERVED</div>
                  </div>
                  <div>(SCROLL) &#8595;</div>
                </div>
                <div className="name-banner banner-text">
                  <div>STEPH JEONG</div>
                  <div>DESIGNER</div>
                  <div>BK, NY &#169;2019</div>
                </div>
              </div>
              <div className="collab-blurb banner-text"><div>LET’S COLLAB</div><div className="collab-blurb-hello">[SAY HELLO]</div></div>
              <div className="about-me-footer">
                <div className="about-me-footer__section">
                  <div>EMAIL</div>
                  <div>[JEONGSTEPH@GMAIL.COM]</div>
                </div>
                <div className="about-me-footer__section">
                  <div>TWITTER</div>
                  <div>[@JEONGSTEPH]</div>
                </div>
                <div className="about-me-footer__section">
                  <div>INSTAGRAM</div>
                  <div>[@JEONGSTEPH]</div>
                </div>
                <div className="about-me-footer__section">
                  <div>DRIBBBLE</div>
                  <div>[@JEONGSTEPH]</div>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
        <Parallax y={["550px", "-1850px"]} styleOuter={{ width: "50vw", position: "absolute", top: "60vh", right: 0 }}>
          <div className="about-me-panel">
            <div className="about-me__about">&#8627; ABOUT </div>
            <div className="about-me__picture"/>
            <div className="about-me__text-section">
              My name is Steph Jeong, and I’m a digital designer who specializes in product, but dabbles in all things creative. I was born in Seoul, Korea, where Gangnam Style was based in. In my puberty days, my family moved to a small town in Georgia until I went off to Carnegie Mellon University to study communication design. Now, I’m happily living in Brooklyn, NY.
              <br></br>
              <br></br>
              Currently, I’m a senior designer at Ueno, where I get to work with some amazing people. Working with other people brings the best out of me, so if you’re a nice person looking for someone to collaborate with, don’t hesitate to <span className="black-text">[Say Hi]</span>. I also just like to make new friends, so feel free to follow me on <span className="black-text">[Twitter]</span> or <span className="black-text">[Instagram]</span> where you’ll find some high-quality curation of dumb shit only. 
              <br></br>
              <br></br>
              When I’m not designing, I love to cook for friends, stalk other people’s cats on instagram, and be a blanket burrito. Sometimes, I also write to share my knowledge and thoughts. If you ever want to learn how to be more sketchy, check out my <span className="black-text">[Article]</span>.  Thanks for stopping by!
              </div>
          </div>
        </Parallax>
      </ParallaxProvider>
      <div style={{ position: "relative" }}>
        <ParallaxProvider>
          <div ref={clientLanding} className="client-landing" style={{ position: isLandingInView ? "fixed" : "relative" }}>
            <div>CLIENTS &#8595;</div>
            <div>FACEBOOK</div>
            <div>Samsung</div>
            <div>Globo</div>
            <div>Reuters</div>
            <div>POND5</div>
            <div>VISA</div>
            <div>Redbull</div>
            <div>Sotheby's</div>
            <div>Dorsia</div>
            <div>Bluevine</div>
            <div>Credit Karma</div>
            <div>Fetch</div>
            <div>&You</div>
            <div className="client-list-message-me">[MESSAGE ME]</div>
          </div>
          <Parallax y={["550px", "-530px"]} styleOuter={{ width: "30vw", height: "40vw", position: "absolute", top: "65vw", right: "7.5vw" }} styleInner={{ background: "#dbe2e5" }}>
            <div className="client-project-card client-project-card__04">
              <div className="fourth-project-image" />
              <div className="client-project-number">&#8627; [project 4]</div>
            </div>
          </Parallax>
          <Parallax y={["1850px", "-1530px"]} styleOuter={{ width: "30vw", height: "40vw", position: "absolute", top: "5vw", left: "5vw" }} styleInner={{ background: "#dbe2e5" }}>
            <div className="client-project-card client-project-card__01">
              <div className="first-project-image" />
              <div className="client-project-number">&#8627; [project 1]</div>
            </div>
          </Parallax>
          <Parallax y={["700px", "-1030px"]} styleOuter={{ width: "30vw", height: "40vw", position: "absolute", top: "40vw", left: "-5vw" }} styleInner={{ background: "#dbe2e5" }}>
            <div className="client-project-card client-project-card__03">
              <div className="third-project-image" />
              <div className="client-project-number">&#8627; [project 3]</div>
            </div>
          </Parallax>
          <Parallax y={["700px", "-1030px"]} styleOuter={{ width: "30vw", height: "40vw", position: "absolute", top: "25vw", right: "2.5vw" }} styleInner={{ background: "#dbe2e5" }}>
            <div className="client-project-card client-project-card__02">
              <div className="second-project-image" />
              <div className="client-project-number">&#8627; [project 2]</div>
            </div>
          </Parallax>
          <Parallax y={["700px", "-1030px"]} styleOuter={{ width: "30vw", height: "40vw", position: "absolute", top: "90vw", left: "7.5vw" }} styleInner={{ background: "#dbe2e5" }}>
            <div className="client-project-card client-project-card__02">
              <div className="fifth-project-image" />
              <div className="client-project-number">&#8627; [project 5]</div>
            </div>
          </Parallax>
        </ParallaxProvider>
      </div>
    </>
  );
}

export default App;

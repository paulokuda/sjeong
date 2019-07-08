import React, { useEffect, useRef, useState } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import GlitchEffect from 'react-glitch-effect';
import './App.css';
import FlashingText from './FlashingText';
import firstPhotoUrl from "./first-project.png";

function Landing(props) {
  const [isLandingInView, setLandingInView] = useState(true);
  const [showTwitterCard, setShowTwitterCard] = useState(false);
  const [showInstagramBackground, setShowInstagramBackground] = useState(false);
  const [slideInLanding, setSlideInLanding] = useState(false);
  const [showFaceMask, setShowFaceMask] = useState(false);
  const [glitchIndex, setShowGlitchIndex] = useState(-1);
  const landingWrapperRef = useRef(null);

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }, []);
  
  useEffect(() => {
    setSlideInLanding(true);
    
    document.addEventListener("scroll", () => {
      if (isElementOutOfViewport(landingWrapperRef.current) && isLandingInView) {
        setLandingInView(false);
      } else if (!isElementOutOfViewport(landingWrapperRef.current) && !isLandingInView) {
        setLandingInView(true);
      }
    })
  });
  
  const isElementOutOfViewport = (el) => {
    if (el == null) { return; }
    const rect = el.getBoundingClientRect();
    return ((rect.x + rect.width) < 0 
             || (rect.y + rect.height) < 0
             || (rect.x > window.innerWidth || rect.y > window.innerHeight)
    );
  }

  const getTopValue = () => {
    if (props.isMobileScreen) {
      return "38vh";
    }
    if (!slideInLanding) {
      return "70vh";  
    }
    return "40vh";
  }
  
  return (
    <div className={`landing-body ${slideInLanding ? "landing-body__visible" : ""}`}>
      {showTwitterCard ? (
        <div className="twitter-card">
          <div>
            <span className="black-text">I just realized a </span>dog <span className="black-text">is called a </span>dog <span className="black-text">because the word looks like a </span>dog.
          </div>
          <div className="twitter-card__footer">
            <div>- Me</div>
            <div className="black-text">March 8, 2015</div>
          </div>
        </div>
      ) : null}
      <ParallaxProvider>
        <Parallax>
            <div ref={landingWrapperRef} className="landing-wrapper">
              <div className={`landing-page ${showInstagramBackground ? "landing-page__ig-bg" : ""}`}>
                <div className={`${showInstagramBackground ? "landing-page__ig-bg-one" : ""}`} />
                <div className={`${showInstagramBackground ? "landing-page__ig-bg-two" : ""}`} />
                <div className={`${showInstagramBackground ? "landing-page__ig-bg-three" : ""}`} />
                <div className="landing-content-container">
                  <div className="nav-container">
                    <div className="nav-block">INFO</div>
                    <div className="nav-block nav-center-block">
                      <div>STEPH JEONG PORTFOLIO</div>
                      <div>&#169;2019 ALL RIGHTS RESERVED</div>
                    </div>
                    <div className="nav-block nav-right-block">
                      <div>(SCROLL) &#8595;</div>
                    </div>
                  </div>
                  <div className="name-banner banner-text">
                    <div>STEPH JEONG</div>
                    <div>DESIGNER</div>
                    <div>BK, NY &#169;2019</div>
                  </div>
                </div>
                <div className="collab-blurb banner-text"><div>LET’S COLLAB</div><a href="mailto: jeongsteph@gmail.com"><FlashingText className="collab-blurb-hello">[SAY HELLO]</FlashingText></a></div>
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
        <Parallax className="about-me-panel__paralax" y={["550px", "-1850px"]} styleOuter={{ width: props.isMobileScreen ? "92vw" : "50vw", position: "absolute", top: getTopValue(), right: 0 }}>
          <div className="about-me-panel">
            <div className="about-me__about">&#8627; ABOUT </div>
            <div className="about-me__picture" onMouseEnter={() => setShowFaceMask(true)} onMouseLeave={() => setShowFaceMask(false)}>
              <div className={`about-me__picture-mask ${showFaceMask ? "about-me__picture-mask_visible" : ""}`} />
            </div>
            <div className="about-me__text-section">
              My name is Steph Jeong, and I’m a digital designer who specializes in product, but dabbles in all things creative. I was born in Seoul, Korea, where Gangnam Style was based in. In my puberty days, my family moved to a small town in Georgia until I went off to Carnegie Mellon University to study communication design. Now, I’m happily living in Brooklyn, NY.
              <br></br>
              <br></br>
              Currently, I’m a senior designer at Ueno, where I get to work with some amazing people. Working with other people brings the best out of me, so if you’re a nice person looking for someone to collaborate with, don’t hesitate to <span className="black-text">[Say Hi]</span>. I also just like to make new friends, so feel free to follow me on <span className="black-text" onMouseEnter={() => setShowTwitterCard(true)} onMouseLeave={() => setShowTwitterCard(false)}>[Twitter]</span> or <span className="black-text" onMouseEnter={() => setShowInstagramBackground(true)} onMouseLeave={() => setShowInstagramBackground(false)}>[Instagram]</span> where you’ll find some high-quality curation of dumb shit only. 
              <br></br>
              <br></br>
              When I’m not designing, I love to cook for friends, stalk other people’s cats on instagram, and be a blanket burrito. Sometimes, I also write to share my knowledge and thoughts. If you ever want to learn how to be more sketchy, check out my <span className="black-text">[Article]</span>.  Thanks for stopping by!
              </div>
          </div>
        </Parallax>
      </ParallaxProvider>
      <div className={`client-wrapper ${slideInLanding ? "client-wrapper__after" : ""}`}>
        <ParallaxProvider>
          <div className="client-landing" style={{ position: isLandingInView ? "fixed" : "relative" }}>
            <div className="nav-container client-wrapper-nav">
              <div className="nav-block">CLIENTS</div>
              <div className="nav-block nav-center-block">
                <div>STEPH JEONG PORTFOLIO</div>
                <div>&#169;2019 ALL RIGHTS RESERVED</div>
              </div>
              <div className="nav-block nav-right-block">
                &#169;2019
              </div>
            </div>
            <div className="client-landing__projects-text">Projects (2016 - 2019)</div>
            <div className="client-landing__item">CLIENTS &#8595;</div>
            <div className="client-landing__item">FACEBOOK</div>
            <div className="client-landing__item">Samsung</div>
            <div className="client-landing__item">Globo</div>
            <div className="client-landing__item">Reuters</div>
            <div className="client-landing__item">POND5</div>
            <div className="client-landing__item">VISA</div>
            <div className="client-landing__item">Redbull</div>
            <div className="client-landing__item">Sotheby's</div>
            <div className="client-landing__item">Dorsia</div>
            <div className="client-landing__item">Bluevine</div>
            <div className="client-landing__item">Credit Karma</div>
            <div className="client-landing__item">Fetch</div>
            <div className="client-landing__item">&You</div>
            <div className="client-landing__item client-list-message-me"><FlashingText>[MESSAGE ME]</FlashingText></div>
          </div>
          <div style={{ height: props.isMobileScreen ? "1150px" : "auto" }}>
            {props.displayedProjects.map((project, index) => (
              <Parallax key={`project-${index}`} y={props.isMobileScreen ? project.mobileY : project.y} styleOuter={props.isMobileScreen ? project.mobileStyleOuter : project.styleOuter } styleInner={project.styleInner}>
                <div onMouseEnter={() => setShowGlitchIndex(index)} onMouseLeave={() => setShowGlitchIndex(-1)} className={`client-project-card ${project.className}`} onClick={props.toggleNdaViewCallback}>
                    {index === glitchIndex ? (
                      <div className="project-card-glitch-container">
                        <GlitchEffect>
                          <img src={firstPhotoUrl} />
                        </GlitchEffect>
                        </div>
                    ) : (
                      <img src={firstPhotoUrl} className={`${project.imageClassName} project-image-border`} />
                    )}
                  <div className="client-project-number">&#8627; [project {project.projectNumber}]</div>
                </div>
            </Parallax>
            ))}
          </div>
        </ParallaxProvider>
      </div>
    </div>
  );
}

export default Landing;

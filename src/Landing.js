import React, { useEffect, useRef, useState } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './App.css';
import FlashingText from './FlashingText';

function Landing(props) {
  const [isLandingInView, setLandingInView] = useState(true);
  const [showTwitterCard, setShowTwitterCard] = useState(false);
  const [showInstagramBackground, setShowInstagramBackground] = useState(false);
  const [slideInLanding, setSlideInLanding] = useState(false);
  const [showFaceMask, setShowFaceMask] = useState(false);
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
  }, [isLandingInView]);

  const isElementOutOfViewport = (el) => {
    if (el == null) { return; }
    const rect = el.getBoundingClientRect();
    return ((rect.x + rect.width) < 0
             || (rect.y + rect.height) < 0
             || (rect.x > window.innerWidth || rect.y > window.innerHeight)
    );
  }

  const parallaxProjects = () => {
    return props.displayedProjects.map((project, index) => (
      <Parallax key={`project-${index}`} y={props.isMobileScreen ? project.mobileY : project.y} styleOuter={props.isMobileScreen ? project.mobileStyleOuter : project.styleOuter } styleInner={project.styleInner}>
          <div className={`client-project-card ${project.className}`} onClick={props.toggleNdaViewCallback}>
            <div className={`project-card-glitch-container ${project.imageClassName}`} />
            <div className="client-project-number">&#8627; [project {project.projectNumber}]</div>
          </div>
      </Parallax>
    ));
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
                <div className="collab-blurb banner-text"><div>LET’S COLLAB</div><a href="mailto:jeongsteph@gmail.com"><FlashingText className="collab-blurb-hello">[SAY HELLO]</FlashingText></a></div>
                <div className="about-me-footer">
                  <div className="about-me-footer__section">
                    <div>{props.isMobileScreen ? "EM" : "EMAIL"}</div>
                    <div><a href="mailto:jeongsteph@gmail.com">[JEONGSTEPH@GMAIL.COM]</a></div>
                  </div>
                  <div className="about-me-footer__section">
                    <div>{props.isMobileScreen ? "TW" : "TWITTER"}</div>
                    <div><a href="https:/www.twitter.com/jeongsteph" target="_blank" rel="noopener noreferrer">[@JEONGSTEPH]</a></div>
                  </div>
                  <div className="about-me-footer__section">
                    <div>{props.isMobileScreen ? "IG" : "INSTAGRAM"}</div>
                    <div><a href="https:/www.instagram.com/jeongsteph" target="_blank" rel="noopener noreferrer">[@JEONGSTEPH]</a></div>
                  </div>
                  <div className="about-me-footer__section">
                    <div>{props.isMobileScreen ? "DR" : "DRIBBBLE"}</div>
                    <div><a href="https://dribbble.com/jeongsteph" target="_blank" rel="noopener noreferrer">[@JEONGSTEPH]</a></div>
                  </div>
                </div>
              </div>
            </div>
        </Parallax>
        <div style={{ pointerEvents: "none", width: props.isMobileScreen ? "92vw" : "50vw", position: "absolute", top: getTopValue(), right: 0 }}>
          <Parallax y={["550px", "-1850px"]}>
            <div className="about-me-panel">
              <div className="about-me__about">&#8627; ABOUT </div>
              <div className="about-me__picture" onMouseEnter={() => setShowFaceMask(true)} onMouseLeave={() => setShowFaceMask(false)}>
                <div className={`about-me__picture-mask ${showFaceMask ? "about-me__picture-mask_visible" : ""}`} />
              </div>
              <div className="about-me__text-section">
                My name is Steph Jeong, and I’m a digital designer who specializes in product, but dabbles in all things creative. I was born in Seoul, Korea, where Gangnam Style was based in. In my puberty days, my family moved to a small town in Georgia until I went off to Carnegie Mellon University to study communication design. Now, I’m happily living in Brooklyn, NY.
                <br></br>
                <br></br>
                Currently, I’m a senior designer at Ueno, where I get to work with some amazing people. Working with other people brings the best out of me, so if you’re a nice person looking for someone to collaborate with, don’t hesitate to reach out.
                <br></br>
                <br></br>
                When I’m not designing, I love to cook for friends, stalk other people’s cats, and curate my <span className="black-text" style={{ pointerEvents: "auto" }} onMouseEnter={() => setShowTwitterCard(true)} onMouseLeave={() => setShowTwitterCard(false)}><a href="https:/www.instagram.com/jeongsteph" target="_blank" rel="noopener noreferrer">[Twitter]</a></span> or <span className="black-text" style={{ pointerEvents: "auto" }} onMouseEnter={() => setShowInstagramBackground(true)} onMouseLeave={() => setShowInstagramBackground(false)}><a href="https:/www.instagram.com/jeongsteph" target="_blank" rel="noopener noreferrer">[Instagram]</a></span> with dumb shit only. If you’re as funny as me, please say hello. Thanks for stopping by!
                </div>
            </div>
          </Parallax>
        </div>
      </ParallaxProvider>
      <div className={`client-wrapper ${slideInLanding ? "client-wrapper__after" : ""}`}>
        <div className="client-landing" style={{ position: isLandingInView ? "fixed" : "relative" }}>
          <div className="nav-container client-wrapper-nav">
            <div className="nav-block">CLIENTS</div>
            <div className="nav-block nav-center-block">
              <div>STEPH JEONG PORTFOLIO</div>
              <div>&#169;2019 ALL RIGHTS RESERVED</div>
            </div>
            <div className="nav-block nav-right-block">
              (SCROLL) &#8595;
            </div>
          </div>
          <div className="client-landing__projects-text">Projects (2016 - 2019)</div>
          <div className="client-landing__item">CLIENTS&#8595;</div>
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
          <a href="mailto:jeongsteph@gmail.com"><div className="client-landing__item client-list-message-me"><FlashingText disableBlinkingOnHover={true}>[MESSAGE ME]</FlashingText></div></a>
        </div>
        {!props.isMobileScreen && (
          <ParallaxProvider>
            {props.isMobileScreen ? (
              <div className="client-projects-container">
                {parallaxProjects()}
              </div>
            ) : (
              parallaxProjects()
            )}
            {/* {parallaxProjects()} */}
          </ParallaxProvider>
        )}
      </div>
    </div>
  );
}

export default Landing;

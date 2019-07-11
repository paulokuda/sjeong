import React, { useState, useEffect } from 'react';
import  Landing from "./Landing";
import Nda  from "./Nda";
import './App.css';
import './styles.scss';
import firstPhotoUrl from "./first-project.png";
import secondPhotoUrl from "./second-project.png";
import thirdPhotoUrl from "./third-project.png";
import fourthPhotoUrl from "./fourth-project.png";
import fifthPhotoUrl from "./fifth-project.png";

const ALL_PROJECTS = [
  {
    mobileY: ["1250px", "-830px"],
    y: ["550px", "-530px"],
    styleOuter: {
        width: "30vw",
        height: "40vh",
        position: "absolute",
        top: "80vh",
        right: "7.5vw",
    },
    mobileStyleOuter: {
        width: "30vw",
        height: "40vh",
        position: "absolute",
        top: "10vh",
        right: "40vw",
    },
    styleInner: { background: "#dbe2e5" },
    className: "client-project-card__04",
    projectNumber: 4,
    imageClassName: "fourth-project-image",
    imageUrl: fourthPhotoUrl,
  },
  { 
    mobileY: ["850px", "-830px"],
    y: ["1850px", "-1530px"],
    mobileStyleOuter: { width: "30vw", height: "40vw", position: "absolute", top: "85vh", left: "25vw" },
    styleOuter: { width: "30vw", height: "40vw", position: "absolute", top: "5vh", left: "5vw" },
    styleInner: { background: "#dbe2e5" },
    className: "client-project-card__01",
    imageClassName: "first-project-image",
    projectNumber: 1,
    imageUrl: firstPhotoUrl,
  },
  {
    mobileY: ["1700px", "-1130px"],
    y: ["700px", "-1030px"],
    mobileStyleOuter: { width: "30vw", height: "40vw", position: "absolute", top: "55vh", left: "25vw" },
    styleOuter: { width: "30vw", height: "40vw", position: "absolute", top: "60vh", left: "-5vw" },
    styleInner: { background: "#dbe2e5" },
    className: "client-project-card__03",
    imageClassName: "third-project-image",
    projectNumber: 3,
    imageUrl: thirdPhotoUrl,
  },
  {
    mobileY: ["1800px", "-230px"],
    y: ["700px", "-1030px"],
    mobileStyleOuter: { width: "30vw", height: "40vw", position: "absolute", top: "20vh", right: "25vw" },
    styleOuter: { width: "30vw", height: "40vw", position: "absolute", top: "30vh", right: "5vw" },
    styleInner: { background: "#dbe2e5" },
    className: "client-project-card__02",
    imageClassName: "second-project-image",
    projectNumber: 2,
    imageUrl: secondPhotoUrl,
  },
  {
    mobileY: ["2000px", "-830px"],
    y: ["700px", "-530px"],
    mobileStyleOuter: { width: "30vw", height: "100vw", position: "absolute", top: "45vh", left: "25vw" },
    styleOuter: { width: "30vw", height: "40vw", position: "absolute", top: "120vh", left: "7.5vw" },
    styleInner: { background: "#dbe2e5" },
    className: "client-project-card__05",
    imageClassName: "fifth-project-image",
    projectNumber: 5,
    imageUrl: fifthPhotoUrl,
  },
];

const MOBILE_BREAKPOINT = 600;

function App() {
  const [showNda, setShowNda] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  }
  
  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);
  })
  
  const toggleNdaViewCallback = () => setShowNda(!showNda);

  return (
    <>
      <Nda isOpen={showNda} toggleNdaViewCallback={toggleNdaViewCallback} />
      <Landing displayedProjects={ALL_PROJECTS} isMobileScreen={windowWidth < MOBILE_BREAKPOINT} toggleNdaViewCallback={toggleNdaViewCallback} />
    </>
  );
}


export default App;

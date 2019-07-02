import React, { useState, useEffect } from 'react';
import  Landing from "./Landing";
import Nda  from "./Nda";
import './App.css';

const ALL_PROJECTS = [
  {
    mobileY: ["50px", "-530px"],
    y: ["550px", "-530px"],
    styleOuter: {
        width: "30vw",
        height: "40vh",
        position: "absolute",
        top: "40vw",
        right: "7.5vw",
    },
    styleInner: { background: "#dbe2e5" },
    className: "client-project-card__04",
    projectNumber: 4,
    imageClassName: "fourth-project-image",
  },
  {
    mobileY: ["1350px", "-830px"],
    y: ["1850px", "-1530px"],
    styleOuter: { width: "30vw", height: "40vw", position: "absolute", top: "5vh", left: "5vw" },
    styleInner: { background: "#dbe2e5" },
    className: "client-project-card__01",
    imageClassName: "first-project-image",
    projectNumber: 1,
  },
  {
    mobileY: ["1700px", "-1030px"],
    y: ["700px", "-1030px"],
    styleOuter: { width: "30vw", height: "40vw", position: "absolute", top: "40vh", left: "-5vw" },
    styleInner: { background: "#dbe2e5" },
    className: "client-project-card__03",
    imageClassName: "third-project-image",
    projectNumber: 3,
  },
  {
    mobileY: ["1800px", "-130px"],
    y: ["700px", "-1030px"],
    styleOuter: { width: "30vw", height: "40vw", position: "absolute", top: "20vh", right: "7.5vw" },
    styleInner: { background: "#dbe2e5" },
    className: "client-project-card__02",
    imageClassName: "second-project-image",
    projectNumber: 2,
  },
  {
    mobileY: ["2200px", "-830px"],
    y: ["700px", "-1030px"],
    styleOuter: { width: "30vw", height: "40vw", position: "absolute", top: "80vh", right: "7.5vw" },
    styleInner: { background: "#dbe2e5" },
    className: "client-project-card__05",
    imageClassName: "fifth-project-image",
    projectNumber: 5,
  },
];

const MOBILE_BREAKPOINT = 600;

function App() {
  const [showNda, setShowNda] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [displayedProjects, setDisplayedProjects] = useState(ALL_PROJECTS);

  const updateWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  }
  
  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);
  })
  
  const setNdaViewCallback = (projectIndex) => {
    setShowNda(true);
    displayedProjects.splice(projectIndex, 1);
    setDisplayedProjects([...displayedProjects]);
    setTimeout(() => {
      setShowNda(false);
    }, 6500);
  }
  return showNda ? <Nda /> : <Landing displayedProjects={displayedProjects} isMobileScreen={windowWidth < MOBILE_BREAKPOINT} setNdaViewCallback={setNdaViewCallback} />;
}

export default App;

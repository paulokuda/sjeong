import React, { useState, useEffect } from 'react';
import  Landing from "./Landing";
import Nda  from "./Nda";
import './App.css';

const ALL_PROJECTS = [
  {
    y: ["550px", "-530px"],
    styleOuter: {
        width: "30vw",
        height: "40vw",
        position: "absolute",
        top: "65vw",
        right: "7.5vw",
    },
    styleInner: { background: "#dbe2e5" },
    className: "client-project-card__04",
    projectNumber: 4,
    imageClassName: "fourth-project-image",
  },
  {
    y: ["1850px", "-1530px"],
    styleOuter: { width: "30vw", height: "40vw", position: "absolute", top: "5vw", left: "5vw" },
    styleInner: { background: "#dbe2e5" },
    className: "client-project-card__01",
    imageClassName: "first-project-image",
    projectNumber: 1,
  },
  {
    y: ["700px", "-1030px"],
    styleOuter: { width: "30vw", height: "40vw", position: "absolute", top: "40vw", left: "-5vw" },
    styleInner: { background: "#dbe2e5" },
    className: "client-project-card__03",
    imageClassName: "third-project-image",
    projectNumber: 3,
  },
  {
    y: ["700px", "-1030px"],
    styleOuter: { width: "30vw", height: "40vw", position: "absolute", top: "90vw", left: "7.5vw" },
    styleInner: { background: "#dbe2e5" },
    className: "client-project-card__02",
    imageClassName: "second-project-image",
    projectNumber: 2,
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

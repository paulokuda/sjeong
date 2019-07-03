import React, { useEffect, useState, useRef } from "react";

import './App.css';
import FlashingText from "./FlashingText";

const NDA_COUNT = 25;

const NDA_ELEMENT = (<div className="nda-flash-row"><div>NDA</div><div>NDA</div></div>);

function Nda(props) {
    const [currentNdaElements, setCurrentNdaElements] = useState([(<div className="nda-flash-row"><div>NDA</div><div>NDA</div></div>)]);
    const [showFaceTear, setShowFaceTear] = useState(false);

    
    let renderInterval;
    useEffect(() => {
        renderInterval = setInterval(renderNda, 100);
        setShowFaceTear(true);
    }, []);
    
    function renderNda() {
        if (currentNdaElements.length === NDA_COUNT) {
            clearInterval(renderInterval);
        } else {
            currentNdaElements.push(NDA_ELEMENT);
            setCurrentNdaElements([...currentNdaElements]);
        }
        
    }
    
    return (
        <div className="nda-main">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>{currentNdaElements}</div>
            <div className="nda-content">
                <div className="nda-header">
                    <div className="nda-header__left">[CLIENTS]</div>
                    <div className="nda-header__middle">
                        <div>EMAIL [JEONGSTEPH@GMAIL.COM]</div>
                        <div>TWITTER [@JEONGSTEPH]</div>
                        <div>INSTAGRAM [@JEONGSTEPH]</div>
                    </div>
                    <div className="nda-header__right">
                        <FlashingText className="nda-header-close-button" onClick={props.toggleNdaViewCallback}>[CLOSE]</FlashingText>
                    </div>
                </div>
                <div className="nda-body">
                    <div className="nda-photo">
                        <div className={`nda-photo__tear-initial ${showFaceTear ? "nda-photo__tear" : ""}`} />
                    </div>
                    <span className="nda-message-me">[ENTER PASSWORD]</span>
                </div>
            </div>
        </div>
    )
}

export default Nda;
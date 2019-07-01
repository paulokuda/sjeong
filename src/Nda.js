import React, { useEffect, useState } from "react";

import './App.css';

const NDA_COUNT = 7;

const NDA_ELEMENT = (<div className="nda-flash-row"><div>NDA</div><div>NDA</div></div>);

function Nda(props) {
    const [currentNdaElements, setCurrentNdaElements] = useState([]);
    const [ndaRowCount, setNdaRowCount] = useState(0);

    
    let renderInterval;
    useEffect(() => {
        setNdaRowCount(Math.round(window.innerHeight / 150) + 1);
        renderInterval = setInterval(renderNda, 200);
    });
    
    function renderNda() {
        if (currentNdaElements.length === ndaRowCount) {
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
                    <div className="nda-header__right">&#169; 2019</div>
                </div>
                <div className="nda-body">
                    <div className="nda-photo">
                        <div class="wrapper">
                            <div class="pie spinner"></div>
                            <div class="pie filler"></div>
                            <div class="mask"></div>
                        </div>
                    </div>
                    <span className="nda-message-me">[MESSAGE ME]</span>
                </div>
            </div>
        </div>
    )
}

export default Nda;
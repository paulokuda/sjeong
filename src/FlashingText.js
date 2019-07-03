import React, { useEffect, useState } from "react";

function FlashingText(props) {
    const [isShowing, setisShowing] = useState(true);
    function toggleBlinkingState() {
        setisShowing(!isShowing);
    }
    useEffect(() => {
        const interval = setInterval(toggleBlinkingState, 300);
        return () => clearInterval(interval);
    });
    
    return <span onClick={props.onClick} className={`${!isShowing ? "flashing-text__hidden" : ""} ${props.className !== undefined ? props.className : ""}`}>{props.children}</span>;
}

export default FlashingText;
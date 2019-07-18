import React, { useEffect, useState } from "react";

function FlashingText(props) {
    const [isShowing, setisShowing] = useState(true);
    const [disableBlinking, setDisableBlinking] = useState(false);
    function toggleBlinkingState() {
        setisShowing(!isShowing);
    }
    useEffect(() => {
        const interval = setInterval(toggleBlinkingState, 300);
        return () => clearInterval(interval);
    });

    const handleMouseEnter = () => {
        if (props.disableBlinkingOnHover) {
            setDisableBlinking(true);
        }
    }

    const handleMouseLeave = () => {
        if (props.disableBlinkingOnHover) {
            setDisableBlinking(false);
        }
    }
    
    return <span onClick={props.onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`${(!isShowing && !disableBlinking) ? "flashing-text__hidden" : ""} ${props.className !== undefined ? props.className : ""}`}>{props.children}</span>;
}

export default FlashingText;
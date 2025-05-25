import React from 'react';

function Button() {
    const handleClick = () => {
        alert("Button clicked!");
    }

    const handleDoubleClick = () => {
        alert("Button double clicked!");
    }

    const handleMouseEnter = () => {
        alert("Mouse entered the button area!");
    }

    const handleMouseLeave = () => {
        alert("Mouse left the button area!");
    }

    return (
        <button 
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >Click Me or Hover over me</button>
    )
}

export default Button;
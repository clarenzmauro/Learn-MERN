import React from 'react';

function InlineHandler() {
    return (
        <div>
            <button onClick={() => alert("Button clicked!")}>Click Me</button>
            <p onMouseOver={() => alert("Mouse is over the paragraph!")}>This is a paragraph</p>
        </div>
    )
}

export default InlineHandler;
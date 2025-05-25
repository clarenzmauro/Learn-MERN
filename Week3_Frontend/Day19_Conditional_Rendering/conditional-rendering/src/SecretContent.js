import React from 'react';

function SecretContent({show}) {
    if (!show) {
        return null;
    }

    return (
        <div>
            <h3>Secret Content</h3>
            <p>This is a secret message.</p>
        </div>
    )
}

export default SecretContent;
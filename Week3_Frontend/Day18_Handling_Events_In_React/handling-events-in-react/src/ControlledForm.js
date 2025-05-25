import React, { useState } from 'react';

function ControlledForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted!', username, email);
        setUsername('');
        setEmail('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Controlled Form</h3>
            <div>
                <label htmlFor="controlledName">Name:</label>
                <input type="text"
                id="controlledName"
                name="controlledName"
                value={username}
                onChange={handleNameChange}
                />
            </div>
            <div>
                <label htmlFor="controlledEmail">Email:</label>
                <input type="email"
                id="controlledEmail"
                name="controlledEmail"
                value={email}
                onChange={handleEmailChange}
                />
            </div>
            <p>Current name: {username}</p>
            <p>Current email: {email}</p>
            <button type="submit">Submit</button>
        </form>
    )
}

export default ControlledForm;
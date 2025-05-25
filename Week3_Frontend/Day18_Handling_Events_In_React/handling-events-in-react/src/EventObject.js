import React from 'react';

function EventObject() {
    const handleChange = (event) => {
        console.log('Input value changed:', event.target.value);
        console.log('Input name:', event.target.name);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted!');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Form Demo</h3>
            <label htmlFor="username">Username:</label>
            <input type="text" 
            id="username" 
            name="username" 
            onChange={handleChange} 
            placeholder="Enter your username"
            />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email"
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="Enter your email"
            />
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default EventObject;
import React, { useState } from 'react';

function UserGreeting() {
    return <h1>Welcome back, User!</h1>
}

function GuestGreeting() {
    return <h1>Please sign up or login.</h1>
}

function LoginStatus() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginToggle = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    let greetingComponent;

    if (isLoggedIn) {
        greetingComponent = <UserGreeting />;
    } else {
        greetingComponent = <GuestGreeting />;
    }

    return (
        <div>
            <h2>Login Status</h2>
            {greetingComponent}
            <button onClick={handleLoginToggle}>{isLoggedIn ? 'Logout' : 'Login'}</button>
        </div>
    )
}

export default LoginStatus;
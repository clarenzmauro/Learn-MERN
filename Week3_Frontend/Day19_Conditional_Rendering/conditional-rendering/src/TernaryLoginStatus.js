import React, { useState } from 'react';

function UserGreeting() {
    return <h1>Welcome back, User!</h1>
}

function GuestGreeting() {
    return <h1>Please sign up or login.</h1>
}

function TernaryLoginStatus() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <h2>Login Status (using Ternary Operator)</h2>
            {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? 'Logout' : 'Login'}</button>
        </div>
    )
}

export default TernaryLoginStatus;
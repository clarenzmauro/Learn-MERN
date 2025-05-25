import React, { useState } from 'react';

function NotificationBadge() {
    const [notifications, setNotifications] = useState(0);

    return (
        <div>
            <h2>Notifications (using &&)</h2>
            {notifications > 0 && (
            <span style={{backgroundColor: 'red', color: 'white', padding: '5x', borderRadius: '50%'}}>
                {notifications}
            </span>
            )}

            {notifications === 0 && <p>No new messages.</p>}

            <button onClick={() => setNotifications(0)}>Clear Notifications</button>
            <button onClick={() => setNotifications(prev => prev + 1)}>New Message</button>
        
        </div>
    )
}

export default NotificationBadge;
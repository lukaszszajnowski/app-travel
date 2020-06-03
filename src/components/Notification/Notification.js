import React from 'react';
import ReactDOM from 'react-dom';
import './Notification.scss';

const Notification = () => {
    return (
        ReactDOM.createPortal(
        <div className="notification">test notification</div>,
        document.getElementById('portal-root')
        )
    )
}

export default Notification;
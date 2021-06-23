import React from 'react'

const Dashboard = (props) => {
    return (
        <div className="welcome">
            <h2>Welcome, <span>{props.username}</span></h2>
            <button onClick={props.logout}>Log out</button>
        </div>
    )
}

export default Dashboard

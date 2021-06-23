import React from 'react'

//css
import './css/LandingPage.css'

const LandingPage = (props) => {

    const loginIsClicked = () => {
        props.loginIsClicked("clicked")
    }
    return (
        <div className="container">
            <div className="nav-content">
                <h4>Budget App</h4>
                <ul>
                    <li><button>Home</button></li>
                    <li><button>Register</button></li>
                    <li><button onClick={loginIsClicked}>Login</button></li>
                </ul>
            </div>
            <div className="main-container">
                <div className="main-content">
                    <h1>Saving and manage money is easy more fun and never stress</h1>
                </div>
            </div>
        </div>
    )
}

export default LandingPage

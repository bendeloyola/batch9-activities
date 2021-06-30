import React, { useHistory } from 'react-router-dom'
// import { Navbar, Nav, NavDropdown, Form, FormCont} from 'react-bootstrap'
//css
import './css/LandingPage.css'

const LandingPage = (props) => {

    let history = useHistory()

    const registrationForm = () => {
        history.push('/registration')
    }

    const loginForm = () => {
        history.push('/login')
    }
    return (
        <div className="container-page">
            <div className="nav-content">
                <h4>Budget App</h4>
                <ul>
                    <li><button>Home</button></li>
                    <li><button onClick={registrationForm}>Register</button></li>
                    <li><button onClick={loginForm}>Login</button></li>
                </ul>
            </div>
           
            <div className="main-container">
                <div className="main-content">
                    <h1>Saving and managing money is easy more fun and never stress</h1>
                </div>
            </div>
        </div>
    )
}

export default LandingPage

import React, { useHistory } from 'react-router-dom'
// import { Navbar, Nav, NavDropdown, Form, FormCont} from 'react-bootstrap'
//css
import './css/LandingPage.css'
import  budgetImg from './img/budget1.png'

const LandingPage = (props) => {

    let history = useHistory()

    const registrationForm = () => {
        history.push('/registration')
    }

    const loginForm = () => {
        history.push('/login')
    }

    const imgStyle = {
        borderRadius: '10px',
        width: '50%'
    }

    const imgDiv = {
        width: '100%'
    }

    return (
        <div className="container-page">
            <div className="nav-content">
                <h4>Budget App</h4>
                <ul>
                    {/* <li><button>Home</button></li> */}
                    <li><button onClick={registrationForm}>Register</button></li>
                    <li><button onClick={loginForm}>Login</button></li>
                </ul>
            </div>
           
            <div className="main-container">
                <div className="main-content">
                    <h1>Saving and managing money is easy more fun and never stress</h1>
                </div>
            </div>
            <div className="row mt-5" style={imgDiv}>
                <div className="col-12 d-flex justify-content-center">
                    <img src={budgetImg} style={imgStyle}/>
                </div>
            </div>
            
        </div>
    )
}

export default LandingPage

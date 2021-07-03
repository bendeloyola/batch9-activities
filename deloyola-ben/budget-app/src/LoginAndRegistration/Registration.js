import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Alert } from 'react-bootstrap';
import './css/Login.css'

const Registration = () => {


    // const userInfoStorage = {
    //     usersData: []
    // }

    const [userData, setUserData] = useState({username:"", email:"", password:""})
    // const [localStorageData, setLocalStorageData] = useState();


    let history = useHistory()

    const alreadyHaveAccount = () => {
        history.push('/login')
    }

    const [flag, setFlag] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault()  

        if (!userData.username || !userData.email || !userData.password) {
            setFlag(true);

        } else {
            setFlag(false);

            localStorage.setItem('userData', JSON.stringify(userData))

            alreadyHaveAccount()

        }

    }

    

    const usernameHandleChange = (e) =>{
        setUserData({...userData, username: e.target.value})
    }

    const emailHandleChange = (e) =>{
        setUserData({...userData, email: e.target.value})
    }

    const passwordHandleChange = (e) =>{
        setUserData({...userData, password: e.target.value})
    }

 

    return (
        <div className="container-page">
            <form className="login-form" onSubmit={handleFormSubmit}>
                <div className="formInner">
                    <h2>Register Now!</h2>
                    
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" id="username" onChange={usernameHandleChange} autoComplete="on"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" id="email" onChange={emailHandleChange} autoComplete="on"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={passwordHandleChange} autoComplete="on"/>
                    </div>
                    { flag &&
                        <Alert color='primary' variant="danger" >
                                Make sure to fill up every field!
                        </Alert>

                    }
                    <input type="submit" value="REGISTER"/>
                    <button className="home" onClick={alreadyHaveAccount}>Already Have an Account</button>

                </div>
            </form>
        </div>
    )
}

export default Registration



// import React, { useState } from 'react'
// import { Form, Alert } from 'react-bootstrap';
// import Login from './Login';


// const Registration = () => {

//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [phone, setPhone] = useState("");
//     const [profession, setProfession] = useState("");

//     const [flag, setFlag] = useState(false);
//     const [login, setLogin] = useState(true);
//     const [info, setInfo] = useState(true);




//     // on form submit...
//     const handleFormSubmit = (e) => {
//         e.preventDefault();

//         if (!name || !email || !password || !phone || !profession) {
//             setFlag(true);

//         } else {
//             setFlag(false);
//             localStorage.setItem("hardikSubmissionEmail", JSON.stringify(email));
//             localStorage.setItem("hardikSubmissionPassword", JSON.stringify(password));
//             console.log("Saved in Local Storage");

//             setLogin(!login)

//         }

//     }

//     // Directly to the login page
//     const handleClick = () => {
//         setLogin(!login)
//     }

//     // Company Info
//     const infoClick = () => {
//         setInfo(!info)
//     }



//     return (
//         <>
//             <nav className="navbar navbar-light">
//                 <div className="container" onClick={infoClick}>
//                     <h4 className="btn btn-dark btn-lg btn-block">Company Info</h4>
//                 </div>
//             </nav>
//             {info ? <div> {login ? <form onSubmit={handleFormSubmit}>
//                 <h3>Register</h3>

//                 <div className="form-group">
//                     <label>Name</label>
//                     <input type="text" className="form-control" placeholder="Enter Full Name" name="name" onChange={(event) => setName(event.target.value)} />
//                 </div>

//                 <div className="form-group">
//                     <label>Email</label>
//                     <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
//                 </div>

//                 <div className="form-group">
//                     <label>Password</label>
//                     <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
//                 </div>


//                 <div className="form-group">
//                     <label>Phone No.</label>
//                     <input type="Phone" className="form-control" placeholder="Enter contact no" onChange={(event) => setPhone(event.target.value)} />
//                 </div>

//                 <div className="form-group">
//                     <label>Choose your Profession</label>
//                     <Form.Control as="select" onChange={(event) => setProfession(event.target.value)} >
//                         <option>Developer</option>
//                         <option>Artist</option>
//                         <option>Photographer</option>
//                         <option>Team Player</option>
//                         <option>Full Stack</option>
//                     </Form.Control>
//                 </div>


//                 <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
//                 <p className="forgot-password text-right">
//                     Already registered <a href="#" onClick={handleClick} >log in?</a>
//                 </p>
//                 {flag &&
//                     <Alert color='primary' variant="danger" >
//                         I got it you are in hurry! But every Field is important!
//                 </Alert>
//                 }

//             </form> : <Login />}
//             </div> : <div>
//                     <p><strong>Company:</strong> Geeksynergy Technologies PVT Ltd</p>
//                     <p><strong>Address:</strong> Sanjaynagar, Bengaluru-56</p>
//                     <p><strong>Phone:</strong> XXXXXXXXXX09</p>
//                     <p><strong>Email:</strong> XXXXXXXX@gmail.com</p>
//                 </div>}
//         </>
//     )
// }

// export default Registration
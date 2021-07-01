import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Alert } from 'react-bootstrap';

import './css/Login.css'


const Login = ({Login, error }) => {

    let history = useHistory()

    const backToHome = () => {
        history.push('/')
    }

    const createAccount = () => {
        history.push('/registration')
    }

//    const [ inputValue, setInputValue ] = useState();
    
    const [ details, setDetails] = useState({username: "", password:""});

    const submitHandler = (e) =>{
        e.preventDefault()

        Login(details)
    }

    const usernameHandleChange = (e) =>{
        setDetails({...details, username: e.target.value})
    }

    const passwordHandleChange = (e) =>{
        setDetails({...details, password: e.target.value})
    }
   
   

//    const handleChange = (event) => {
//     setInputValue(event.target.value);
//   }

//     let setData = () =>{
//         localStorage.setItem('userData', inputValue)
//         sessionStorage.setItem('sessionStorageData', inputValue)
//         let data = localStorage.getItem('userData')
//         let sessionData = sessionStorage.getItem('sessionStorageData')
//         console.log(data);
//         console.log(sessionData);
//     }

    return (
        <div className="container-page">
            <form className="login-form" onSubmit={submitHandler}>
                <div className="formInner">
                    <h2>Enter Credentials</h2>
                    
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" id="username" onChange={usernameHandleChange} value={details.username}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" onChange={passwordHandleChange} value={details.password}/>
                    </div>
                    {(error != "") ? (
                        <Alert color='primary' variant="danger" >
                               Credentials not matched!
                        </Alert>
                    ) : "" }
                    <input type="submit" value="LOGIN"/>
                    <div className='col-12 d-flex justify-content-between'>
                        <button className="home" onClick={backToHome}>Back to home</button>
                        <button className="home" onClick={createAccount}>Create Account</button>
                    </div>
                    
                </div>

                
            </form>
        </div>
    )
}

export default Login


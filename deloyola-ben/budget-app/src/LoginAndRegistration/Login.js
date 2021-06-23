import React, { useState } from 'react'
import './css/Login.css'


const Login = ({Login, error, loginIsClicked}) => {

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
            <form onSubmit={submitHandler}>
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
                        <div className="error">{error}</div>
                    ) : "" }
                    <input type="submit" value="LOGIN"/>
                    <button className="home" onClick={() => loginIsClicked("")}>Back to home</button>
                </div>

                
            </form>
        </div>
    )
}

export default Login


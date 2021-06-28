import React, {useState} from 'react';

//styles
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//components
import Login from './LoginAndRegistration/Login'
import LandingPage from './LandingPage/LandingPage';
import Dashboard from './Dashboard/Dashboard'

function App() {

  const userAccount = {
    username: "Ben",
    password: "qweasd123"
  } 

  const [ user, setUser ] = useState({username: ""})
  const [ error, setError ] = useState("")
  const [ loginClicked, setLoginClicked ] = useState("")

  const loginHandler = (details) => {
    console.log(details)

    if(details.username == userAccount.username && details.password == userAccount.password){
      console.log("Logged in")
      setUser({
        username: details.username,
      })
    } else {
      setError("Credential not match")
    }
  }

  const Logout = () => {
      setUser({username: ""})
      setError("")
  } 

  const loginIsClicked = (clicked) => {
    setLoginClicked(clicked)
    setError("")
  }

  return (
    <div className="App">
      { (loginClicked == "") ? ( 
        <LandingPage loginIsClicked={loginIsClicked}/>
        ) : 
          (user.username != "") ? (
            <Dashboard username={user.username} logout={Logout}/>
        ) :
        (
          <Login Login={loginHandler} error={error} loginIsClicked={loginIsClicked}/>
      )}
    </div>
  );
}

export default App;


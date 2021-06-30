import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//styles
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//components
import Login from './LoginAndRegistration/Login'
import LandingPage from './LandingPage/LandingPage';
import Dashboard from './Dashboard/Dashboard'
import Registration from './LoginAndRegistration/Registration';

function App() {

  const userAccount = {
    username: "Ben",
    password: "qweasd123"
  } 

  const [ user, setUser ] = useState({username: ""})
  const [ error, setError ] = useState("")


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

  return (
    <Router>
      <div className="App">
        {/* { (loginClicked == "") ? ( 
          <LandingPage loginIsClicked={loginIsClicked}/>
          ) : 
            (user.username != "") ? (
              <Dashboard username={user.username} logout={Logout}/>
          ) :
          (
            <Login Login={loginHandler} error={error} loginIsClicked={loginIsClicked}/>
        )} */}
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          
          {
            (user.username != "") ? (
            
              <Dashboard username={user.username} logout={Logout}/>
          
            ) : 
            (  
            <Route exact path="/login">
              <Login Login={loginHandler} error={error}/>
            </Route>
            )
          }
          <Route exact path="/registration">
            <Registration/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


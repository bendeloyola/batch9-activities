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
import MyLandingPage from './LandingPage/MyLandingPage';

function App() {

  // const userAccount = {
  //   username: "Ben",
  //   password: "qweasd123"
  // } 

  const [ user, setUser ] = useState({username: ""})
  const [ error, setError ] = useState("")


  const loginHandler = (details) => {

    let userData = JSON.parse(localStorage.getItem('userData'))
    // let password = JSON.parse(localStorage.getItem('password'))
    console.log('from input: ', details.password)
    console.log('from localStorage: ', userData)

    if(details.username == userData.username && details.password == userData.password){
      
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
            {/* <LandingPage /> */}
            <MyLandingPage/>
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


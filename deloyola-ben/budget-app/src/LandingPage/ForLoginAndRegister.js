import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import ImageCard from './ImageCard'
import panel from './static/static'
import useWindowPosition from './hook/WindowPosition'

const useStyles = makeStyles((theme) => ({
   root: {
       minHeight: '100vh',
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       [theme.breakpoints.down('md')]: {
           flexDirection: 'column'
       }
   }
}))

const ForLoginAndRegister = () => {

    let history = useHistory()

    const registrationForm = () => {
        history.push('/registration')
    }

    const loginForm = () => {
        history.push('/login')
    }

    const classes = useStyles()
    const checked = useWindowPosition('header')

    return ( 
        <div className={classes.root} id="panel">
            <button onClick={registrationForm}><ImageCard panel={panel[1]} checked={checked}/></button>
            <button onClick={loginForm}><ImageCard panel={panel[0]} checked={checked}/></button>
        </div>
     );
}
 
export default ForLoginAndRegister;
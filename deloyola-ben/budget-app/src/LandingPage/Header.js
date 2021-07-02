import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core'
import SortIcon from '@material-ui/icons/Sort'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito'
    },
    container:{
        textAlign: 'center',
    },
    appbar:{
        background: 'none',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    icon: {
        color: '#fff',
        fontSize: '3rem'
    },
    appbarTitle:{
        flexGrow: '1'
    }, 
    colorText:{
        color: '#5AFF3D'
    },
    titleLogo: {
        marginTop: '16px',
        fontSize: '2rem'
    },
    heroMesssage: {
        fontSize: '3rem'
    },
    arrowDown:{
        color: '#5AFF3D',
        fontSize: '3rem'
    }
}))

const Header = () => {

    let history = useHistory()

    const registrationForm = () => {
        history.push('/registration')
    }

    const loginForm = () => {
        history.push('/login')
    }

    const classes = useStyles()
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        setChecked(true)
    }, [])

    return ( 
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}> 
                <h1 className={classes.titleLogo}>Budget <span className={classes.colorText}>App</span></h1>
                <IconButton>
                    <SortIcon className={classes.icon}/>
                    {/* <button className={classes.colorText} onClick={registrationForm}>Register</button>
                    <button className={classes.colorText} onClick={loginForm}>Login</button> */}
                </IconButton>
                
            </AppBar>

            <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} >
                <div className={classes.container}>
                    <h1 className={classes.heroMesssage}>Saving and managing <br/> <span className={classes.colorText}>money is easy more fun</span><br/> and never stress.</h1>
                    <Scroll to="panel" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.arrowDown}/>
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
     );
}
{/* <Toolbar className={classes.appbarWrapper}>
<h1 className={classes.appbarTitle}>Budget App</h1>
<IconButton>
    <SortIcon className={classes.icon}/>
</IconButton>
</Toolbar> */}
export default Header;
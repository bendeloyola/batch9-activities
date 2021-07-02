import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

import Header from './Header'
import ForLoginAndRegister from './ForLoginAndRegister'




const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundColor: '#211A23',
    },
}))

const MyLandingPage = () => {

    

    const classes = useStyles()
    return ( 
        <div className={classes.root}>
            <CssBaseline />
            <Header />
            <ForLoginAndRegister />
        </div>
     );
}
 
export default MyLandingPage;
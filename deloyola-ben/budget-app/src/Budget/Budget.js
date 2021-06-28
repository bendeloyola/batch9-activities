import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Budget = (props) => {

    const { budget, expenses } = useContext(AppContext)

    const spanFlex = {
        display: 'flex',
        justifyContent: 'space-between'
    }

    return (
        <div className="alert bg-dark text-white" style={spanFlex}>
            <span>Savings</span>
            <span>₱{budget}</span>
        </div>  
    )
}

export default Budget

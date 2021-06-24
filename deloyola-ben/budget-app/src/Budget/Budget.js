import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Budget = (props) => {

    const { budget, expenses } = useContext(AppContext)
    return (
        <div className="alert alert-secondary">
            <span>Budget: ₱{budget}</span>
        </div>  
    )
}

export default Budget

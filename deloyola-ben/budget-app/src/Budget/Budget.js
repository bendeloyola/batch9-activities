import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Budget = (props) => {

    const { budget, expenses } = useContext(AppContext)
    return (
        <div className="alert bg-dark text-white">
            <span>Savings: ₱{budget}</span>
        </div>  
    )
}

export default Budget

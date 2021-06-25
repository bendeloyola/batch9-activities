import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Remaining = (props) => {

    const { expenses, budget } = useContext(AppContext)

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost)
    }, 0)

    const resultTotal = budget - totalExpenses;

    return (
        <div className="alert alert-success">
            <span>Remaining: ₱{resultTotal}</span>
        </div>  
    )

    
}

export default Remaining

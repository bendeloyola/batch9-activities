import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Spent = (props) => {
    const { expenses } = useContext(AppContext)

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost)
    }, 0)

    return (
        <div className="alert bg-dark text-white">
            <span>Expenses: ₱{totalExpenses}</span>
        </div>  
    )
}

export default Spent

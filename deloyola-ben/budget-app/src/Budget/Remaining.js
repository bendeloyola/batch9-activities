import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Remaining = (props) => {

    const { expenses, budget } = useContext(AppContext)

    const totalExpenses = expenses.reduce((total, item) => {
        // console.log(`total ${total} + ${item.cost}` )
        return (total = total + item.cost)
    }, 0)

    const resultTotal = budget - totalExpenses;


    const spanFlex = {
        display: 'flex',
        justifyContent: 'space-between'
    }

    return (
        <div className="alert bg-dark text-white" style={spanFlex}>
            <span >Savings / Balance</span>
            <span>₱{resultTotal}</span>
        </div>  
    )

    
}

export default Remaining

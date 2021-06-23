import React from 'react'

import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {
    const expenses = [
        {id: 124124, name: "Shopping", cost: 50}, 
        {id: 124124, name: "Holiday", cost: 300}, 
        {id: 124124, name: "Transportation", cost: 70}, 
        {id: 124124, name: "Fuel", cost: 100}, 
        {id: 124124, name: "House", cost: 5000}
    ]
    return (
        <ul className="list-group">
            {expenses.map((expense) => (
                <ExpenseItem 
                    id={expense.id} 
                    name={ expense.name} 
                    cost={expense.cost}
                />
            ))}
        </ul>
    )
}

export default ExpenseList

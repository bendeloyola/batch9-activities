import React, { useContext, useState, useEffect } from 'react'

import ExpenseItem from './ExpenseItem'
import { AppContext } from '../Context/AppContext'

import { inputStyle } from '../Styles'

const ExpenseList = (props) => {
    const { expenses } = useContext(AppContext)

    const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

    useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

    const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};

    return (
        <>
            <input
				type='text'
				class='form-control mb-2 mr-sm-2'
				placeholder='Type to search...'
				onChange={handleChange}
                style={inputStyle}
			/>

            <ul className="list-group">
                {filteredExpenses.map((expense, index) => (
                    <ExpenseItem 
                        key={index}
                        id={expense.id} 
                        name={ expense.name} 
                        cost={expense.cost}
                    />
                ))}
            </ul>
        </>
    )
}

export default ExpenseList

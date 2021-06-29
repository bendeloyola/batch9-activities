import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';
import { btnEditAdd } from '../Styles'

const ViewBudget = (props) => {

    const { expenses, budget, status } = useContext(AppContext)


    const totalExpenses = expenses.reduce((total, item) => {
        // console.log(`total ${total} + ${item.cost}` )
        return (total = total + item.cost)
    }, 0)

    const resultTotal = budget - totalExpenses;

    return (
        <>
            <span >Savings / Balance</span>
        
                { 
                 budget < resultTotal ? 
                 ( 
                    <span>{status}</span> 
                 ) :
                 (
                    <span>₱{resultTotal}</span>
                 )
                }
           
            <button type='button' class='btn' style={btnEditAdd} onClick={props.handleEditClick}>
                Add
            </button>
        </>
    )
}

export default ViewBudget

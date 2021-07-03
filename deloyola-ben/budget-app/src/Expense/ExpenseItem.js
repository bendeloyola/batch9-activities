import React, {useContext} from 'react'
import { TiDelete } from 'react-icons/ti'
import { AppContext } from '../Context/AppContext'

//style
import './css/ExpenseItem.css'

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext)

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            deletePayload: props.id
        })
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white">
            {props.name}
            <div>
                <span className="cost-container badge badge-primary badge-pill mr-3">
                    ₱{props.cost}
                </span>
                <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
            </div>
            
           
        </li>
    )
}

export default ExpenseItem

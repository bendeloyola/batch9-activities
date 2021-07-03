import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/AppContext'
import AddBudget from './AddBudget'
import ViewBudget from './ViewBudget'

const Remaining = (props) => {

    const { budget, dispatch } = useContext(AppContext) 
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(!isEditing)
    }

   const handleSaveClick = (value) => { 
        dispatch({
            type: 'SET_BUDGET',
            remainingPayload: value,
        });
        setIsEditing(false);

   }


    //style
    const spanFlex = {
        display: 'flex',
        justifyContent: 'space-between'
    }

    return (
        <div className="alert bg-dark text-white" style={spanFlex}>
            { isEditing ?
                (
                    <AddBudget handleSaveClick={handleSaveClick} budget={budget}/>
                ) : 
                (
                    <ViewBudget handleEditClick={handleEditClick} budget={budget}/>
                )
            }
        </div> 
    )

    
}

export default Remaining

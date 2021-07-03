import React, { useState, useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { v4 as forId } from 'uuid'

//styles
import './css/AddExpenseForm.css'
import { btnSave, inputStyle} from '../Styles'

const AddExpenseForm = (props) => {

    const { dispatch } = useContext(AppContext)

    const [name, setName] = useState('')
    const [cost, setCost] = useState('')

    const nameHandleOnchange = (e) => {
        setName(e.target.value)
    }

    const costHandleOnchange = (e) => {
        setCost(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        // console.log(`name: ${name} cost: ${cost}`)
        const expense =  {
            id:   forId(),
            name: name,
            cost: parseInt(cost)
        }

        dispatch({
            type: 'ADD_EXPENSE',
            addExpensePayload: expense
        })

        setName('')
        setCost('')
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label htmlFor="name">Name</label>
                    <input 
                        required="required" 
                        type="text" 
                        className="form-control" 
                        id="name"
                        value={name}
                        onChange={nameHandleOnchange}
                        autoComplete="off"
                        style={inputStyle}
                    ></input>
                </div>
                <div className="col-sm">
                    <label htmlFor="cost">Cost</label>
                    <input 
                        required="required" 
                        type="number" 
                        className="form-control" 
                        id="cost"
                        value={cost && Math.max(0, cost)}
                        onChange={costHandleOnchange}
                        autoComplete="off"
                        style={inputStyle}
                        min="1"
                    ></input>
                </div>
                <div className="col-sm">
                    <div className="mt-4">
                        <button type="submit" className="btn" style={btnSave} size="lg" block>Save</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm

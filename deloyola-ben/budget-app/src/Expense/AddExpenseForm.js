import React, { useState } from 'react'

//styles
import './css/AddExpenseForm.css'

const AddExpenseForm = (props) => {

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
        console.log(`name: ${name} cost: ${cost}`)
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label for="name">Name</label>
                    <input 
                        required="required" 
                        type="text" 
                        className="form-control" 
                        id="name"
                        value={name}
                        onChange={nameHandleOnchange}
                        autoComplete="off"
                    ></input>
                </div>
                <div className="col-sm">
                    <label for="cost">Cost</label>
                    <input 
                        required="required" 
                        type="number" 
                        className="form-control" 
                        id="cost"
                        value={cost}
                        onChange={costHandleOnchange}
                        autoComplete="off"
                    ></input>
                </div>
                <div className="col-sm">
                    <div className="mt-4">
                        <button type="submit" className="btn btn-primary" size="lg" block>Save</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm

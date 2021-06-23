import React from 'react'

//styles
import './css/Dashboard.css'



//components
import Budget from '../Budget/Budget'
import Remaining from '../Budget/Remaining'
import Spent from '../Budget/Spent'
import ExpenseList from '../Expense/ExpenseList'
import AddExpenseForm from '../Expense/AddExpenseForm'

const Dashboard = (props) => {
    return (
        <div className="container">
            <h1 className="mt-3"> Welcome {props.username}</h1>
            <div className="row mt-3">
                <div className="col-sm">
                    <Budget/>
                </div>
                <div className="col-sm">
                    <Remaining/>
                </div>
                <div className="col-sm">
                    <Spent/>
                </div>
            </div>
            <h3 className="mt-3">Expenses</h3>
            <div className="row mt-3">
                <div className="col-sm">
                    <ExpenseList/>
                </div>
            </div>
            <h3 className="mt-3">Add New Expense</h3>
            <div className="mt-3">
                <div className="col-sm">
                    <AddExpenseForm/>
                </div>
            </div>
            
            <button className="btn-logout" onClick={props.logout}>Log out</button>
        </div>

        // <div className="welcome">
        //     <h2>Welcome, <span>{props.username}</span></h2>
        //     <button className="btn-logout" onClick={props.logout}>Log out</button>
        // </div>
        
    )
}

export default Dashboard
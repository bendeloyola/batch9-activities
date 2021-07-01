import React from 'react'

//styles
import './css/Dashboard.css'
import { btnLogout } from '../Styles'


//components
// import Budget from '../Budget/Budget'
import Remaining from '../Budget/Remaining'
import Spent from '../Budget/Spent'
import ExpenseList from '../Expense/ExpenseList'
import AddExpenseForm from '../Expense/AddExpenseForm'
import { AppProvider } from '../Context/AppContext'

const Dashboard = (props) => {
    return (
        <AppProvider>
            <div className="container">
                <h1 className="mt-3">WELCOME {props.username}!</h1>
                <div className="row mt-3">
                    {/* <div className="col-sm">
                        <Budget/>
                    </div> */}
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
                <div className="row mt-3">
                    <div className="col-sm">
                        <AddExpenseForm/>
                    </div>
                </div>
                <div className="col-sm mt-4">
                    <button className="btn" style={btnLogout} onClick={props.logout}>Log out</button>
                </div>
            </div>
        </AppProvider>
        
    )
}

export default Dashboard

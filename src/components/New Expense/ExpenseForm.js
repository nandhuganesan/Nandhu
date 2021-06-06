import React, { useState } from 'react';
import './ExpenseForm.css'


const ExpenseForm=(props)=>{

    const[enteredTitle,setEnteredTitle]=useState('');
    const[enteredAmount,setEnteredAmount]=useState('');
    const[enteredDate,setEnteredDate]=useState('');

    // const[userinput,setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })

    const titleChangehandler=(event)=>{

       setEnteredTitle(event.target.value);
    //    setUserInput({
    //        ...userinput,
    //        enteredTitle:event.target.value
           
    //    })
    // setUserInput((previousState)=>{
    //     return{...previousState,enteredTitle:event.target.value}
    // })
    }
    const amountChangehandler=(event)=>{

        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userinput,
        //     enteredAmount:event.target.value
            
        // })
    }
    const dateChangehandler=(event)=>{

        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userinput,
        //     enteredDate:event.target.value
            
        // })
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

    }

    return<form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangehandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number"  min="0.01" step="0.01" value={enteredAmount} onChange={amountChangehandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date"  min="2019-01-01" max="2023-01-01" value={enteredDate}  onChange={dateChangehandler}/>
            </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>

            </div>
        
    </form>
}

export default ExpenseForm;
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "../New Expense/ExpenseFilter";
import { useState } from "react";

const Expense=(props)=> {

  const[yearSelected,setYearSelected]=useState('2020');

  const yearFilterHandler=(yearpassed)=>{
    setYearSelected(yearpassed)
    console.log(yearpassed)
  }
  return (
    <div>
    
    <Card className="expenses">
    <ExpenseFilter selected={yearSelected} onyearSelection={yearFilterHandler}/>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem>
    </Card>
    </div>
  );
}

export default Expense;

import React,{useState} from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const[filteredYear, setFilteredYear] = useState('2020');
  const filterExpenses =selectedYear=>{
    // console.log('Expenses.js');
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense)=>{
   return expense.date.getFullYear().toString() == filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter defaultValue={filteredYear} onChangeFilter={filterExpenses}  />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
      {/* {filteredExpenses.length===0?<p>No Expenses Found</p> :
       filteredExpenses.map((item,index)=>
          <ExpenseItem
          key={index}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
        )} */}
      </Card>
    </div>
  );
}
export default Expenses;

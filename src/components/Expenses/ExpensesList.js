import React from "react";
import ExpenseItem from "./ExpenseItem";
import  "./ExpensesList.css";

function ExpensesList(props){
    if(props.items.length===0){
return <h2 className="expenses-list__fallback">Found No Expenses</h2>;
    }
    {props.items.length===0?<p>No Expenses Found</p> :
    props.items.map((item,index)=>
       <ExpenseItem
       key={index}
       title={item.title}
       amount={item.amount}
       date={item.date}
     />
     )};
return (<ul className="expenses-list">
{
    props.items.map((item,index)=>(
       <ExpenseItem
       key={index}
       title={item.title}
       amount={item.amount}
       date={item.date}
     />
     ))}
</ul>
);
};
export default ExpensesList;
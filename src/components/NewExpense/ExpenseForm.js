import React,{useState} from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
    const[userInputTitle, setUserInputTitle] = useState("");
    const[userInputAmount, setUserInputAmount] = useState("");
    const[userInputDate, setUserInputDate] = useState("");
    // const[userInput, setUserInput] = useState({
    //     setUserInputTitle: '',
    //     setUserInputAmount: '',
    //     setUserInputDate: ''
    // });

// const titleChangeHandler =(event)=>{
// //     setUserInput({
// //     ...userInput,
// //     setUserInputTitle: event.target.value
// //    });
// setUserInput((prevState)=>{
//   return {...prevState,setUserInputTitle: event.target.value};
// });
// };
// const amountChangeHandler =(event)=>{
//     // setUserInput({
//     //     ...userInput,
//     //     setUserInputAmount: event.target.value
//     //    });
//     setUserInput((prevState)=>{
//         return {...prevState,setUserInputAmount: event.target.value};
//       });
    
//  };
//  const dateChangeHandler =(event)=>{
//     setUserInput({
//         ...userInput,
//         setUserInputDate: event.target.value
//        });
//        setUserInput((prevState)=>{
//         return {...prevState,setUserInputDate: event.target.value};
//       });
//  };

    const titleChangeHandler =(event)=>{
       setUserInputTitle(event.target.value);
    };
    const amountChangeHandler =(event)=>{
        setUserInputAmount(event.target.value);
     };
     const dateChangeHandler =(event)=>{
        setUserInputDate(event.target.value);
     };
     const submitHandler =(event)=>{
           event.preventDefault();
           const expenseData={
             title:userInputTitle,
             amount:+userInputAmount,
             date:new Date(userInputDate)
           };

        //    console.log(expenseData);
           props.onSaveExpenseData(expenseData)
           setUserInputTitle('');
           setUserInputAmount('');
           setUserInputDate('');
     };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input text="text" value={userInputTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={userInputAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={userInputDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__action">
      <button type="submit" onClick={props.onCancel}>Cancel</button>
          <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;

// import { useState } from "react";
import React from 'react'
import './ExpenseForm.css'

// function ExpenseForm(props) {
//   // document.getElementById('').addEventListener('click',(event)=>{event.target.value})
//   const [enteredTitle, setEnteredTitle] = useState("");
//   const [enteredAmount, setEnteredAmount] = useState("");
//   const [enteredDate, setEnteredDate] = useState("");

//   //   const [userInput, setUserInput] = useState({
//   //     enteredTitle: "",
//   //     enteredAmount: "",
//   //     enteredDate: "",
//   //   });

//   const titleChangeHandler = (event) => {
//     setEnteredTitle(event.target.value);
//     // console.log(enteredTitle);
//     // setUserInput({ ...userInput, enteredTitle: event.target.value });

//     // setUserInput((prevState) => {
//     //   return { ...prevState, enteredTitle: event.target.value };
//     // });
//   };

//   const amountChangeHandler = (event) => {
//     setEnteredAmount(event.target.value);
//     // setUserInput({ ...userInput, enteredAmount: event.target.value });
//   };
//   const dateChangeHandler = (event) => {
//     setEnteredDate(event.target.value);
//     // setUserInput({ ...userInput, enteredDate: event.target.value });
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     const expenseData = {
//       title: enteredTitle,
//       amount: enteredAmount,
//       date: new Date(enteredDate),
//     };

//     props.onAddData(expenseData)
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input type="text" onChange={titleChangeHandler} />
//         </div>
//         <div className="new-expense__control">
//           <label>Amout</label>
//           <input
//             type="number"
//             min="0.01"
//             step="0.01"
//             onChange={amountChangeHandler}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input
//             type="date"
//             min="2021-01-01"
//             max="2022-12-31"
//             onChange={dateChangeHandler}
//           />
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button>Add Expense</button>
//       </div>
//     </form>
//   );
// }
// export default ExpenseForm;

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    }
  }

  render() {
    const titleChangeHandler = (event) => {
      this.setState({ enteredTitle: event.target.value })
    }

    const amountChangeHandler = (event) => {
      this.setState({ enteredAmount: event.target.value })
    }
    const dateChangeHandler = (event) => {
      this.setState({ enteredDate: event.target.value })
    }

    const submitHandler = (event) => {
      event.preventDefault()
      const expenseData = {
        title: this.state.enteredTitle,
        amount: this.state.enteredAmount,
        date: new Date(this.state.enteredDate),
      }

      this.props.onAddData(expenseData)
    }
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amout</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2021-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button>Add Expense</button>
        </div>
      </form>
    )
  }
}
export default ExpenseForm;

// import { useState } from 'react';
import React from 'react'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpenseChart from './ExpenseChart'
// function Expenses(props) {
//   const [filteredYear, setFilteredYear] = useState('2022');

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   const filteredExpenses = props.expenses.filter((expense) => {
//     return expense.date.getFullYear().toString() === filteredYear;
//   });

//   return (
//     <Card className="expenses">
//       <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
//       <ExpenseChart expenses={filteredExpenses}/>
//       <ExpensesList expenses={filteredExpenses} />
//     </Card>
//   );
// }

// export default Expenses;

class Expenses extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredYear: '2022',
    }
  }

  render() {
    function filterChangeHandler(selectedYear) {
      this.setState({ filteredYear: selectedYear })
    }

    const filteredExpenses = this.props.expenses.filter((expense) => {
      return expense.date.getFullYear().toString() === this.state.filteredYear
    })
    return (
      <Card className="expenses">
        <ExpensesFilter
          selected={this.state.filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    )
  }
}
export default Expenses

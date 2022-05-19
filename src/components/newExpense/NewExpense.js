import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

import React from 'react'

// const NewExpense = (props) => {
//   const AddData = (data) => {
//     const objectWithId = {
//       ...data,
//       id: Math.random().toString(),
//     };

//     props.onAddDataToArray(objectWithId)
//   };

//   return (
//     <div className="new-expense">
//       <ExpenseForm onAddData={AddData} />
//     </div>
//   );
// };
// export default NewExpense;
class NewExpense extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const AddData = (data) => {
      const objectWithId = {
        ...data,
        id: Math.random().toString(),
      }

      this.props.onAddDataToArray(objectWithId)
    }
    return (
      <div className="new-expense">
        <ExpenseForm onAddData={AddData} />
      </div>
    )
  }
}
export default NewExpense

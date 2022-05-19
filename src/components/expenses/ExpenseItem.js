import Card from '../UI/Card'
import React from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

// function ExpenseItem(props) {
//   return (
//     <Card className="expense-item">
//       <ExpenseDate date={props.date} />
//       <div className="expense-item__description">
//         <h2>{props.text}</h2>
//         <div className="expense-item__price">{props.price}</div>
//       </div>
//     </Card>
//   );
// }

// export default ExpenseItem;

 class ExpenseItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Card className="expense-item">
        <ExpenseDate date={this.props.date} />
        <div className="expense-item__description">
          <h2>{this.props.text}</h2>
          <div className="expense-item__price">{this.props.price}</div>
        </div>
      </Card>
    )
  }
}
export default ExpenseItem;
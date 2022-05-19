import './Card.css'

import React from 'react'

// function Card(props) {
//     const classes= "card " + props.className
//     return (
//         <div className={classes}>
//             {/* HEADER */}
//             {props.children}
//             {/* FOOTER */}
//         </div>
//     )
// }
// export default Card
class Card extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const classes = 'card ' + this.props.className
    return (
      <div className={classes}>
        {/* HEADER */}
        {this.props.children}
        {/* FOOTER */}
      </div>
    )
  }
}
export default Card

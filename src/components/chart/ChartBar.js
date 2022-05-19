import './ChartBar.css'
import React from 'react'

// function ChartBar(props){
//     let barFillHeight = "0%"
//     if(props.maxValue > 0){
//         barFillHeight = Math.round((props.value / props.maxValue)*100)+ "%"
//     }
//     return (
//         <div className='chart-bar'>
//             <div className='chart-bar__inner'>
//                 <div className='chart-bar__fill' style={{height:barFillHeight}}></div>
//             </div>
//             <div className='chart-bar__label'>{props.label}</div>
//         </div>
//     )
// }

// export default ChartBar
class ChartBar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let barFillHeight = '0%'
    if (this.props.maxValue > 0) {
      barFillHeight =
        Math.round((this.props.value / this.props.maxValue) * 100) + '%'
    }
    return (
      <div className="chart-bar">
        <div className="chart-bar__inner">
          <div
            className="chart-bar__fill"
            style={{ height: barFillHeight }}
          ></div>
        </div>
        <div className="chart-bar__label">{this.props.label}</div>
      </div>
    )
  }
}
export default ChartBar

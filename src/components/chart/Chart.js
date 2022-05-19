import './Chart.css'
import ChartBar from './ChartBar'
import React from 'react'

// function Chart (props){
//     const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
//     const totalMax = Math.max(...dataPointValues)
//     return (
//         <div className='chart'>
//            {props.dataPoints.map(dataPoint=>{
//                 return <ChartBar
//                 key={dataPoint.label}
//                 value={dataPoint.value}
//                 label={dataPoint.label}
//                 maxValue={totalMax}
//                 />
//             })}
//         </div>
//     )
// }

// export default Chart
class Chart extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const dataPointValues = this.props.dataPoints.map((dataPoint) => dataPoint.value)
    const totalMax = Math.max(...dataPointValues)

    return (
      <div className="chart">
        { this.props.dataPoints.map((dataPoint) => {
          return (
            <ChartBar
              key={dataPoint.label}
              value={dataPoint.value}
              label={dataPoint.label}
              maxValue={totalMax}
            />
          )
        })}
      </div>
    )
  }
}
export default Chart

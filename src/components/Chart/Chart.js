import React from "react";
import './Chart.css';
import ChartBar from './ChartBar'

function Chart(props){
    const dataPintValues = props.dataPoints.map(dataPoint=>dataPoint.value);
    const totalMaximum = Math.max(...dataPintValues);
  return <div className="chart">
  {
    props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label}/>)
  }
  </div>
};

export default Chart;
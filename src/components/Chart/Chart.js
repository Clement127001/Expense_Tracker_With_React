import React from "react";
import BarChart from "../Chart/BarChart/BarChart";
import "./Chart.css";
const Chart = (props) => {
  const expenseValue = props.dataPoints.map((dataPoint) => dataPoint.value);

  const maxValue = Math.max(...expenseValue);

  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => (
        <BarChart
          key={datapoint.label}
          month={datapoint.label}
          value={datapoint.value}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;

import React from "react";
import "./BarChart.css";

const BarChart = (props) => {
  let chartFill = "0%";

  if (props.maxValue > 0) {
    chartFill = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  console.log(chartFill);

  console.log(props);

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: chartFill }}></div>
      </div>
      <div className="chart-bar__label">{props.month}</div>
    </div>
  );
};

export default BarChart;

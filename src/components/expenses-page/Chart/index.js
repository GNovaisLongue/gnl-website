import React from "react";
import ChartBar from "./ChartBar";
import "./styles.css";

const Chart = (props) => {
  const dataChartValues = props.dataChart.map((dataChart) => dataChart.value);
  const totalMax = Math.max(...dataChartValues);

  return (
    <div className="chart">
      {props.dataChart.map((dataChart) => (
        <ChartBar
          key={dataChart.label}
          value={dataChart.value}
          maxValue={totalMax}
          label={dataChart.label}
        />
      ))}
    </div>
  );
};

export default Chart;

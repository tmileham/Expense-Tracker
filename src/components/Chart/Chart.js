import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
            key={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;

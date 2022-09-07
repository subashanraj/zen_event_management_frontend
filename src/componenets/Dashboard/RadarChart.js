import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: [
    "Basics",
    "Absolute begainner",
    "Arrays",
    "Strings",
    "Companies",
    "Mathematics",
  ],
  datasets: [
    {
      label: "Activity",
      data: [5, 9, 3.5, 5, 2, 3],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 2,
    },
  ],
};

export function RadarChart() {
  return <Radar data={data} />;
}

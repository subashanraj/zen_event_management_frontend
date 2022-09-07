import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Codekata", "Webkata", "MicroArk"],
  datasets: [
    {
      label: "# of Votes",
      data: [90, 45, 35],

      backgroundColor: ["#e60073", "#e68a00", "#c1c1f0"],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export function Dougnut() {
  return <Doughnut data={data} />;
}

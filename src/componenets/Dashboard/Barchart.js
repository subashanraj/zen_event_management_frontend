import React from "react";
import { Bar } from "react-chartjs-2";
//import faker from "faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Worst Case",
     // data: labels.map(() => faker.datatype.number({ min: 0, max: 12 })),
      backgroundColor: " #cc0044",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [4, 5, 3, 7, 1, 2, 3],
    },
    {
      label: "Best Case",
     // data: labels.map(() => faker.datatype.number({ min: 0, max: 12 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [4, 5, 3, 7, 8, 10, 2, 3],
    },
  ],
};

export function Barchart() {
  return <Bar options={options} data={data} />;
}

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: "Gasoline Price(In USD)",
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      stacked: false,
    },
    y: {
      stacked: false,
    },
  },
};

export function Chart({ data, isSorted, onSort }) {
  return (
    <>
      <button className="sortButton" onClick={onSort}>
        {isSorted ? "Reset Sorting" : "Sort Alphabetically"}
      </button>
      <div className="charts-area">
        <Bar options={options} data={data} />
      </div>
    </>
  );
}

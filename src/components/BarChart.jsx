
import React from 'react'
import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
ChartJS.register(
    BarElement, CategoryScale, LinearScale, Tooltip, Legend
)
const BarChart = ({chartData}) => {
  return (
     <Bar data={chartData} />
  )
}

export default BarChart

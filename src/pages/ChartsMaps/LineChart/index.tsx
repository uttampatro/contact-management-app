import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const LineChart: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        );
        const result = response.data;
        const labels = Object.keys(result.cases);
        const cases = Object.values(result.cases);
        setData({
          labels,
          datasets: [
            {
              label: "COVID-19 Cases",
              data: cases,
              fill: false,
              backgroundColor: "rgba(75,192,192,0.2)",
              borderColor: "rgba(75,192,192,1)",
              tension: 0.1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="chart-container">
      {data && (
        <>
      {/* Chart for large screens */}
          <div className="hidden  lg:block w-full h-[450px]">
            <Line
              data={data}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
      {/* Chart for mobile screens */}
          <div className="lg:hidden w-full h-[300px]">
            <Line
              data={data}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default LineChart;

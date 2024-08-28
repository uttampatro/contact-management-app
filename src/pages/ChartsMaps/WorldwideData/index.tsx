import React, { useEffect, useState } from "react";
import axios from "axios";

interface GlobalData {
  cases: number;
  deaths: number;
  recovered: number;
  updated: number;
}

const WorldwideData: React.FC = () => {
  const [data, setData] = useState<GlobalData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://disease.sh/v3/covid-19/all");
        setData(response.data);
      } catch (error) {
        setError("Error fetching data");
      } finally {
      }
    };

    fetchData();
  }, []);

  if (error) return <p>{error}</p>;

  const lastUpdated = data?.updated
    ? new Date(data.updated).toLocaleString()
    : "N/A";

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Worldwide COVID-19 Data</h2>
      <div className="grid gap-1 md:grid-cols-2">
        <div className="space-y-1">
          <p>
            <strong>Total Cases:</strong> {data?.cases.toLocaleString()}
          </p>
          <p>
            <strong>Total Deaths:</strong> {data?.deaths.toLocaleString()}
          </p>
        </div>

        <div className="space-y-1">
          <p>
            <strong>Total Recovered:</strong> {data?.recovered.toLocaleString()}
          </p>
          <p>
            <strong>Last Updated:</strong> {lastUpdated}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorldwideData;

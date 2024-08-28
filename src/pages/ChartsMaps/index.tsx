import React from "react";
import LineChart from "./LineChart";
import CovidMap from "./CovidMap";

const ChartsMaps: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold  text-center md:text-left">
        Charts and Maps
      </h1>
      <div className="grid gap-8 md:grid-rows-2">
        <div className="w-full h-80">
          <LineChart />
        </div>
        <div className="w-full h-80">
          <CovidMap />
        </div>
      </div>
    </div>
  );
};

export default ChartsMaps;

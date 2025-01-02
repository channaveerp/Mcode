import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "./index.css";

const LivePrice2 = () => {
  const [data, setData] = useState({});
  const [timeRange, setTimeRange] = useState("7d"); // Default to 1 week

  const fetchChartData = async (timeRange) => {
    try {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart`,
        {
          params: {
            vs_currency: "usd",
            days: timeRange,
          },
        }
      );

      if (res.data?.prices) {
        const chartData = res.data.prices.map((price) => ({
          x: new Date(price[0]).toLocaleDateString(),
          y: price[1],
        }));

        console.log("CHART_DATA", chartData);

        setData({
          labels: chartData?.map((point) => point.x),
          datasets: [
            {
              label: "Bitcoin Price (USD)",
              data: chartData?.map((point) => point.y),
              borderColor: "#3b82f6",
              fill: false,
            },
          ],
        });
      } else {
        console.error("Prices data is undefined");
      }
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchChartData(timeRange);
  }, [timeRange]);

  return (
    <div className='chart-container'>
      <div className='price-info'>
        <h1>63,179.71 USD</h1>
        <p className='price-change'>+2,161.42 (3.54%)</p>
      </div>

      <div className='time-range-selector'>
        {["1d", "3d", "7d", "30d", "180d", "1y", "max"]?.map((range) => (
          <button
            key={range}
            onClick={() => setTimeRange(range)}
            className={range === timeRange ? "active" : ""}
          >
            {range}
          </button>
        ))}
      </div>

      <Line data={data} />
    </div>
  );
};

export default LivePrice2;

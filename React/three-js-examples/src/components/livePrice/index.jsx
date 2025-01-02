import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import axios from "axios";
import "./index.css";

const timeRanges = ["1d", "3d", "1w", "1m", "6m", "1y", "max"];

const LivePrice = () => {
  const [priceData, setPriceData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [range, setRange] = useState("1w"); // Default time range
  const [currentPrice, setCurrentPrice] = useState(null);
  const [percentageChange, setPercentageChange] = useState(null);

  useEffect(() => {
    fetchData(range);
  }, [range]);

  const fetchData = async (selectedRange) => {
    let days;
    switch (selectedRange) {
      case "1d":
        days = 1;
        break;
      case "3d":
        days = 3;
        break;
      case "1w":
        days = 7;
        break;
      case "1m":
        days = 30;
        break;
      case "6m":
        days = 180;
        break;
      case "1y":
        days = 365;
        break;
      case "max":
        days = "max";
        break;
      default:
        days = 7;
    }

    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart`,
        {
          params: {
            vs_currency: "usd",
            days,
          },
        }
      );

      const prices = response.data.prices;
      setPriceData(prices.map((p) => p[1]));
      setLabels(prices.map((p) => new Date(p[0]).toLocaleDateString()));
      setCurrentPrice(prices[prices.length - 1][1]);
      setPercentageChange(
        ((prices[prices.length - 1][1] - prices[0][1]) / prices[0][1]) * 100
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const chartData = {
    labels,
    datasets: [
      {
        label: "Bitcoin Price (USD)",
        data: priceData,
        fill: false,
        backgroundColor: "rgba(0, 123, 255, 0.5)",
        borderColor: "#3b82f6",
        tension: 0.1,
      },
    ],
  };

  console.log("CHART_DATA", chartData);

  return (
    <div className='container'>
      <h1>{currentPrice ? `$${currentPrice.toFixed(2)}` : "Loading..."} USD</h1>
      <h3>
        {percentageChange !== null ? `${percentageChange.toFixed(2)}%` : ""}
      </h3>

      <div className='chart-container'>
        <Line data={chartData} />
      </div>

      <div className='range-buttons'>
        {timeRanges.map((r) => (
          <button
            key={r}
            className={r === range ? "active" : ""}
            onClick={() => setRange(r)}
          >
            {r}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LivePrice;

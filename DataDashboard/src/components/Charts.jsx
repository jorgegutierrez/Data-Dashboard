import React, { useState, useEffect } from 'react';
import '../styles/charts.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar
} from 'recharts';

const ChartA = (props) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(props.data);
  }, [props]);

  return (
    <div className="Chart">
      <LineChart
        width={380}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="datetime" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="moonphase"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

const ChartB = (props) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    setChartData(props.data);
  }, [props]);

  return (
    <div className="Chart">
      <BarChart
        width={400}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="datetime" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="temp" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export { ChartA, ChartB };

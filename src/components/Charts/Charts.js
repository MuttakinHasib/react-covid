import React, { useState, useEffect } from 'react';
import { fetchDaily } from '../../api';
import Chart from 'react-apexcharts';
import Spinner from '../Spinner';
const Charts = () => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => setDailyData(await fetchDaily());
    fetchAPI();
  }, []);

  if (!dailyData?.length)
    return (
      <div className='text-center'>
        <Spinner />
      </div>
    );
  const date = dailyData.map(({ date }) => date);
  const lineChart = dailyData?.length ? (
    <Chart
      options={{
        xaxis: {
          type: 'datetime',
          categories: dailyData.map(({ date }) => date),
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy',
          },
        },
        stroke: {
          curve: 'smooth',
        },
        colors: ['#2E93fA', '#f36'],
        legend: {
          show: true,
          fontSize: '20px',
          itemMargin: {
            horizontal: 10,
            vertical: 25,
          },
        },
      }}
      series={[
        {
          name: 'Confirmed',
          data: dailyData.map(({ confirmed }) => confirmed),
        },
        { name: 'Deaths', data: dailyData.map(({ deaths }) => deaths) },
      ]}
      type='area'
    />
  ) : null;

  return (
    <div className='mt-5'>
      <h4 className='text-secondary'>Coronavirus around the world - last 30 days :</h4>
      <div>{lineChart}</div>
    </div>
  );
};

export default Charts;

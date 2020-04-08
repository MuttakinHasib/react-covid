import React, { useState, useEffect } from 'react';
import { fetchDaily } from '../../api';
import { Line } from 'react-chartjs-2';
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

  const lineChart = dailyData?.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Confirmed',
            // borderColor: '#ffaa00 ',
            backgroundColor: '#ffaa0057',
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            // borderColor: '#f36',
            backgroundColor: 'rgba(255, 51, 102, 0.815)',
            fill: true,
          },
        ],
      }}
      options={{
        title: {
          display: true,
          text: 'Coronavirus around the world',
          fontSize: 25,
        },
      }}
    />
  ) : null;

  return <div className='my-5'>{lineChart}</div>;
};

export default Charts;

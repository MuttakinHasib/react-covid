import React, { useState, useEffect } from 'react';
import { fetchDate } from '../../api';
import { Doughnut } from 'react-chartjs-2';
import Spinner from '../Spinner';

const GlobalDataChart = () => {
  const [globalData, setGlobalData] = useState({});
  useEffect(() => {
    const fetchDataAPI = async () => {
      setGlobalData(await fetchDate());
    };
    fetchDataAPI();
  }, []);
  // const { cases, deaths, recovered } = globalData;
  if (!globalData?.cases) return <Spinner />;
  const doughnut = globalData?.cases ? (
    <Doughnut
      data={{
        labels: ['Confirmed', 'Deaths', 'Recovered'],
        datasets: [
          {
            label: 'COVID-19',
            backgroundColor: [
              'rgba(26, 16, 83, 0.603)',
              'rgb(255, 99, 132)',
              'rgb(29, 209, 161)',
            ],
            borderColor: '#fff',
            data: [
              globalData?.cases,
              globalData?.deaths,
              globalData?.recovered,
            ],
          },
        ],
      }}
    />
  ) : null;

  return doughnut;
};

export default GlobalDataChart;

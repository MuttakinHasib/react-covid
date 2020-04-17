// import { NovelCovid } from 'novelcovid';
import axios from 'axios';

// const api = new NovelCovid();
const api = 'https://corona.lmao.ninja/v2';
const url = 'https://covid19.mathdro.id/api';

// Global Data

export const fetchDate = async () => {
  const text = await axios.get(`https://corona.lmao.ninja/v2/countries/bd`);
  console.log(text);
  try {
    const {
      data: { cases, todayCases, recovered, deaths, todayDeaths, updated },
    } = await axios.get(`${api}/all`);

    const modifiedData = {
      cases,
      todayCases,
      recovered,
      todayDeaths,
      deaths,
      updated,
    };
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

// Local Country

export const fetchLocalCountry = async countryName => {
  let selectCountry = 'Bangladesh';
  if (countryName) {
    selectCountry = countryName;
  }
  try {
    const {
      data: {
        country,
        countryInfo,
        cases,
        todayCases,
        recovered,
        deaths,
        todayDeaths,
        critical,
        updated,
      },
    } = await axios.get(`${api}/countries/${selectCountry}`);

    const modifiedData = {
      country,
      flag: countryInfo.flag,
      cases,
      todayCases,
      recovered,
      todayDeaths,
      deaths,
      critical,
      updated,
    };

    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

// Select Country

export const fetchCountryData = async () => {
  try {
    const { data } = await axios.get(`${api}/countries`);
    return data.map(info => ({
      country: info.country,
      code: info.countryInfo.iso2,
      flag: info.countryInfo.flag,
    }));
  } catch (err) {
    console.log(err);
  }
};

// Daily Data

export const fetchDaily = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map(dailyData => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    const lastMonth = modifiedData.slice(-30);
    return lastMonth;
  } catch (err) {
    console.log(err);
  }
};

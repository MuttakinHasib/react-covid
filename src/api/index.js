import { NovelCovid } from 'novelcovid';
import axios from 'axios';

const api = new NovelCovid();
const url = ' https://covid19.mathdro.id/api';

// Global Data

export const fetchDate = async () => {
  try {
    const {
      cases,
      todayCases,
      recovered,
      deaths,
      todayDeaths,
      updated,
    } = await api.all();

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
      country,
      countryInfo,
      cases,
      todayCases,
      recovered,
      deaths,
      todayDeaths,
      critical,
      updated,
    } = await api.countries(selectCountry);

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
    const res = await api.countries();
    return res.map(data => ({
      country: data.country,
      code: data.countryInfo.iso2,
      flag: data.countryInfo.flag,
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
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

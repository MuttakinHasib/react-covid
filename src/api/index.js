import { NovelCovid } from 'novelcovid';

const api = new NovelCovid();

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

import axios from 'axios';

const url = 'https://www.hpb.health.gov.lk/api/get-current-statistical';

export const fetchData = async () => {
  

  try {
    const { data } = await axios.get(url);
   
    return data;

  } catch (error) {

    return error;

  }
};

// export const fetchDailyData = async () => {
//   try {
//     const { data } = await axios.get(`${url}/daily`);

//     return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
//   } catch (error) {
//     return error;
//   }
// };

// Instead of Global, it fetches the daily data for the US

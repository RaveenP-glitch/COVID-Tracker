import axios from 'axios';

const url = 'https://www.hpb.health.gov.lk/api/get-current-statistical';

export const fetchData = async () => {



  try {
    const { fdata } = await axios.get(url);
    var lnewcases = fdata.data.local_new_cases;
    var ltotcases = fdata.data.local_total_cases;
    var ltotdeaths = fdata.data.local_deaths;
    var ltotrecov = fdata.data.local_recovered;
    var uptime = fdata.data.update_date_time;

    console.log(fdata);
    console.log(fdata.data.global_deaths);
    return ( lnewcases, ltotcases, ltotdeaths, ltotrecov, uptime);
  } catch (error) {
    return error;
  }
};

import React, { useState, useEffect } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import './App.css';
import InfoBox from './InfoBox.js';
import Map from './Map.js';
import Table from './Table.js';
import { sortData } from "./util";
import LineGraph from "./LineGraph";
import "leaflet/dist/leaflet.css";


function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  // const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  // const [mapZoom, setMapZoom] = useState(3);


  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      })

  }, [])

  // https://disease.sh/v3/covid-19/countries

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({

            name: country.country,  //United States, United Kingdon
            value: country.countryInfo.iso2,  //UK, USA, FR

          }));

          let sortedData = sortData(data);
          setTableData(sortedData);
          setCountries(countries);
        });

    };

    getCountriesData();
  }, []);


  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    console.log('YOOO>>>>', countryCode);

    setCountry(countryCode);

    const url =
      countryCode === 'worldwide'
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then(response => response.json())
      .then(data => {

        //All of the data...
        //from the country response
        setCountry(countryCode);
        setCountryInfo(data);

        // setMapCenter([data.countryInfo.lat, data.countryInfo.lng]);
        // setMapZoom(4);

      });

  };

  console.log("countryinfo>>>", countryInfo);

  return (
    <div className="App">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 Tracker</h1>
          <FormControl className="app__dropdown">
            <Select variant="outlined" onChange={onCountryChange} value={country}>

              {/* Loop through all the countries and show a drop down. */}

              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (

                <MenuItem value={country.value}>{country.name}</MenuItem>

              ))}

            </Select>

          </FormControl>

        </div>

        <div className="app__stats">
          <InfoBox title="Coronavirus cases" cases={countryInfo.todayCases} total={countryInfo.cases} />


          <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />


          <InfoBox title="Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />

          {/* InfoBoxes  "Coronavirus cases" */}
          {/* InfoBoxes "Coronavirus recoveries" */}
          {/* InfoBoxes */}

        </div>
        {/* Map */}
        {/* <Map
          // center={mapCenter}
          // zoom={mapZoom}
        /> */}


      </div>



      <Card className="app__right">
        <CardContent>
          {/* Table */}
          <h3>Live Cases by Country</h3>

          <Table countries={tableData}></Table>


          <h3>Worldwide new cases</h3>
          <LineGraph />
          {/* Graph */}

        </CardContent>

      </Card>

    </div >



  );
}

export default App;

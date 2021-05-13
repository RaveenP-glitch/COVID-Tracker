import React,{useState, useEffect} from "react";
import {
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";
import './App.css';

function App() {

const [countries, setCountries] = useState([]);

// https://disease.sh/v3/covid-19/countries

useEffect(() => {
  const getCountriesData = async() => {
    await fetch("https://disease.sh/v3/covid-19/countries")
    .then((response) => response.json())
    .then((data) => {
      const countries = data.map((country) => ({
        
          name: country.country,  //United States, United Kingdon
          value: country.countryInfo.iso2 ,  //UK, USA, FR
        
      }));

      setCountries(countries);
    });
  
  };

  getCountriesData();
}, []);

  return (
    <div className="App">
      <div className="app__header">
        <h1>COVID-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">

            {/* Loop through all the countries and show a drop down. */}

            {countries.map((country) => (

            <MenuItem value={country.value}>{country.name}</MenuItem> 

            ))}


            {/* <MenuItem value="worldwide">Worldwide</MenuItem>
            <MenuItem value="worldwide">Option two</MenuItem>
            <MenuItem value="worldwide">Option three</MenuItem>
            <MenuItem value="worldwide">Option four</MenuItem> */}


          </Select>

        </FormControl>

      </div>



    </div>
  );
}

export default App;

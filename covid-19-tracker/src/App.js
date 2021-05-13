import React from "react";
import{
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>COVID-19 Tracker</h1>
      <FormControl className="app__dropdown">
        <Select>
        variant = "outlined"
        value = "abc"

        <MenuItem value="worldwide">Worldwide</MenuItem>
        <MenuItem value="worldwide">Option two</MenuItem>
        <MenuItem value="worldwide">Option three</MenuItem>
        <MenuItem value="worldwide">Option four</MenuItem>


        </Select>

      </FormControl>

    </div>
  );
}

export default App;

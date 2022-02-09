import React, { Component } from 'react';
import styles from './App.module.css';
import { fetchData } from './api';

import { Cards, Chart, CountryPicker } from './components';

class App extends Component {

  componentDidMount(){
    const data = await fetchData();

    console.log()
  }

  render() {
    return (
    <div className={styles.container}>
        
        <Cards />
        <CountryPicker />
        <Chart />

    </div>
    );
  }
}

export default App;

import React from 'react';
// import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import Cards from './Cards/Cards';

// import image from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData();

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        {/* <img className={styles.image} src={image} alt="COVID-19" /> */}
        <Cards data={data}/>
        <h1>Covid-19 Tracker</h1>
        
      
      </div>
    );
  }
}

export default App;
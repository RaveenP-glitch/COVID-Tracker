import React, {useState,useEffect} from 'react';
import axios from 'axios';


function App() {

const [repo, setRepo ] = useState([]);

const getRepo = () => {
    axios.get('https://www.hpb.health.gov.lk/api/get-current-statistical')
    .then((response) => {
        console.log(response);
        const myRepo = response.data;
        setRepo(myRepo);
    })
};

useEffect(() => getRepo(), []);


  return (
    <div>
        <p>{repo}</p>

    </div>
    
  )
}

export default App
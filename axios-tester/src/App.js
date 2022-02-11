import React, {useState,useEffect} from 'react';



function App() {

const [repo, setRepo ] = useState([]);



  return (
    <div>
        <p>{repo}</p>
    <h1>Tracker</h1>
    </div>
    
  )
}

export default App
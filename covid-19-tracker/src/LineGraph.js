import React from 'react';
import { Line } from "react-chartjs-2";

function LineGraph() {
    const [data, setData] = useState({});

    // https://disease.sh/v3/covid-19/historical/all?lastdays=30

    return (
        <div>
            <Line data options/>
            
        </div>
    )
}

export default LineGraph

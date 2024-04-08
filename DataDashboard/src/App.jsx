import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Dashboard from './pages/Dashboard';
import {ChartA} from './components/Charts'; // Importa el componente ChartA
import {ChartB} from './components/Charts'; // Importa el componente ChartB

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {

    // declare the async data fetching function
    const fetchData = async () => {

      // Construct URL
      const location = 'Clearwater, FL';
      const API_KEY = '2CPDAWNKF2RYTEA2PZ8994DGB';
      const options = '&include=days&elements=id,temp,feelslikemin,tempmin,datetime,moonphase,sunrise,sunset,moonrise,moonset,description,visibility,conditions'
      const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+ location + '?key='+ API_KEY + options;
      // Makes the API call
      const response = await fetch(url);
      const json = await response.json();

      // Sets data to 'days' array from JSON
      setData(json.days);

      // return API data
      return json;
    }

    // calls function
    fetchData()

  }, []);


  return ( 

    <div className="App">
      <div className="App-sidebar">
        <Header />
        <Menu />
      </div>

      <Dashboard data={data}/>
      
      {/* Renderiza ChartA y ChartB dentro del Dashboard */}
      <div className="Charts-container">
        <div className="Chart">
          <ChartA data={data} /> {/* Renderiza el ChartA */}
        </div>
        
        <div className="Chart">
          <ChartB data={data} /> {/* Renderiza el ChartB */}
        </div>
      </div>
    </div>
      
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Header from './components/Header';
import Select from './components/Select';
import { getAllLaunches } from './services';
import Launches from './components/Launches';



const App = () => {

  const [launch,setLaunch] = useState([])
  const [years,setYears] = useState('')

  useEffect(() => {
    getAllLaunches().then(res => {
      setLaunch(res.data);
    })
  },[])

  return (
    <>
    <Header />
    <Select setYears={setYears} />
    <Launches launch={launch} years={years} />
    
    
    </>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


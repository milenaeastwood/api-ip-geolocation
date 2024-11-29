import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [IPdata, setIPdata] = useState([]);

  const api_key = import.meta.env.VITE_API_KEY;

  useEffect( () => {
    console.log('API Key:', api_key);
    async function getIp() {
      const response = await fetch(`https://geo.ipify.org/api/v2/country?apiKey=${api_key}&ipAddress=`);
      const data = await response.json();
      console.log(data);
      setIPdata(data)
    }

    getIp()

  },[]);



  return (
    <>
      <div>

      </div>
      <h1>What's my IP?</h1>
      <div className="card">
        <div>My IP: {IPdata?.ip}</div>
        <div>My Location: {IPdata?.location?.country}</div>
      </div>
    </>
  )
}

export default App

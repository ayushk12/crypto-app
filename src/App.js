import { useEffect, useState } from "react";
import axios from "axios"
import Coin from "./components/Coin"
import Navbar from "./components/Navbar";

function App() {

  const [coins,setCoins]=useState("");
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
    
      setCoins(response.data)
     
    }).catch((error) => {
      console.log(error)
    })
  }, [])
 
  return (
    <div className="App">
      <Navbar />
     <Coin coins={coins}/>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import axios from "axios"

function App() {
  const [coins,setCoins]=useState("");
  const url='';
  useEffect(()=>{

    axios.get(url).then((res)=>{
      setCoins(res.data)
      console.log(res.data[0])

    }).catch((error)=>{
      console.log(error)
    })
    
  },[])

  return (
    <div className="App">
     <p>Crypto App</p>
    </div>
  );
}

export default App;

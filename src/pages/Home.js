import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  const handleButton = () =>{
    navigate("/invoice");
  }
  return (
    <div style={{display: "flex", justifyContent: "center",}}>
       <button style={{width: "160px", borderColor: "transparent", marginTop: "40px", height: "50px",borderRadius: "8px", cursor: "pointer", fontSize: "20px", backgroundColor: "green", color: "white"}} onClick={handleButton}>Get Invoice</button>
    </div>
  )
}

export default Home

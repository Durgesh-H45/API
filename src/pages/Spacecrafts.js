import React from "react";
import { useState, useEffect } from "react";
import SpacecraftsCard from "../Components/SpacecraftsCard";    

export const getPosts = async () =>{
    const response = await fetch('https://isro.vercel.app/api/spacecrafts',{
        method:"GET",
    });
    return await response.json();
};


function Spacecrafts() {

const [data,setData]=useState([]);
useEffect(()=>{
    getPosts().then((result) => setData(result.spacecrafts));
  }, []);

  return (
    <div className="App">
    {data ? (
      data.map((e) => (
        <SpacecraftsCard name={e.name} id={e.id} />
      ))
    ) : (
      <p>No data</p>
    )}
  </div>
  );
}
export default Spacecrafts;
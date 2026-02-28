import React from "react";
import { useState, useEffect } from "react";
import LaunchersCard from "../Components/LaunchersCard";    

export const getPosts = async () =>{
    const response = await fetch('https://isro.vercel.app/api/launchers',{
        method:"GET",
    });
    return await response.json();
};

function Launchers() {

const [data,setData]=useState([]);
useEffect(()=>{
    getPosts().then((result) => setData(result.launchers));
  }, []);

  return (
    <div className="App">
    {data ? (
      data.map((e) => (
        <LaunchersCard id={e.id} />
      ))
    ) : (
      <p>No data</p>
    )}
  </div>
  );
}
export default Launchers;
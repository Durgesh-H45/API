    import React from "react";
import { useState, useEffect } from "react";
import CustomerCard from "../Components/CustomerCard";


export const getPosts = async () =>{
    const response = await fetch('https://isro.vercel.app/api/customer_satellites',{
        method:"GET",
    });
    return await response.json();
};


function CustomerSatellite() {

const [data,setData]=useState([]);
useEffect(()=>{
    getPosts().then((result) => setData(result.customer_satellites));
  }, []);

  return (
    <div className="App">
    {data ? (
      data.map((e) => (
        <CustomerCard id={e.id} country={e.country} launch_date={e.launch_date}
        mass={e.mass} launcher={e.launcher} />
      ))
    ) : (
      <p>No data</p>
    )}
  </div>
  );
}
export default CustomerSatellite;
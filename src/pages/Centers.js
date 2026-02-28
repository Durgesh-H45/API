    import React from "react";
import { useState, useEffect } from "react";
import CentersCard from "../Components/CentersCard";

export const getPosts = async () =>{
    const response = await fetch('https://isro.vercel.app/api/centres',{
        method:"GET",
    });
    return await response.json();
};


function Centers() {

const [data,setData]=useState([]);
useEffect(()=>{
    getPosts().then((result) => setData(result.centres));
  }, []);

  return (
    <div className="App">
    {data ? (
      data.map((e) => (
        <CentersCard id={e.id} name={e.name}  Place={e.Place}  State={e.State} />
      ))
    ) : (
      <p>No data</p>
    )}
  </div>
  );
}
export default Centers;
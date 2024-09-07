import React from "react";
import { useState } from "react";
function Advstate(){

    const [val, setVal]= useState({name: "harsh",isbanned:false})
   
    return(
        <>
        <h1>name: {val.name}</h1>
        <h1>isBanned: {val.isbanned.toString()}</h1>
        <button onClick={()=>setVal({...val,isbanned:!val.isbanned})}></button>
        </>
    )
    
}
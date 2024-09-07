import React, { useState } from 'react'

const Practise2 = () => {
    const[value,setvalue]=useState([0,1,2,3,4,5])
  return (
   <>
   <div className='m-3'>
   {value.map((elem,index)=>(<h1 key={index}>{elem}</h1>))}
    <button className='px-2 py-1 bg-blue-500 rounded-md' onClick={()=>setvalue(()=>value.filter(item=>item%2==0))}>click me</button>
   </div>
   
   </>
  )
}

export default Practise2
// //increment and decrement counter
// const App = () => {
//     const [value,setVal]=useState(0);
//     return (
//      <>
//     <div>
//      <div >{value}</div>
//      <div className='mt-3'>
//      <button onClick={()=>setVal((prev)=>prev+1)} className='mr-2 bg-blue-500 text-sm rounded-md px-2 py-1'>Incrementor</button>
//      <button onClick={()=>setVal((prev)=>prev-1)} className='bg-red-500 text-sm rounded-md px-2 py-1'>Decrementor</button>
//      </div>
  
//     </div>
//      </>
//     )
//   }
// practise onclick render
{/* <div>
  
<button onClick={()=>setval(!val)} className='bg-red-500 text-sm rounded-md px-2 py-1'>Click me</button>
{val?<h1>Hello world</h1>:""}
</div> */}
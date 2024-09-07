import React from 'react'

const Practise1 = () => {
  return (
   <div className='m-4'>
      <h1>name: {val.name}</h1>
      <h1>isBanned: {val.isbanned.toString()}</h1>
      <button onClick={()=>setVal({...val,isbanned:!val.isbanned})} className={`${val.isbanned?'bg-blue-500':'bg-red-500'} px-2 py-1 rounded-md text-sm`}>click here</button>
      </div>
     
  )
}

export default Practise1
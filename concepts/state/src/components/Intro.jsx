
import React from 'react'

const Intro = () => {
    const [banned,setBanned]=useState(false);
  return (
    <>
    <div className="p-4">
        <h1>{banned.toString()}</h1>
        {/* <button onClick={()=>setScore(200)} className="px-2 py-1 mt-2 rounded-full text-xs bg-blue-500 text-white"></button> */}
        <button onClick={()=>setBanned(!banned)} className="px-2 py-1 mt-2 rounded-full text-xs bg-blue-500 text-white"></button>
    {/* setScore()? no it will run while compiling,then setScore,we cant pass argument so call back fns */}
    {/* boolean cant be printed it should be converted to string */}
    </div>
    
    <div>

{/* to get previous value in the state use prev */}
<button onClick={()=>setVal((prev)=>prev+1)}></button>

    </div>
    </>
  )
}

export default Intro
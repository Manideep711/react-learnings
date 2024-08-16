import React from 'react'
//genreally we cant do this instead of map belive it is a app
function Map() {
    //to iterate over array and print the results
    const data=["red", "green", "blue"]
//   return (
//     <div>{data.map((elem)=><h1>{elem}</h1>)}</div>
//   )
//but there is key error? because react want to identify each element so map inside fn has two values elem,index by using index key={index} or we will use that attribute that is not common for each and every attribute
return(<> 
<div>
    {data.map((elem,index)=><div className='w-fit bg-zinc-200 px-3 py-4 rounded-md'>
        <h1 key={index}>{elem}</h1>
</div>)}
  {/* () used to break line */}
</div>


</>)
}

export default Map
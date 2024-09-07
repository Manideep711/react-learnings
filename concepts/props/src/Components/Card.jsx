import React from 'react'

const Card = ({name,profession,image,handler,friends,index}) => {
  return (
    <div className='w-52 bg-white rounded-md overflow-hidden'>
        <div className='bg-sky-500 w-full h-40 '>
           <img className='w-full h-full object-cover object-center' src={image} alt="" />
        </div>
        <div className='w-full p-3 '>
            <h3 className='text-xl font-semibold'>{name}</h3>
            <h5 className='text-xs'>{profession}</h5>
            <button onClick={handler} className='mt-2 bg-blue-500 px-2 py-1 rounded-md text-xs text-white font-semibold'>{friends?"friends":"Add Friends"}</button>
        </div>
    </div>
  )
}

export default Card
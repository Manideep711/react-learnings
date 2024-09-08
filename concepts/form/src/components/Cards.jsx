import React from 'react'
import Card from './Card'
function Cards({users,handleRemove}) {
  return (
    <>
    <div className='w-full max-h-96  overflow-auto p-4 flex justify-center gap-4 flex-wrap'>

        {users.map((element,index)=>{
                    return <Card handleRemove={handleRemove} key={index} user={element} index={index}></Card>

        })}



    </div>
    </>
  )
}

export default Cards
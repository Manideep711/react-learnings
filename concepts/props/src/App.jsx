import { useState } from 'react'

import React from 'react'
import Button from './Components/Button'
import Card from './Components/Card'
function App() {
  const rawdata =[{name: "jhon", profession: "Painter",image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvdHJhaXQlMjBtZW58ZW58MHx8MHx8fDA%3D",isfriend:false},
    {name: "bob", profession: "actor",image:"https://images.unsplash.com/photo-1441786485319-5e0f0c092803?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBvdHJhaXQlMjBtZW58ZW58MHx8MHx8fDA%3D",isfriend:false},
    {name: "tygor", profession: "worker",image:"https://media.istockphoto.com/id/1005817658/photo/middle-aged-man-with-pleasant-face-expression.jpg?s=2048x2048&w=is&k=20&c=xSDdeVDFVKW-S3g-2Xip11ePdkyfAy1K-sR_dCLNqKo=",isfriend:false},
    {name: "bhAAi", profession: "photographer",image:"https://media.istockphoto.com/id/1212885695/photo/portrait-of-a-happy-middle-aged-man-of-indian-ethnicity.jpg?s=2048x2048&w=is&k=20&c=H9B8szJCRRk069JlnVehnnssmS_bVNb1H6egsqEWr-M=",isfriend:false}]

  const[data,setData]=useState(rawdata);
  const handlebutton=(key)=>setData((previous)=>previous.map((element,index)=>{if(index===key){
    return {...element,isfriend:!element.isfriend}
  }return element}))
  return (
    <>

    {/* basic Button.jsx
     <Button name="download" color="bg-blue-500"></Button>
     <Button name="upload" color="bg-red-500"></Button> */}
       <div className='flex gap-4 w-full h-screen justify-center items-center bg-zinc-200'>

       {data.map((element,index)=>(
          <Card  name={element.name} profession={element.profession} image={element.image} key={index} handler={()=>handlebutton(index)} friends={element.isfriend}></Card>
        ))}

       </div>

    </>
  )
}

export default App

// two ways to pass index,one is passing index from parent to child then child to parent via handler click another one is directly shown above 
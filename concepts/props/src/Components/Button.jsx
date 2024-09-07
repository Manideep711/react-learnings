import React from 'react'

const Button = ({name,color}) => {
  return (
    <button className={`m-3 px-8 py-1 ${color} rounded-md`}>{name}</button>
  )
}

export default Button
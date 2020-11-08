import React from 'react'

export default function Card ({ pic }) {
  return (
    <div className='card p-1 m-2 shadow-lg bg-secondary rounded'>
      <img src={pic} alt=""/>
    </div>
  )
}

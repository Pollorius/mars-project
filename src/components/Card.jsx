import React from 'react'

export default function Card ({ pic, date, sol }) {
  return (
    <div className='card p-1 m-2 shadow-lg bg-secondary rounded'>
      <span>Date: {date}</span>
      <span>Sol: {sol}</span>
      <img src={pic} alt='mars-project' />
    </div>
  )
}

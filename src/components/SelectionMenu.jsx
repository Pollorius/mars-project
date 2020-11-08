import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './Cards'

const API_KEY = 'PcMTJJOyMsSeyRrJONDCUwNuZ5OC9Wck1bBaxctV'

export default function SelectionMenu () {
  const [data, setData] = useState()
  const [selection, setSelection] = useState()

  useEffect(() => {
    getData()
  }, [])
  function getData () {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${API_KEY}`)
      .then((res) => {
        if (res !== undefined) {
          const response = res.data.rovers
          console.log(res)
          setData(response)
        }
      }).catch(e => {
        console.log(e)
      })
  }

  function handleChange (e) {
    e.preventDefault()
    setSelection(e.target.value.toLowerCase())
  }
  let number = 1
  console.log(selection)
  if (data !== undefined) {
    return (
      <div>
        <h6>Choose a Rover </h6>
        <select name='Rovers' id='rover-selector' onChange={handleChange}>
          {data.map(d => {
            return <option key={d.id} value={d.name}> {d.name} </option>
          })}
        </select>
        <Cards roverName={selection} pageNum={number} />
      </div>
    )
  } else {
    return (
      <div>
       Loading...
      </div>
    )
  }
}

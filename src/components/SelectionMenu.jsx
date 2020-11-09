import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './Cards'

const API_KEY = 'PcMTJJOyMsSeyRrJONDCUwNuZ5OC9Wck1bBaxctV'

export default function SelectionMenu () {
  const [data, setData] = useState([])
  useEffect(() => {
    getData()
  }, [])
  const [date, setDate] = useState()
  const [rover, setRover] = useState('Curiosity')
  const [camera, setCamera] = useState('')
  const [page, setPage] = useState(1)

  function getData () {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=${API_KEY}`)
      .then((res) => {
        if (res !== undefined) {
          const response = res.data.rovers
          const defaultDate = res.data.rovers[0].max_date
          setData(response)
          setDate(`earth_date=${defaultDate}`)
        }
      }).catch(e => {
        console.log(e)
      })
  }

  function handleChange (e) {
    e.preventDefault()
    const tagName = e.target.name
    if (tagName === 'rover') {
      setRover(e.target.value)
    }
    if (tagName === 'camera') {
      setCamera(e.target.value)
    }
    if (tagName === 'calendar') {
      setDate(`earth_date=${e.target.value}`)
    }
    if (tagName === 'sol') {
      setDate(`sol=${e.target.value}`)
    }
    if (tagName === 'page') {
      setPage(e.target.value)
    }
  }

  function getIndex (rover) {
    let index
    if (rover === 'Curiosity' && data) {
      index = 0
      return index
    }
    if (rover === 'Spirit' && data) {
      index = 1
      return index
    }
    if (rover === 'Opportunity' && data) {
      index = 2
      return index
    }
  }

  if (data.length !== 0) {
    return (
      <div className='d-flex flex-column align-content-start justify-content-around flex-wrap'>
        <div>
          <h6>Choose a Rover </h6>
          <select name='rover' id='rover-selector' onChange={handleChange}>
            {data.map(d => {
              return <option key={d.id} value={d.name}> {d.name} </option>
            })}
          </select>
          <h6>Choose a Camera </h6>
          <select name='camera' id='camera-selector' onChange={handleChange}>
            {data[getIndex(rover)].cameras.map(c => {
              return <option key={c.id} value={c.name}> {c.full_name} </option>
            })}
          </select>
          <br />
          <h6>Choose a Date</h6>
          <label>
            <h6>Earth Date</h6>
          </label>
          <input type='date' name='calendar' id='date-selector' onChange={handleChange} />
          <br />
          <label>
            <h6>Sol</h6>
          </label>
          <input type='number' name='sol' id='sol-selector' defaultValue={data[0].max_sol} onChange={handleChange} />
          <br />
          <label>
            <h6>Page</h6>
          </label>
          <input type='number' name='page' id='page-selector' defaultValue={page} onChange={handleChange} />
        </div>
        <div>
          <Cards
            roverName={rover}
            camera={camera}
            lastUpdate={date}
            pageNum={page}
          />
        </div>
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

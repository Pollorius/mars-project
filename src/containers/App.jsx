import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import Nav from '../components/Nav'
import Cards from '../components/Cards'

const API_KEY = 'PcMTJJOyMsSeyRrJONDCUwNuZ5OC9Wck1bBaxctV'

function App () {
  const [photos, setPhotos] = useState()
  useEffect(() => {
    getPhotos()
  }, [])
  function getPhotos (roverName = 'curiosity', pageNum = 1) {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?earth_date=2020-11-4&page=${pageNum}&api_key=${API_KEY}`)
      .then((res) => {
        if (res !== undefined) {
          const data = res.data.photos
          console.log(data)
          setPhotos(data)
        } else {
          alert('no pics found')
        }
      }).catch(e => {
        console.log(e)
      })
  }
  console.log(photos)
  return (
    <div className='App'>
      <Route
        path='/'
        render={() => <Nav />}
      />
      <div>
        <Route
          exact path='/'
          render={() =>
            <Cards
              photos={photos}
            />}
        />
      </div>
    </div>
  )
}

export default App;

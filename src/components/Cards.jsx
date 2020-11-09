import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'

const API_KEY = 'PcMTJJOyMsSeyRrJONDCUwNuZ5OC9Wck1bBaxctV'

export default function Cards ({ roverName, lastUpdate, camera, pageNum }) {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    getPhotos(roverName, lastUpdate, camera, pageNum)
  }, [roverName, lastUpdate, camera, pageNum])

  function getPhotos (rover = 'curiosity', date, cam, page) {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover.toLowerCase()}/photos?${date}&camera=${cam.toLowerCase()}&page=${page}&api_key=${API_KEY}`)
      .then((res) => {
        if (res !== undefined) {
          const data = res.data.photos
          setPhotos(data)
        }
      }).catch(e => {
        console.log(e)
      })
  }

  if (photos.length !== 0) {
    return (
      <div className='d-flex flex-row-reverse justify-content-center flex-wrap'>
        {photos.map(p =>
          <Card
            key={p.id}
            pic={p.img_src}
            date={p.earth_date}
            sol={p.sol}
          />)}
      </div>
    )
  } else {
    return (
      <div>No photos found</div>
    )
  }
}

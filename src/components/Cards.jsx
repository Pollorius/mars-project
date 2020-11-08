import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'

const API_KEY = 'PcMTJJOyMsSeyRrJONDCUwNuZ5OC9Wck1bBaxctV'

export default function Cards ({ roverName, pageNum }) {
  const [photos, setPhotos] = useState()
  useEffect(() => {
    getPhotos(roverName, pageNum)
  }, [roverName, pageNum])

  function getPhotos (rn, pn) {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rn}/photos?earth_date=2010-03-21&page=${pn}&api_key=${API_KEY}`)
      .then((res) => {
        if (res !== undefined) {
          const data = res.data.photos
          console.log(res)
          setPhotos(data)
        } else {
          alert('no pics found')
        }
      }).catch(e => {
        console.log(e)
      })
  }
  console.log(photos)
  if (photos.length !== 0) {
    return (
      <div className="d-flex flex-row-reverse justify-content-center flex-wrap">
        {photos.map(p =>
          <Card
            key={p.id}
            pic={p.img_src}
          />)}
      </div>
    )
  } else {
    return (
      <div>No photos found</div>
    )
  }
}

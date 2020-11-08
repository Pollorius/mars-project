import React from 'react'
import Card from './Card'

export default function Cards ({ photos }) {
  if (photos) {
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
      <div>No hay fotos</div>
    )
  }
}

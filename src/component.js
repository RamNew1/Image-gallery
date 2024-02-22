import React from 'react'
import { useState } from 'react'

function Component({images}) {
  const [selectedImage, setSelectedImage]=useState();

  const handleSelect =(image) => {
    setSelectedImage(image);
  }

  return (
    <div className='container'>
      <div className='image-items row' >
      {images.map((image,index)=>(
          <img className='col col-lg-3 col-xs-4' key={index} src={image.url} alt={image.alt} onClick={()=>handleSelect(image)} />
          ))}
      </div>
      {selectedImage &&(
        <div className='selected-image'>
          <h1>Enlarged Image</h1>
          <img src={selectedImage.url} alt={selectedImage.alt} />
        </div>
      )}
    </div>
  )
}

export default Component
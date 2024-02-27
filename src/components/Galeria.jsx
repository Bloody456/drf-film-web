import React, { useEffect, useState } from 'react';
import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'

const Galeria = (props) => {
  const { images } = props;

  console.log(images)

  return (
    <SlideshowLightbox className='container grid grid-cols-3 gap-2 mx-auto' theme='lightbox' showThumbnails={true}>

    {
        images.map((image) => (
          <img key={image.id} src={image.imagen} className='w-full rounded' />
        ))
    }

  </SlideshowLightbox> 
  );
}

export default Galeria;
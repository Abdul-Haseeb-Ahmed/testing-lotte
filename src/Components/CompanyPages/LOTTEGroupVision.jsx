"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import UniversalImage from '../UniversalImage/UniversalImage'
import '../../app/globals.css'

function LOTTEGroupVision() {
  const visionImages = [
    images.lotteGroupVision1,
    images.lotteGroupVision2,
    images.lotteGroupVision3,
    images.lotteGroupVision4,
    images.lotteGroupVision5
  ];

  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/lotte-group-vision"
    >
      <div className="content-box">
        <h2>LOTTE Group Vision</h2>
        
        <div style={{ margin: '40px auto', display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '900px', alignItems: 'center' }}>
          {visionImages.map((img, i) => (
            <UniversalImage
              key={i} 
              src={img} 
              alt={`Vision ${i + 1}`} 
              className="vision-image"
            />
          ))}
        </div>
      </div>
    </PageLayout>
  )
}

export default LOTTEGroupVision
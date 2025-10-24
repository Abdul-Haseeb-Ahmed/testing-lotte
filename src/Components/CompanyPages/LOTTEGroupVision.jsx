"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
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
            <img
              key={i} 
              src={img} 
              alt={`Vision ${i + 1}`} 
              style={{ width: '100%', maxWidth: '800px', height: 'auto', borderRadius: '4px' }} 
              loading="lazy"
            />
          ))}
        </div>


      </div>
    </PageLayout>
  )
}

export default LOTTEGroupVision

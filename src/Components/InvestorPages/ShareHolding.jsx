"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import UniversalImage from '../UniversalImage/UniversalImage'
import '../../app/globals.css'

function ShareHolding() {
  const shareholdingimages = [images.shareHolding1, images.shareHolding2, images.shareHolding3]

  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/share-holding"
      section="investor"
    >
      <div className="content-box">
        <h2>Share Holding</h2>
        
        <div style={{ margin: '40px auto', display: 'flex', flexDirection: 'column', gap: '30px', maxWidth: '900px', alignItems: 'center' }}>
          {shareholdingimages.map((img, i) => (
            <UniversalImage 
              key={i} 
              src={img} 
              alt={`Share Holding ${i + 1}`} 
              className="shareholding-image"
            />
          ))}
        </div>
      </div>
    </PageLayout>
  )
}

export default ShareHolding
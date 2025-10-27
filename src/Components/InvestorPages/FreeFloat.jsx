"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import UniversalImage from '../UniversalImage/UniversalImage'
import '../../app/globals.css'

function FreeFlow() {
  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/free-float"
      section="investor"
    >
      <div className="content-box">
        <h2>Free Float</h2>
        <div className='body-text'>
          <p>Total Outstanding Shares – As of September 30, 2025</p>
        </div>
        
        <div className='management-graph'>
          <UniversalImage 
            src={images.freeFloat} 
            alt="Free Float" 
            className="freefloat-image"
          />
        </div>
      </div>
    </PageLayout>
  )
}

export default FreeFlow
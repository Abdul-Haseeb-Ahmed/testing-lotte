"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import UniversalImage from '../UniversalImage/UniversalImage'
import '../../app/globals.css'

function GenderPayGap() {
  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/gender-pay-gap"
      section="investor"
    >
      <div className='content-box'>
        <div className='management-graph'>
          <UniversalImage 
            src={images.genderPayGap} 
            alt="Gender Pay Gap" 
            className="genderpaygap-image"
          />
        </div>
      </div>
    </PageLayout>
  )
}

export default GenderPayGap
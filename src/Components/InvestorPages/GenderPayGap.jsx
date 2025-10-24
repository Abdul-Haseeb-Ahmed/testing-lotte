"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

function GenderPayGap() {
  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/gender-pay-gap"
      section = "investor"
    >
      <div className='content-box'>
        <div className='management-graph'>
          <img src={images.genderPayGap} loading='lazy' alt="gender pay gap image" />
        </div>


      </div>
    </PageLayout>
  )
}

export default GenderPayGap
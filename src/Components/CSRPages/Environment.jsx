"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import UniversalImage from '../UniversalImage/UniversalImage'
import '../../app/globals.css'

function Environment() {
  return (
      <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/environment"
      section='csr'
    >
      <div className="content-box">
        <h2>Environment</h2>

        <div className="management-graph">
          <UniversalImage 
            src={images.csrEnvironment} 
            alt="Environment CSR" 
            className="environment-image"
          />
        </div>
      </div>
      </PageLayout> 
  )
}

export default Environment
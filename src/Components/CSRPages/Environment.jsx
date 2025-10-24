"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
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
          <img src={images.csrEnvironment} loading='lazy' alt="Management Policy" />
        </div>
      </div>
      </PageLayout> 
  )
}

export default Environment
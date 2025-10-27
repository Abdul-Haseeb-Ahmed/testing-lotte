"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import UniversalImage from '../UniversalImage/UniversalImage'
import '../../app/globals.css'

function AboutLCPL() {
  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/about-lcpl"
    >
      <div className="content-box">
        <h2 id="about">LOTTE Chemical Pakistan Ltd.</h2>
        
        <p className="body-text">
          LCPL stands strong as the only world-class manufacturer and supplier of Purified Terephthalic Acid (PTA) in Pakistan with a capacity to deliver 500,000 tonnes of PTA annually through its state-of-the-art plant situated at Port Qasim, Karachi.
        </p>

        {/* ... remaining text content ... */}

        {/* Management Policy Section */}
        <div className="management-section">
          <h3 id="management">Our Management Policy</h3>
          
          <p className="management-intro">
            Our management policies serve as a business guideline for developing LOTTE Group into a truly global business and reflect principles centered on people and strategy. These management policies present LOTTE's signature essence of success and are also our focal point in answering what, why and how questions.
          </p>

          {/* Graph Image */}
          <div className="management-graph">
            <UniversalImage 
              src={images.graph} 
              alt="Management Policy" 
              className="management-image"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default AboutLCPL
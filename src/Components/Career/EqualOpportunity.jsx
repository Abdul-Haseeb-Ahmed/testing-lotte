"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

function EqualOpportunity() {
  return (
    <PageLayout 
      headerImage={images.equalOpportunity}
      activeMenu="/equal-opportunity"
      section='career'
    >
      <div className="content-box">
        <h2 id="career">Equal Opportunity</h2>
        
        <p className="body-text">
          We are dedicated to providing an engaging and supportive work environment for our employees. Recruitment, hiring, and promotion are based strictly on job suitability, with a focus on fostering individual and professional growth while ensuring safe and healthy working conditions. We maintain a zero-tolerance policy for any form of harassment or the exploitation of child labor. All employees are selected, recruited, and promoted based on objective, non-discriminatory criteria. Discrimination or harassment of any kind—whether based on race, color, gender, or religion—is strictly prohibited.        
        </p>
      </div>
    </PageLayout>
  )
}

export default EqualOpportunity
"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

function Support() {
  return (
        <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/support"
      section='career'
    >
      <div className="content-box">
        <h2 id="career">Career Support for Our Highly-Trained Workforce – Para Professionals</h2>
        
        <p className="body-text">
          Lotte Chemical Pakistan Limited has been offering two years Apprenticeship Training Program by following Apprenticeship Ordinance 1962 in various trades including Manufacturing, Laboratory, Mechanical, Instrument and Electrical. The objective is to provide learning opportunities to young people looking for an alternative route into a career path.
        </p>
        <p className="body-text">
          Most of our trained workforce of Apprentices is serving in various industries and playing an excellent role of LCPL ambassadors and can attract the future waves of talented people as well. Company offers job opportunities, if there is a vacancy, our objective is to support individuals in getting jobs and build a strong and successful future for our community.        </p>

      </div>
    </PageLayout>
  )
}

export default Support
"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

function Health() {
  return (
    <PageLayout 
      headerImage={images.aboutLcpl }
      activeMenu="/health"
      section="csr"
    >
      <div className="content-box">
        <h2>Health</h2>
        
        <h3>Lotte Chemical Pakistan's Support in Providing Adequate Health Care Facilities</h3>
        
        <p className="body-text">
          In view of encouraging and supporting free medical facilities for the under privileged, Lotte Chemical Pakistan has helped various charitable organizations with the purchase of medical equipment, machinery and the smooth operation of their assorted ventures.
        </p>

        <div className="management-section">
          <h3>Marie Adelaide Leprosy Centre (MALC)</h3>
          
          <p className="body-text">
            Earlier this year Lotte Chemical Pakistan joined hands with MALC, which is a long-established charitable organisation treating patients suffering from leprosy, tuberculosis and blindness free of cost throughout Pakistan. As part of our CSR program, a donation to procure an ultrasound machine was made.
          </p>
        </div>

        <div className="management-section">
          <h3>Sindh Institute of Urology and Transplantation (SIUT)</h3>
          
          <p className="body-text">
            The company also sponsored an entire day's Kidney dialysis at the SIUT, which provides free medical treatment for kidney and liver diseases and cancers. Additionally, Lotte Chemical Pakistan has supported Memon Trust Hospital, which provides medical services to citizens belonging to every social stratum, by donating towards one of the OPD clinics at the hospital.
          </p>
        </div>

        <div className="management-section">
          <h3>Hisar Foundation</h3>
          
          <p className="body-text">
            We worked with Hisar Foundation, which focuses on water conservation.
          </p>
        </div>

        <div className="management-section">
          <h3>Continued Support</h3>
          
          <p className="body-text">
            In addition, donations were made to various other orgainsations working towards a healthier Pakistan.
          </p>

          <p className="body-text">
            As an integrated corporate citizen, Lotte Chemical Pakistan has strived to become further engaged with local communities. Despite diverting the bulk of our CSR expenditure to flood relief, Lotte Chemical Pakistan continued to support health and education needs in and around Karachi.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default Health
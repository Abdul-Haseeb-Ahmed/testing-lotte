"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

function Education() {
  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/education"
      section="csr"
    >
      <div className="content-box">
        <h2>Education</h2>
        
        <h3>Lotte Chemical Pakistan: Assisting the Education of Pakistan's Youth</h3>
        
        <p className="body-text">
          In an attempt to contribute towards the national agenda of reducing poverty through improvement in the literacy rate, Lotte Chemical Pakistan joined hands with key stakeholders.
        </p>

        <div className="management-section">
          <h3>National Commission for Human Development (NCHD)</h3>
          
          <p className="body-text">
            Mr. Dong Bin Shin, Vice Chairman Lotte Group, made a donation of US$ 100,000 to National Commission for Human Development (NCHD), which is a government sponsored organization involved with literacy and healthcare activities across Pakistan.
          </p>
        </div>

        <div className="management-section">
          <h3>Sindh Education Foundation (SEF)</h3>
          
          <p className="body-text">
            In collaboration with Sindh Education foundation (SEF), Lotte Chemical Pakistan adopted a Government Boys School located at Ghagger Phattak on National Highway and subsequently helped renovate the entire school premises. Lotte Chemical Pakistan regularly distributes free books, uniform and stationary amongst the students and rewards deserving students based on their academic achievements.
          </p>
        </div>

        <div className="management-section">
          <h3>The Citizen's Foundation (TCF)</h3>
          
          <p className="body-text">
            Lotte Chemical Pakistan has also worked in cooperation with The Citizen's Foundation (TCF) which is a non-profit organization geared to raising the quality of education in localities where the literacy rates are disturbingly low. Lotte Chemical Pakistan has adopted a TCF school located in Yousuf Goth, a heavily populated urban slum of Gadap town in Karachi near Port Qasim. The school has 150 plus students.
          </p>
        </div>

        <div className="management-section">
          <h3>Family Education Services Foundation (FESF)</h3>
          
          <p className="body-text">
            The company has been actively working with Family Education Services Foundation (FESF), a school and training facility for the deaf, in the pursuit of reducing subnormal standards of education even amongst the physically challenged. Lotte Chemical Pakistan is also a regular sponsor of two weeks Summer Camp for over 200 children living in the SOS camp in Malir by supporting the efforts of the FESF.
          </p>
        </div>

        <div className="management-section">
          <h3>Citizen's Education Development Foundation (CEDF)</h3>
          
          <p className="body-text">
            Other associations included Citizen's Education Development Foundation (CEDF), which is an independent organization that has been working towards educating the "neglected and forgotten children" on the streets of Karachi by conducting classes on a refurbished mobile bus, transformed into a classroom, in addition to running various home schools in Neelum Colony.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default Education
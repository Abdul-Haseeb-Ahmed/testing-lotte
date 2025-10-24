"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

function CSRInFocus() {
  return (
<PageLayout 
      headerImage={images.csrInFocus}
      activeMenu="/csr-in-focus"
      section="csr"
    >
      <div className="content-box">
        <h2 id="about">CSR In-Focus</h2>
        
        <p className="body-text">
          Throughout the Company’s presence in Pakistan, initially under ICI / AkzoNobel and now LOTTE, the organization has strived to be a socially responsible. The core focus of our CSR philosophy is to ensure best practices are maintained in Health, Safety & Environment within our own operations and we are also engaged in community development by improving health and education facilities through partnerships with charitable organizations.       
        </p>

        <div className="management-section">
          <h3 id="management">Contribution to Flood Relief</h3>
          
          <p className="management-intro">
            Since 14 June 2022, floods in Pakistan have killed 1,700 people. The floods were caused by heavier than usual monsoon rains and melting glaciers that followed a severe heat wave, all of which are linked to climate change. It is the world’s deadliest flood since the 2017 South Asian floods and described as the worst in the country’s history. On 25 August, Pakistan declared a state of emergency because of the flooding. The government of Pakistan has estimated losses worth US$40 billion from the flooding. Joining in to combat the current humanitarian and economic crises in the country, LOTTE Pakistan Foundation has donated a package to help Pakistan fight against the flood. This humanitarian initiative includes the following: LOTTE Pakistan Foundation supported the flood relief work and provided food hampers to Pakistan Red Crescent Society in conjunction with Metro Pakistan Ltd. Supporting the following partners in this cause;
          </p>
          <strong>
          <p className="body-text">
            Supporting the following partners in this cause        
          </p>
          </strong>
          <div className="grid-2col">
            <div className="grid-item">
              <p>Pakistan Red Crescent Society</p>
            </div>

            <div className="grid-item">
              <p>Pakistan Army</p>
            </div>

            <div className="grid-item">
              <p>Al-Khidmat Foundation</p>
            </div>

            <div className="grid-item">
              <p>Akhuwat Foundation</p>
            </div>
            </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default CSRInFocus
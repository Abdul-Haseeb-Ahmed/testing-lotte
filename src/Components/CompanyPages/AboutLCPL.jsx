"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
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

        <p className="body-text">
          PTA is the primary raw material for producing Polyester fiber, Polyester filament yarn, Polyester film and Polyethylene Terephthalate (PET). LCPL holds the foundation of the polyester chain in Pakistan and retains its edge by being a local producer and key supplier for the domestic Polyester and PET industries with short delivery, world class quality and exceptional customer service.
        </p>

        <p className="body-text">
          For producing PTA we import our feedstock (Paraxylene) from reputable suppliers based in Asia and Middle-East region. Our plant operates under a technology license with IPT (Investa Performance Technologies) which is currently the leading global supplier of PTA technology.
        </p>

        <p className="body-text">
          LCPL has also enabled expansive infrastructure development in Port Qasim area including Chemical Jetty, raw water pipeline and production of industrial gasses through third party contracts. This has started a new trend in industrial investments in Pakistan.
        </p>

        <p className="body-text">
          Besides enabling significant growth in downstream industries LCPL operations provide significant foreign exchange savings in excess of USD 100 million annually for the country.
        </p>

        {/* Management Policy Section */}
        <div className="management-section">
          <h3 id="management">Our Management Policy</h3>
          
          <p className="management-intro">
            Our management policies serve as a business guideline for developing LOTTE Group into a truly global business and reflect principles centered on people and strategy. These management policies present LOTTE's signature essence of success and are also our focal point in answering what, why and how questions.
          </p>

          {/* Graph Image */}
          <div className="management-graph">
            <img src={images.graph} loading='lazy' alt="Management Policy" />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default AboutLCPL



"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import UniversalImage from '../UniversalImage/UniversalImage'
import '../../app/globals.css'

function PTA() {
  return (
    <PageLayout 
      headerImage={images.pta}
      activeMenu="/pta"
      section="products"
    >
      <div className="content-box">
        <h2>PTA (Purified Terephthalic Acid)</h2>
        
        <p className="body-text">
          LCPL is the only world-class manufacturer and supplier of Purified Terephthalic Acid (PTA) in Pakistan with a capacity to deliver 500,000 tonnes of PTA annually through its state-of-the-art plant situated at Port Qasim, Karachi.
        </p>

        <p className="body-text">
          PTA is the primary raw material for producing Polyester fiber, Polyester filament yarn, Polyester film and Polyethylene Terephthalate (PET). Our product meets international quality standards and is supplied to leading polyester manufacturers across Pakistan and the region.
        </p>

        <div style={{ margin: '40px auto', textAlign: 'center', maxWidth: '600px' }}>
          <UniversalImage 
            src={images.ptaImage} 
            alt="PTA Product" 
            className="pta-product-image"
          />
        </div>

        <div className="body-text">
          <h3>Product Quality</h3>
          <p className="body-text">
            LCPL's PTA product is manufactured under strict quality control measures, utilizing state-of-the-art technology and best practices in safety, health, and environment. Our product meets all international specifications and standards, ensuring reliability and consistency for our customers.
          </p>
        </div>

        <div className="body-text">
          <h3>Applications</h3>
          <p className="body-text">
            PTA serves as the foundation material in the polyester value chain, enabling the production of high-quality polyester fibers and films used in textiles, packaging, and numerous industrial applications. As a key supplier to Pakistan's polyester industry, LCPL plays a vital role in supporting downstream manufacturers with superior quality products and exceptional customer service.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default PTA
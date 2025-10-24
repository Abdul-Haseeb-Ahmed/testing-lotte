"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

function ProcessTechnology() {
  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/process-technology"
      section="products"
    >
      <div className="content-box">
        <h2>Process & Technology</h2>
        
        <p className="body-text">
          Purified Terephthalic Acid (PTA) is made by the oxidation of Paraxylene, using Acetic Acid as a solvent.
        </p>

        <div className="body-text">
          <h3>Oxidation Stage</h3>
          <p className="body-text">
            In the first stage, air is blown into the oxidation reactor containing a mixture of Paraxylene, Acetic Acid and a catalyst. As a result of this reaction, Crude Terephthalic Acid (CTA) is formed, which is then crystallized and dried.
          </p>
        </div>

        <div className="body-text">
          <h3>Purification Stage</h3>
          <p className="body-text">
            In the second stage known as purification, CTA is re-dissolved in hot water, co-products are removed by hydrogenation and PTA is produced which is again crystallised and dried. This process ensures that the 99.98% purity required by our customers for the manufacture of polyester products is achieved.
          </p>
        </div>

        <div className="body-text">
          <h3>Ancillary Processes & Efficiency</h3>
          <p className="body-text">
            Various ancillary stages are required to ensure waste recovery and raw material efficiency and the process requires nitrogen, hydrogen, natural gas, large quantities of fresh water and significant electrical power.
          </p>
        </div>

        <div className="body-text">
          <h3>Environmental Management</h3>
          <p className="body-text">
            A state of the art Effluent Treatment Plant is integrated with our PTA Plant. The liquid effluent from the PTA production process is biologically treated using a deep shaft technology, so that the final water being discharged fully conforms to the National Environmental Quality Standards (NEQS).
          </p>
        </div>

        <div style={{ margin: '40px auto', textAlign: 'center', maxWidth: '600px' }}>
          <img src={images.processTechnology} loading='lazy' alt="PTA Chemical Process" style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
        </div>


      </div>
    </PageLayout>
  )
}

export default ProcessTechnology
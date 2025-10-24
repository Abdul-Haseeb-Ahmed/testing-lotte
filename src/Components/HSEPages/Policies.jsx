"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

function Policies() {
  return (
    <PageLayout 
      headerImage={images.policies}
      activeMenu="/policies"
      section="hse"
    >
      <div className="content-box">
        <h2>Policies</h2>
        
        <p className="body-text">
          Lotte Chemical Pakistan applies very high standards and policies relating to Health, Safety & Environment in all aspects of its operation, and complies with all applicable national laws and regulations. Making continuous improvement in HSE standards is a prime responsibility of line managers. Being a member of the worldwide Lotte group, our commitment towards safety, security and health of our employees, contractors and visitors as well as the environment is regulated through effective communication, consultation, training and a strict adherence to our policies.
        </p>
        <div className="management-graph">
          <img src={images.policyImage1} loading="lazy" alt="Quality Policy" />
        </div>

        <div className="management-section">
          <h3>Quality Policy Statement</h3>
          
          <p className="body-text">
            Lotte Chemical Pakistan Limited (LCPL) operates in an environment which is influenced by global standards. To remain competitive & retain its status as a preferred PTA supplier, it has to produce a world-class product that always meets the expectations of its customers, both local and overseas, in terms of price, product, quality & service.
          </p>
        </div>
          <div className="management-graph">
            <img src={images.policyImage2} loading="lazy" alt="Policy" />
          </div>
      </div>
    </PageLayout>
  )
}

export default Policies
"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

function HSEInFocus() {
  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/hse-in-focus"
      section="hse"
    >
      <div className="content-box">
        <h2>HSE In-Focus</h2>
        
        <p className="body-text">
          Health, Safety and Environment (HSE) management forms an integral part of LCPL's core values and company remains committed to instill these values amongst its employees and contractors. To achieve world class standards, the Company has developed HSE management systems which comply with international guidelines and local legislative requirements. The organization is certified with ISO 45001:2018, ISO 14001:2015 & ISO 9001:2015 international standards.
        </p>

        <div className="management-section">
          <h3>Safety Excellence Record</h3>
          
          <p className="body-text">
            Throughout the years, LCPL has maintained exceptional safety records. Currently, amongst petrochemical industry, the LCPL is one of the leaders in terms of maintaining highest standards in Health, Safety and Environmental performance in all aspects of its operations. During its more than twenty five years of operation, LCPL has sustained an excellent safety record. The Company crossed a milestone of 70 million man-hours without Lost Time Case (LTC) in March 2024 where 17.40 Million Man Hours were contributed by Employees and 52.60 Million Man Hours by Supervised & Other Contractors. The long-term objective of "zero injury" remains unchanged because we believe that every occupational accident is avoidable.
          </p>
        </div>

        <div className="management-section">
          <h3>Management Commitment</h3>
          
          <p className="body-text">
            The continued success in HSE field is indicative of company management's resolve and the commitment by the teams beneath at all levels. At Lotte, all staff work like a family and ensure conformance to highest safety standards. The management's focus on Health, Safety and Environment defines company's vision and success criteria for the future.
          </p>
        </div>

        <div className="management-section">
          <h3>Audit and Training Programs</h3>
          
          <p className="body-text">
            Lotte Chemical Pakistan has maintained an aggressive audit regime through daily, weekly and monthly audit cycles. Training and re-training, effective communication of HSE learning events (near misses), tool box talks is the corner-stone of our daily routine thus helping the business in improved behavior based safety and system compliance.
          </p>
        </div>

        <div className="management-section">
          <h3>Employee Health and Safety Training</h3>
          
          <p className="body-text">
            LCPL re-emphasizes the importance of safety within its staff by organizing capacity building workshops and hands-on trainings to ensure its workforce conducts its business safely, correctly and in tune with world class safety standards. Use of first aid kits for medical emergencies and CPR are part of our routine training plans. Additionally, LCPL formulates health and hygiene monitoring plans at the beginning of the year which are stewarded through the senior level management team to ensure occupational illness free environment for its employees.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default HSEInFocus
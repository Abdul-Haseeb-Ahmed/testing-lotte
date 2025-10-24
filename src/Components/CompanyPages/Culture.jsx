"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

function Culture() {
  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/culture"
    >
      <div className="content-box">
        <h2>Our Culture</h2>
        
        <p className="body-text">
          At LCPL, we have nurtured a culture of openness that promotes seamless social and professional interactions, encouraging the sharing of knowledge, ideas, and opinions among employees and business partners alike. Our transparent management approach enhances communication, strengthens teamwork, and builds competencies at all levels of the organization.
        </p>

        <p className="body-text">
          We take pride in being a hardworking organization, celebrating our accomplishments, growing reputation, and the quality of our products and services. Our achievements are recognized through social events organized by the management committee. At the same time, we stay attuned to market changes and continuously adapt to shifting business conditions.
        </p>

        <p className="body-text">
          At LCPL, we are committed to the training, development, and support of our employees, empowering them to achieve both professional and personal success. We provide a strong career framework with clear development milestones, against which all employees are regularly appraised.
        </p>

        <p className="body-text">
          This approach has created an ecosystem where individuals are hired based on the merits of their skills and experience and are nurtured in an environment that benefits them, their colleagues, and the organization as a whole.
        </p>
        
      </div>
    </PageLayout>
  )
}

export default Culture
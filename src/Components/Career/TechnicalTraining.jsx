"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

function TechnicalTraining() {
  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/technical-training"
      section='career'
    >
      <div className="content-box">
        <h2 id="career">Technical Training Center</h2>
        
        <p className="body-text">
          Recognizing the importance of providing our staff with top-tier training, Lotte Chemical Pakistan’s management established an in-house training center. This state-of-the-art facility, inaugurated in August 2009, serves as a foundation for developing future Lotte managers.
        </p>

        <p className="body-text">
          The Technical Training Center (TTC) focuses on:
        </p>


          <div className="grid-2col">
            <div className="grid-item">
              <p>Performance-based bonus schemes and attractive salary packages that recognize your contribution.</p>
            </div>

            <div className="grid-item">
              <p>Comprehensive medical coverage for employees, spouses, and children.</p>
            </div>

            <div className="grid-item">
              <p>Orientation and core training for Trainee Engineers</p>
            </div>

            <div className="grid-item">
              <p>Orientation and core training for Trainee Apprentices</p>
            </div>

            <div className="grid-item">
              <p>IT and Commercial trainee programs</p>
            </div>

            <div className="grid-item">
              <p>JQP (Job Qualification Programs)</p>
            </div>

            <div className="grid-item">
              <p>Skill enhancement for all employees</p>
            </div>

            <div className="grid-item">
              <p>Long service awards, scholarships, and personal development</p>
            </div>
          </div>

          <p className="intro-text">
            The on-site training center features:</p>

          <div className="grid-2col">
            <div className="grid-item">
              <p>Two spacious training rooms, fully equipped with modern training materials</p>
            </div>

            <div className="grid-item">
              <p>A great video library and a main library</p>
            </div>

            <div className="grid-item">
              <p>A display center showcasing essential materials for mechanical, chemical, and E&I technologies</p>
            </div>

            <div className="grid-item">
              <p>A brilliant practical and training workshop</p>
            </div>

            <div className="grid-item">
              <p>A refreshment area for the employees</p>
            </div>

            <div className="grid-item">
              <p>Syndicate rooms for collaborative learning</p>
            </div>
          </div>
    </div>
    </PageLayout>
  )
}

export default TechnicalTraining
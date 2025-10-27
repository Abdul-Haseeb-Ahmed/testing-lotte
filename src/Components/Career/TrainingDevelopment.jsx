"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import UniversalImage from '../UniversalImage/UniversalImage'
import '../../app/globals.css'

function TrainingDevelopment() {
  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/training-development"
      section="career"
    >
      <div className="content-box">
        <h2 id="recruitment">Training And Development</h2>
        
        <p className="body-text">
            We believe in our people and recognize our responsibility to equip them with the skills and mindset needed to unlock their full potential. Through a structured process, we offer management and leadership development programs tailored to our employees’ growth.        
        </p>
        <p className="body-text">
            Individual development needs are identified through our performance evaluation system. During evaluations, we assess employees’ current qualifications and competencies against targeted goals, helping us pinpoint areas for growth and inform training needs. This process ensures that employees’ development aligns with the company’s strategic objectives.
        </p>
        <div className="management-graph">
          <UniversalImage 
            src={images.trainingDevelopment} 
            alt="Training and Development Process" 
            className="training-image"
          />
        </div>

        <div className="management-section">
          <h3 id="apprenticeship">External Training</h3>
          
          <p className="body-text">
            We carry out a number of trainings for our employees, believing that these sessions enhance employee skills and in turn their productivity and motivation within the workplace.          </p>

          <p className="body-text">
            Some corporate training from renowned corporate trainers included: Leading from Within, Lead with Pride, Managerial Grid, Presentation Skills, MS Excel (advance and essential levels), Winning Decision, Email, Letter & Report writing skills and others.          </p>

          <p className="body-text">
            Employees who participate in external training organize information sharing training sessions which enhance interaction among employees so they form a cohesive unit in line with the Company’s corporate culture.          </p>
        </div>

        <div className="body-text">
          <h3>Internal Faculty Development</h3>
          
          <p className="body-text">
            In line with our strategy of talent localization, the Company develops a talented pool of in-house trainers. Inspiring trainers from various functions are selected and subjected to rigorous training using internal and external resources. The pool of internal trainers then conducts various learning and development programs within the Company, which saves training costs and helps improve a learning culture based on knowledge sharing.          </p>

          <p className="body-text">
            All our employees are encouraged to participate in this program and share their knowledge and experiences with their colleagues. Our local faculty has trained participants on topics ranging from Ethical Management to Six Sigma Orientation to Lead with Pride, among others.          </p>
        </div>
        <div className="body-text">
            <h3>Scholarships In Universities</h3>
            <p className="body-text">
            We provided scholarships to deserving students (on a need and merit basis) in various disciplines at LUMS and NED University of Engineering and Technology. The scholarship covers their entire education period, and is renewed based on students’ performance in each semester.
            </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default TrainingDevelopment
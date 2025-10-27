"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import UniversalImage from '../UniversalImage/UniversalImage'
import '../../app/globals.css'

function Recrutiment() {
  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/recrutiment"
      section="career"
    >
      <div className="content-box">
        <h2 id="recruitment">Recruitment</h2>
        
        <p className="body-text">
          People with passion are given chance to reach their potential and beyond with our enabling environment. We recruit at various levels.
        </p>

        {/* Management Trainee Engineers Program */}
        <div className="body-text">
          <h3 id="mte-program">Management Trainee Engineers Program</h3>
          
          <p className="body-text">
            The Company is eager to hire and attain recent graduates from a range of professional and academic disciplines. We seek talented individuals, whom we nurture within our organization. We provide training and development opportunities so they become future business and industry leaders. We also provide our trainees opportunities to network with leaders and decision makers in their fields. Such networking opportunities serve as an excellent means to gain insight and practical knowledge from experienced industry practitioners.
          </p>

          <p className="body-text">
            Generally, we initiate several recruitment drives for fresh engineering graduates from universities including Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (GIKI), University of Engineering and Technology, Lahore, Punjab University, NED University of Engineering and Technology, Dawood College of Engineering and Technology, National University of Science and Technology (NUST) and Lahore University of Management Sciences (LUMS). The following selection process is followed by us:
          </p>
          <div className="management-graph">
            <UniversalImage 
              src={images.recruitment} 
              alt="Recruitment Process" 
              className="recruitment-image"
            />
          </div>
        </div>

        {/* Apprenticeship Program */}
        <div className="management-section">
          <h3 id="apprenticeship">Apprenticeship Program</h3>
          
          <p className="body-text">
            In line with our efforts to develop local talent from the grass root level and nurture a talent pool that can cater to the upcoming human resource needs of the Company, we manage a structured apprenticeship program in line with the Government of Pakistan rules and regulations.
          </p>

          <p className="body-text">
            The apprenticeship program, lasting for 24 months, begins with a ten-week orientation at the Technical Training Center (TTC) at Plant site. Apprentices are trained in different areas and functions of the plant, as well as about specific equipment available for commercial use. In the process, they not only gain a thorough understanding about the technical knowledge of the plant, but also a comprehensive understanding of processes related to occupational health and safety.
          </p>
          <p className="body-text">
            Upon completion, the majority of apprentices are offered permanent jobs within the Company – depending on job openings, of course.
          </p>
          <div className="management-graph">
            <UniversalImage 
              src={images.recruitment2} 
              alt="Apprenticeship Program" 
              className="recruitment-image"
            />
          </div>
        </div>

        {/* Internship Program */}
        <div className="body-text">
          <h3 id="internship">Internship Program</h3>
          
          <p className="body-text">
            The Company offers internship opportunities to students from various universities offering technical and business management programs.
          </p>

          <p className="body-text">
            The internship program provides aspiring and future leaders opportunities to learn the corporate culture and business practices of your Company, while working alongside highly professional and supportive staff. Interns undergo orientation and are placed in particular functions based on their preferences and educational requirements.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default Recrutiment
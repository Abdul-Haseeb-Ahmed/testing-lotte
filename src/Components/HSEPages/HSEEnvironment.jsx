"use client";
import React from 'react'
import PageLayout from '../PageLayout/PageLayout'
import {images} from '../CloudinaryImagesUrl/ImagesUrl'
import '../../app/globals.css'

function HSEEnvironment() {
  return (
    <PageLayout 
      headerImage={images.aboutLcpl}
      activeMenu="/hse-environment"
      section="hse"
    >
      <div className="content-box">
        <h2>Environment</h2>
        
        <p className="body-text">
          The company believes in '3Rs' of Environment i.e., Reduce, Recycle and Reuse as long-term economic sustainability depends on ecological sustainability.
        </p>

        <div className="management-section">
          <h3>Environmental Compliance Investments</h3>
          
          <p className="body-text">
            Being a responsible and an ethical company, Lotte Chemical Pakistan Ltd has made huge investments of over US$ 50 million in its plant & equipment to comply with national environmental standards. It has installed state of the art High Pressure Catalytic Converter and Deep Shaft technologies to treat gaseous and liquid emissions respectively.
          </p>
        </div>

        <div className="management-section">
          <h3>Emission Reduction Initiatives</h3>
          
          <p className="body-text">
            In addition to above investments, the company has made great strides in lowering environmental burden by reducing green house and acid gases through plant modification as well as process optimization. On the solid waste front, biological sludge produced in the effluent treatment plant is being used in cement plants as partial fuel replacement.
          </p>
        </div>

        <div className="management-section">
          <h3>Energy and Water Conservation</h3>
          
          <p className="body-text">
            As part of its objective to be an active contributor to the sustainability of natural resources, the company developed an energy and water conservation plan in 2011 and has reduced specific energy and water consumption by 33% & 20% respectively compared to the base year of 2000.
          </p>
        </div>

        <div className="management-section">
          <h3>Biodiversity and Green Initiatives</h3>
          
          <p className="body-text">
            Lotte Chemical Pakistan commits to demonstrate best practices in environment and therefore tries to provide a better environment to the available fauna and flora in the surroundings to improve and maintain a better environment at the plant site.
          </p>

          <p className="body-text">
            In 2008, the Company embarked on a tree plantation plan within the site with an aim to improve upon the flora and fauna of the area. Consequent to the recommendations of the WWF survey of plant site, native trees were planted around the premises and in the vicinity to further improve upon the biodiversity. It also decided to carry out the required plantation on 3 kilometer long portion of median strip of dual carriageway passing through the Eastern Industrial Zone and more than three hundred saplings were planted. Approximately 600 to 800 native trees have been planted within and outside the premises, which not only provide nesting grounds/habitat to local population of birds but also enhance the greenery of the area.
          </p>

          <p className="body-text">
            The management of the Company is keen to maintain the fauna and floral diversity in the area and have initiated efforts like hanging nest boxes to attract birds, maintaining plants within factory for bird refuge and putting bill boards with awareness raising messages on roadside.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

export default HSEEnvironment
import React from 'react'
import FeatureBox from './FeatureBox'
import fimage1 from '../images/1.svg'
import fimage2 from '../images/2.svg'
import fimage3 from '../images/3.svg'
import fimage4 from '../images/4.svg'
const Features = () => {
  return (
    <div id="features">
      <h2>Features</h2>
      <div className='a-container'>
        <FeatureBox image={fimage1} title="Weight-Lifting"/>
        <FeatureBox image={fimage2} title="Specific Muscle"/>
        <FeatureBox image={fimage3} title="Flex Your Muscle"/>
        <FeatureBox image={fimage4} title="Cardio Exercise"/>
      </div>
    </div>
  )
}

export default Features
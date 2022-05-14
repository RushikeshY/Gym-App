import React from 'react'

const FeatureBox = (props) => {
  return (
    <div id='features'>
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image} alt="/" />
            </div>
            <div className='a-b-text'> 
            <h2>{props.title}</h2>
            <p style={{paddingBottom:"10px"}
            }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, amet?</p>
            </div>

        </div>
    </div>
  )
}

export default FeatureBox
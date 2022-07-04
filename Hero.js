import React from 'react'
import './Hero.css'
import defaultic from './defaultic.jpg'

const Hero = () => {
    return (
        <div className='hero'>
           
              
           
            <div className='content'>
            <img src={defaultic} alt="mypic" />      
                <p>Call us</p>
                <p>1-800-123-4567</p>
                <p>Because Money</p>
                <p>Doesn't come with instructions</p>
                <button href='/' className='button'>Free Consultation</button>
            </div>
        </div>
    )
}

export default Hero
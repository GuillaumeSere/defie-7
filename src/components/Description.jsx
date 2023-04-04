import React from 'react'
import './description.css'
import Interactive1 from '../images/desktop/image-interactive.jpg'

const Description = () => {
    return (
        <div className='container-description'>
            <div className="image-description">
                <img src={Interactive1} alt="the boys play metaverse" />
            </div>
            <div className="content-description">
                <h2>THE LEADER IN INTERACTIVE VR</h2>
                <p>Founded in 2011, Loopstudios has
                    been producing world-class virtual
                    reality projects for some of the
                    best companies around the globe.
                    Our award-winning creations have
                    transformed businesses through digital
                    experiences that bind to their brand.</p>
            </div>
        </div>
    )
}

export default Description

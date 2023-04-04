import React from 'react'
import './creation.css'
import earth1 from '../images/desktop/image-deep-earth.jpg'
import earth2 from '../images/mobile/image-deep-earth.jpg'
import arcade1 from '../images/desktop/image-night-arcade.jpg'
import arcade2 from '../images/mobile/image-night-arcade.jpg'
import soccer1 from '../images/desktop/image-soccer-team.jpg'
import soccer2 from '../images/mobile/image-soccer-team.jpg'
import grid1 from '../images/desktop/image-grid.jpg'
import grid2 from '../images/mobile/image-grid.jpg'
import above1 from '../images/desktop/image-from-above.jpg'
import above2 from '../images/mobile/image-from-above.jpg'
import pocket1 from '../images/desktop/image-pocket-borealis.jpg'
import pocket2 from '../images/mobile/image-pocket-borealis.jpg'
import curiosity1 from '../images/desktop/image-curiosity.jpg'
import curiosity2 from '../images/mobile/image-curiosity.jpg'
import fisheye1 from '../images/desktop/image-fisheye.jpg'
import fisheye2 from '../images/mobile/image-fisheye.jpg'

const Creation = () => {
  return (
    <div className='creation-container'>
      <div className="creation-header">
        <h2>OUR CREATIONS</h2>
        <button>SEE ALL</button>
      </div>
      <div className="creation-card">
        <div className="card">
            <img src={earth1} alt="earth" />
            <img className='mobile-image' src={earth2} alt="earth" />
            <span>DEEP EARTH</span>
        </div>

        <div className="card">
            <img src={arcade1} alt="arcade" />
            <img className='mobile-image' src={arcade2} alt="arcade" />
            <span>NIGHT ARCADE</span>
        </div>

        <div className="card">
            <img src={soccer1} alt="soccer" />
            <img className='mobile-image' src={soccer2} alt="soccer" />
            <span>SOCCER TEAM VR</span>
        </div>

        <div className="card">
            <img src={grid1} alt="grid" />
            <img className='mobile-image' src={grid2} alt="grid" />
            <span>THE<br/> GRID</span>
        </div>

        <div className="card">
            <img src={above1} alt="above" />
            <img className='mobile-image' src={above2} alt="above" />
            <span>FROM UP ABOVE VR</span>
        </div>

        <div className="card">
            <img src={pocket1} alt="pocket" />
            <img className='mobile-image' src={pocket2} alt="pocket" />
            <span>POCKET BOREALIS</span>
        </div>

        <div className="card">
            <img src={curiosity1} alt="curiosity" />
            <img className='mobile-image' src={curiosity2} alt="curiosity" />
            <span>THE CURIOSITY</span>
        </div>

        <div className="card">
            <img src={fisheye1} alt="fisheye" />
            <img className='mobile-image' src={fisheye2} alt="fisheye" />
            <span>MAKE IT FISHEYE</span>
        </div>
        <button className='mobile-button'>SEE ALL</button>
      </div>
    </div>
  )
}

export default Creation

import '../../styles/ViewList/ViewListBotNav.scss' 

import { ShareNetwork, Heart, Copy } from "phosphor-react"


export default function ViewListBotNav(props) {

  const { location, floorType, wallType } = props

  return (
    <nav className='bottom-nav-container'>
      <section className='img-info-wrapper'>
        <div className='img-location'>
          {location}
        </div>
        <div className='img-details-wrapper'>
          <div className='img-details'>
            Floor - {floorType}
          </div>
          <div className='img-details'>
            Wall - {wallType}
          </div>
        </div>
      </section>

      <section className='utility-button-wrapper'>
        <div className='utility-button'>
          <ShareNetwork className='icon'/>
          <span>SHARE</span>
        </div>
        <div className='utility-button'>
          <Heart className='icon'/>
          <span>FAVORITE</span>
        </div>
        <div className='utility-button'>
          <Copy className='icon'/>
          <span>DUPLICATE</span>
        </div>

      </section>

    </nav>
  )
}
import '../../styles/ViewList/ViewListBotNav.scss'

import { ShareNetwork, Heart, Copy } from "phosphor-react"


export default function ViewListBotNav(props) {

  const {
    index,
    image,
    location,
    floorType,
    wallType,
    botNavStatus,
    data,
    setData,
    setCurrentItemIndex,
  } = props

  //when item is duplicated, its placed as the last item. user will automatically scroll to the last item
  const handleDuplication = (index) => {

    setData(prev => (
      [...prev, {
        image: image,
        location: location,
        floorType: floorType,
        wallType: wallType,
      }]
    ))

    const scrollRightOnUpdate = () => {
      setCurrentItemIndex(data.length)
      let elem = document.getElementById("scroll-target")
      elem.scrollBy({ left: (window.innerWidth * 999), behavior: 'smooth' })
    }
    setTimeout(scrollRightOnUpdate, 200)
  }


  return (
    <nav className={`bottom-nav-container ${botNavStatus}`}>
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
          <ShareNetwork className='icon' />
          <span>SHARE</span>
        </div>
        <div className='utility-button'>
          <Heart className='icon' />
          <span>FAVORITE</span>
        </div>
        <div className='utility-button' onClick={() => handleDuplication(index)}>
          <Copy className='icon' />
          <span>DUPLICATE</span>
        </div>

      </section>

    </nav>
  )
}
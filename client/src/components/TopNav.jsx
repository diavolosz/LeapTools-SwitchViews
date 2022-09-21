import '../styles/TopNav.scss'

import { SignIn, HouseSimple, Pause, ShareNetwork, Check } from "phosphor-react"

export default function TopNav(props) {

  const { handleImageFocus, handleImageDefault, focus, currentItemIndex } = props

  const handleLog = () => {
    console.log('clicked')
  }

  return (
    <section className="top-nav-container">


      {!focus &&
        <div className="top-nav-button-container">
          <div className="top-nav-button">
            <SignIn className='icon' />
            EXIT
          </div>

          <div className="top-nav-button">
            <HouseSimple className='icon' />
            CHANGE ROOM
          </div>

          <div className="top-nav-button"
            onClick={() => {
              handleImageDefault(focus)
            }}>
            <Pause className='icon' />
            VIEWS
          </div>

          <div className="top-nav-button">
            <ShareNetwork className='icon' />
            SHARE
          </div>
        </div>
      }

      {focus &&
        <div className="top-nav-button-container">
          <div className="top-nav-button"
            onClick={() => {
              handleImageFocus(focus)
            }}>
            <Check className='icon' />
            DONE
          </div>
        </div>
      }


    </section>
  )
}
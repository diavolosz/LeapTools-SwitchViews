import '../styles/TopNav.scss'

import { SignIn, HouseSimple, Pause, ShareNetwork, Check, Trash } from "phosphor-react"

export default function TopNav(props) {

  const {
    data,
    setData,
    handleImageFocus,
    handleImageDefault,
    focus,
    currentItemIndex,
    setCurrentItemIndex } = props


  // deleting item will return to previous child and then reseting state to one without the item of deletion.
  //must cover edge case where last item in the state is being removed (e.g. no item left)
  const handleDelete = () => {
    console.log(`delete item ${currentItemIndex}`)

    if (currentItemIndex === 0) {
      const scrollLeftOnUpdate = () => {
        let dataUpdateOnDelete = [...data]
        dataUpdateOnDelete.splice(currentItemIndex, 1)
        setData(dataUpdateOnDelete)
        setCurrentItemIndex(currentItemIndex)
      }
      setTimeout(scrollLeftOnUpdate, 800)

    } else {
      let elem = document.getElementById("scroll-target")
      elem.scrollBy({ left: (-window.innerWidth * 0.85), behavior: 'smooth' })

      const scrollLeftOnUpdate = () => {
        let dataUpdateOnDelete = [...data]
        dataUpdateOnDelete.splice(currentItemIndex, 1)
        setData(dataUpdateOnDelete)
        setCurrentItemIndex(currentItemIndex - 1)
      }
      setTimeout(scrollLeftOnUpdate, 800)
    }



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
              handleDelete()
            }}>
            <Trash className='icon' />
            DELETE
          </div>
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
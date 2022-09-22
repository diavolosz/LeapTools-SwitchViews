

import { useEffect } from 'react'
import '../../styles/ViewList/ViewListItem.scss'

import ViewListBotNav from "./ViewListBotNav"

export default function ViewListItem(props) {


  const {
    focus,
    index,
    image,
    location,
    floorType,
    wallType,
    botNavStatus,
    setData,
    setCurrentItemIndex,
    currentItemIndex } = props

  //scroll left or right on item click 
  const handleScroll = (clickedItemIndex) => {
    let elem = document.getElementById("scroll-target")
    if (clickedItemIndex > currentItemIndex) {
      elem.scrollBy({ left: (window.innerWidth * 0.85), behavior: 'smooth' })
    }
    if (clickedItemIndex < currentItemIndex) {
      elem.scrollBy({ left: (-window.innerWidth * 0.85), behavior: 'smooth' })
    }
  }


  //keep track of the current item of focus to apply zoom efect when VIEWS is cicked 
  useEffect(() => {
    let target = document.getElementsByClassName("view-list-item-container")
    let currentImage = target[currentItemIndex]
    let previousChild
    if (currentItemIndex - 1 < 0) {
      previousChild = target[0]
    } else {
      previousChild = target[currentItemIndex - 1]
    }

    if (focus === true) {
      currentImage.classList.remove("imageZoom");
      previousChild.classList.remove("child-offset")
    }
    if (focus === false) {
      currentImage.classList.add("imageZoom");
      previousChild.classList.add("child-offset")
    }
  }, [focus])


  //apply greyscale and blur to non-focused item 
  useEffect(() => {
    let target = document.getElementsByClassName("view-list-item-container")
    let currentImage = target[currentItemIndex]

    if (currentImage) {
      currentImage.classList.remove("image-out-focus");

      for (let x = 0; x < target.length; x++) {
        if (x !== currentItemIndex) {
          target[x].classList.add("image-out-focus");
        }
      }
    }

  }, [currentItemIndex])


  return (
    <section className={`view-list-item-container`}>
      <div className="view-img-container"
        onClick={() => {
          handleScroll(index)
          setCurrentItemIndex(index)
        }}>
        <img className='room-img' src={image} alt='room-img' />
      </div>

      <ViewListBotNav
        image={image}
        location={location}
        floorType={floorType}
        wallType={wallType}
        botNavStatus={botNavStatus}
        setCurrentItemIndex={setCurrentItemIndex}
        currentItemIndex={currentItemIndex}
        setData={setData}
        index={index}
      />
    </section>
  )
}



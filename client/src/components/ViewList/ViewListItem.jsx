

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
    setCurrentItemIndex,
    currentItemIndex } = props

  const handleScroll = (clickedItemIndex) => {
    let elem = document.getElementById("scroll-target")
    if (clickedItemIndex > currentItemIndex) {
      elem.scrollBy({left: (window.innerWidth*0.85), behavior: 'smooth'})
      // console.log('scroll right')
    }
    if (clickedItemIndex < currentItemIndex) {
      elem.scrollBy({left: (-window.innerWidth*0.85), behavior: 'smooth'})
      // console.log('scroll left')
    }
    // console.log(clickedItemIndex)
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
      // console.log('Zoom Out')
      currentImage.classList.remove("imageZoom");
      previousChild.classList.remove("child-offset")
    } 
    if (focus === false) {
      // console.log('Zoom In')
      currentImage.classList.add("imageZoom");
      previousChild.classList.add("child-offset")
    }
  }, [focus, currentItemIndex])


  //apply greyscale and blur to non-focused item 
  useEffect(() => {
    let target = document.getElementsByClassName("view-list-item-container")
    let currentImage = target[currentItemIndex]

    currentImage.classList.remove("image-out-focus");

    for (let x = 0; x < target.length; x++) {
      if (x !== currentItemIndex) {
        target[x].classList.add("image-out-focus");
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
        <img className='room-img' src={image} alt='room-img'/>
      </div>

      <ViewListBotNav
        location={location}
        floorType={floorType}
        wallType={wallType}
        botNavStatus={botNavStatus}
      />
    </section>
  )
}



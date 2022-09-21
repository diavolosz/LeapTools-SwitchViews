import '../../styles/ViewList/ViewList.scss'

import { Plus } from "phosphor-react"

import ViewListItem from "./ViewListItem"
import { useState } from 'react'

const imageData = [
  {
    image: 'img/v1.jpg',
    location: 'living room',
    floorType: 'Dark forest hardwood',
    wallType: 'Pearl while'
  },
  {
    image: 'img/v2.jpg',
    location: 'bedroom',
    floorType: 'Earl grey carpet',
    wallType: 'Light grey'
  },
  {
    image: 'img/v3.jpg',
    location: 'living room',
    floorType: 'Dark forest hardwood',
    wallType: 'Pearl while'
  },
  {
    image: 'img/v4.jpg',
    location: 'living room',
    floorType: 'Dark forest hardwood',
    wallType: 'Pearl while'
  },
  {
    image: 'img/v1.jpg',
    location: 'living room',
    floorType: 'Dark forest hardwood',
    wallType: 'Pearl while'
  },
  {
    image: 'img/v2.jpg',
    location: 'bedroom',
    floorType: 'Earl grey carpet',
    wallType: 'Light grey'
  },
]




export default function ViewList(props) {

  const { focus, botNavStatus, imageZoom, currentItemIndex, setCurrentItemIndex } = props



  const viewListDisplay = imageData.map((imageInfo, index) => {
    const { image, location, floorType, wallType } = imageInfo
    return (
      <ViewListItem
        focus={focus}
        key={index}
        index={index}
        image={image}
        location={location}
        floorType={floorType}
        wallType={wallType}
        botNavStatus={botNavStatus}
        imageZoom={imageZoom}
        setCurrentItemIndex={setCurrentItemIndex}
        currentItemIndex={currentItemIndex}
      />
    )
  })

  return (
    <section id='scroll-target' className={`view-list-container`} >

      {viewListDisplay}
      <div className='add-view-button'>
        <Plus className='icon' size={60} />
      </div>
    </section>
  )
}
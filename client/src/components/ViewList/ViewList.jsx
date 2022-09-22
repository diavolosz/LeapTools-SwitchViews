import '../../styles/ViewList/ViewList.scss'


import ViewListItem from "./ViewListItem"
import AddViewItemButton from "./AddViewItemButton"
import { useState } from 'react'
import { useEffect } from 'react'

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
]
  // {
  //   image: 'img/v3.jpg',
  //   location: 'living room',
  //   floorType: 'Dark forest hardwood',
  //   wallType: 'Pearl while'
  // },
  // {
  //   image: 'img/v4.jpg',
  //   location: 'living room',
  //   floorType: 'Dark forest hardwood',
  //   wallType: 'Pearl while'
  // },
  // {
  //   image: 'img/v1.jpg',
  //   location: 'living room',
  //   floorType: 'Dark forest hardwood',
  //   wallType: 'Pearl while'
  // },
  // {
  //   image: 'img/v2.jpg',
  //   location: 'bedroom',
  //   floorType: 'Earl grey carpet',
  //   wallType: 'Light grey'
  // },



export default function ViewList(props) {

  const { focus, botNavStatus, imageZoom, currentItemIndex, setCurrentItemIndex } = props

  const [ form, setForm ] = useState(false)

  const [ data, setData ] = useState([])


  useEffect(() => {
    setData(imageData)
  }, [imageData])

  const viewListDisplay = data.map((imageInfo, index) => {
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

      <AddViewItemButton
        form={form}
        setForm={setForm}
        data={data}
        setData={setData}
      />

    </section>
  )
}
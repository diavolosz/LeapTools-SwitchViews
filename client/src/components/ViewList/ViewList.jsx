import '../../styles/ViewList/ViewList.scss'


import ViewListItem from "./ViewListItem"
import AddViewItemButton from "./AddViewItemButton"
import { useState } from 'react'


export default function ViewList(props) {

  const { data, setData, focus, botNavStatus, imageZoom, currentItemIndex, setCurrentItemIndex } = props

  const [form, setForm] = useState(false)


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
        data={data}
        setData={setData}
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
        setCurrentItemIndex={setCurrentItemIndex}
        currentItemIndex={currentItemIndex}
      />

    </section>
  )
}